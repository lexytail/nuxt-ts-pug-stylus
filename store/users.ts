import { MutationTree, ActionTree, Store } from 'vuex'
import { AxiosResponse } from 'axios'
import { VxUser, User } from '~/assets/models/user'

export const state = (): VxUser => ({
  user: new User
})

export const mutations: MutationTree<VxUser> = {

  add(state, user: User[]) {

    state.user = user[0]

  }

}

export const actions: ActionTree<VxUser, Store<VxUser>> = {

  async fetch() {

    return this.$axios.get('/users')

  },

  async pull({ commit, dispatch }) {

    const response: AxiosResponse<User> = await dispatch('fetch')

    commit('add', response.data)

  }

}
