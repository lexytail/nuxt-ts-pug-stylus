import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export declare interface $Axios extends AxiosInstance {

  setHeader: (name: string, value: string, scopes?: string) => void
  
  setToken: (token: string, type: string, scopes?: string) => void

  onRequest: (handler: (config: AxiosRequestConfig) => void) => void

  onResponse: (handler: (response: AxiosResponse) => void) => void

  onRequestError: (handler: (error: any) => void) => void

  onResponseError: (handler: (error: any) => void) => void

  onError: (handler: (error: any) => void) => void

}