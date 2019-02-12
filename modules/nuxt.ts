import Vue, { ComponentOptions } from 'vue'
import { Component as $Component } from 'nuxt-property-decorator'
import { KeysObject } from '~/typings/typings'

export { default as Vue } from 'vue'

export const Component: (options: Nuxt) => any = $Component

interface Nuxt extends ComponentOptions<Vue> {

  head?: KeysObject<string | KeysObject<string> | KeysObject<string>[]>

  layout?: string

  middleware?: string

}