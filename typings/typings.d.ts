export interface KeysObject<Type = any> {
  [key: string]: Type
}

export interface IframeWindow extends Window, KeysObject<any> { }