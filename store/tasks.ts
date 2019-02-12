import { MutationTree, ActionTree, Store, GetterTree } from 'vuex'
import { AxiosResponse } from 'axios'
import { VxTask, Task } from '~/assets/models'

export const state = (): VxTask => ({
  data: []
})

export const mutations: MutationTree<VxTask> = {

  add(state, tasks: Task[]) {
    state.data = []
    state.data.push(...tasks)
    state.data.sort()

  },

  update(state, { task, updates }) {
    Object.assign(task, updates)
  },

  remove(state, { task }) {

    state.data.splice(state.data.indexOf(task), 1)

  }

}

export const actions: ActionTree<VxTask, Store<VxTask>> = {

  async fetch(context, order: string) {
    return this.$axios.get('/tasks', { params: { order } })
  },

  async pull({ commit, dispatch }, { count = 15, order }) {
    // if (process.env.dev) return commit('add', gen_tasks(count))
    commit('add', (await dispatch('fetch', order) as AxiosResponse<Task[]>).data)
  },

  async update({ commit }, { task, updates }) {
    if (!process.env.dev) await this.$axios({ method: 'patch', url: `/tasks/${task._id}`, data: updates, params: { _id: task._id } })
    commit('update', { task, updates })
  },

  async remove({ commit }, { task, order }) {
    if (!process.env.dev) await this.$axios({ method: 'delete', url: '/tasks', data: task, params: { order: order } })
    commit('remove', { task })

  },

  async create({ commit, dispatch }, { task, order }) {
    if (!process.env.dev) await this.$axios({ method: 'put', url: '/tasks', data: task })
    commit('add', (await dispatch('fetch', order) as AxiosResponse<Task[]>).data)

  }
}

export const getters: GetterTree<VxTask, Store<VxTask>> = {

  done: (state) => state.data.filter((task) => task.status === 'done'),

  process: (state) => state.data.filter((task) => task.status === 'process'),

  todo: (state) => state.data.filter((task) => task.status === 'todo')

}