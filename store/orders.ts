import { MutationTree, ActionTree, Store, GetterTree } from 'vuex'
import { AxiosResponse } from 'axios'
import { VxOrder, Order } from '~/assets/models'
import { genOrders } from '~/assets/mocks'

export const state = (): VxOrder => ({
  data: [],
  current: 0
})

export const mutations: MutationTree<VxOrder> = {

  add(state, orders: Order[] | Order) {

    if (orders instanceof Array) state.data = [...orders]

    else state.data.push(orders)
  },


  set(state, index: number) {

    state.current = index
  },


  update(state, callback: Function) {

    callback(state)
  }

}

export const actions: ActionTree<VxOrder, Store<VxOrder>> = {

  async fetch(context, order: Order) {

    return this.$axios.get('/orders', { data: order, params: { $populate: 'reporter assignees' } })
  },

  async update({ commit, dispatch, state }, order: Order) {

    commit('update', (state) => Object.assign(state.data[state.current], order))

    if (process.env.dev) return null

    await this.$axios.patch(`/orders/${this.getters['orders/current']._id}`, this.getters['orders/current'])
  },

  async patch({ commit, dispatch, state }, { order, user, statement }) {

    commit('update', (state) => {

      if (statement === 'assignee') state.data[state.data.indexOf(order)].assignees.push(user)

      else state.data[state.data.indexOf(order)].reporter = user
    })

    if (process.env.dev) return null

    await this.$axios.patch(`/orders/${order._id}`, { _id: user, statement })
  },


  async pull({ commit, dispatch }, count: number = 6) {

    if (process.env.dev) commit('add', genOrders(count))

    else commit('add', (await dispatch('fetch') as AxiosResponse<Order[]>).data)
  },

  async put({ commit }, order: Order) {

    if (!process.env.dev) await this.$axios.put("/orders", order)

      .catch((error) => console.dir(error))

  },

  async remove({ commit }, order: Order) {

    await this.$axios.delete(`/orders/${order._id}`)

      .catch((error) => console.dir(error))
  }
}


export const getters: GetterTree<VxOrder, Store<VxOrder>> = {

  done: (state) => state.data.filter((order) => order.status === 'done'),

  confirmed: (state) => state.data.filter((order) => order.status === 'confirmed'),

  process: (state) => state.data.filter((order) => order.status === 'process'),

  new: (state) => state.data.filter((order) => order.status === 'new'),

  current: (state) => state.data[state.current]

}