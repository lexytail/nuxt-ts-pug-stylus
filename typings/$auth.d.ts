import { User } from '~/assets/models'
import { AppContext } from './context'
import { KeysObject } from './typings'

declare module "vue/types/vue" {
  
  interface Vue {
  
    $auth: $Auth
  
  }

}

export interface $Auth {

  $state: AuthState

  $storage: AuthStorage

  ctx: AppContext

  options: KeysObject // AuthStorageOptions

  strategies: KeysObject

  _errorListeners: Function[]

  busy: any

  loggedIn: boolean

  state: AuthState

  strategy: KeysObject // AuthStrategy

  user: User | null

  reset: () => void

  callOnError: (error: Error) => void

  fetchUser: () => Promise<void>

  fetchUserOnce: () => Promise<void>

  getState: (key: string) => string

  getToken: (stratagy: string) => string

  setState: (key: string, val: any) => any

  setToken: (value: string) => any

  logout: () => Promise<void>

  login: () => Promise<void>

  loginWith: (strategy: string) => Promise<void>

  syncToken: (strategy: string) => string

  onError: (error: Error, name: string, endpoint: string) => any

}

interface AuthStorage {

  ctx: AppContext

  options: KeysObject // AuthStorageOptions

  state: AuthState

}

interface AuthState {

  loggedIn: boolean

  strategy: string

  user: User | null

}