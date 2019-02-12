import { Vue } from '~/modules/nuxt'
import { Route } from 'vue-router'
import { Store } from 'vuex'
import { $Axios } from 'typings/$axios'
import { KeysObject } from './typings';

declare const router: Route

declare module "vue/types/vue" {

  interface Vue {

    head: KeysObject<any>
  
    $axios: $Axios
  
  }

}

declare interface AppContext {

  $axios: $Axios

  app: Vue

  base: string

  env: KeysObject

  error: E500

  isClient: boolean

  isDev: boolean

  isHMR: boolean

  isServer: boolean

  isStatic: boolean

  next: (location: string) => void

  nuxtState: NuxtState

  params: typeof router.params

  payload: any

  query: typeof router.query

  redirect: Redirect

  route: typeof router

  store: Store<any>

  _errored: boolean

  _redirected: boolean

}

interface NuxtState {

  data: any[]

  error: any

  layout: string

  serverRendered: boolean

  state: KeysObject

}

interface Redirect {
  (path: string): void
  (status: number, path: string, query?: KeysObject): void
}

interface E500 {
  (params: { statusCode: number, message: any }): void
}