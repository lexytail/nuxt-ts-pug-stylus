import { MutationTree, ActionTree, Store, GetterTree } from 'vuex'
import { AxiosResponse } from 'axios'
import { VxNews, News } from '~/assets/models'
import { genNews } from '~/assets/mocks'

export const state = (): VxNews => ({ data: [] })

export const mutations: MutationTree<VxNews> = {

  add(state, news: News[]) {

    state.data = [...news]

  }

}

export const actions: ActionTree<VxNews, Store<VxNews>> = {

  async refresh() {

    return this.$axios.patch('/services/vkontakte')

  },

  async fetch(context, params: object = {}) {

    try {

      return this.$axios.get('/services/vkontakte', { params })

    } catch(error) {

      console.log(error)

    }

  },

  async pull({ commit, dispatch }) {

    if (process.env.dev) return commit('add', genNews(10))

    const response: AxiosResponse<News[]> = await dispatch('fetch')

    commit('add', response.data)

  }

}

export const getters: GetterTree<VxNews, Store<VxNews>> = {}