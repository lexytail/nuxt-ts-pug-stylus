import { MutationTree, ActionTree, Store } from 'vuex'
import { AxiosResponse, AxiosRequestConfig } from 'axios'
import { VxGame, Game } from '~/assets/models/game'
import { genGames } from '~/assets/mocks'

export const state = (): VxGame => ({

  list: [],

  current: new Game

})

export const mutations: MutationTree<VxGame> = {

  add(state, games: Game[]) {

    state.list = games

  },

  set(state, game: Game) {

    state.current = game

  }

}

export const actions: ActionTree<VxGame, Store<VxGame>> = {

  // async get({ commit }, id: string) {

  //   if (process.env.dev) return commit('set', genGames(1)[0])

  //   const response: AxiosResponse<Game> = await this.$axios.get(`/games/${id}`)

  //   commit('set', response.data)

  // },

  async create(store, data: Game) {

    if (process.env.dev) return genGames(1)[0]

    return this.$axios.put('games', data)

  },

  // async update(store, data: FormData) {

  //   return this.$axios.patch('/games', data)

  //     .catch((error) => console.dir(error))

  // },

  // async delete(store, params: FormData) {

  //   return this.$axios.delete('/games', params)

  //     .catch((error) => console.dir(error))

  // },

  // async splice(store, indexes: number[]) {

  //   this.state.data.splice(indexes[0], indexes[1])

  // },

  async get({ commit }, options?: AxiosRequestConfig | string) {

    if (process.env.dev) return commit('add', genGames(9))

    if (typeof options === 'string') {

      const { data }: AxiosResponse<Game> = await this.$axios.get(`games/${options}`)

      commit('set', data)

    } else {

      const { data }: AxiosResponse<Game[]> = await this.$axios.get('games', options)

      commit('add', data)

    }

  }

}
