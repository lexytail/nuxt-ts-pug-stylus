<template lang="pug">

div
  h2 Добропожаловать на главную
  v-expample-component

</template>

<script lang="ts">
import { Vue, Component } from '~/modules/nuxt'
import VExampleComponent from '~/components/expample/component.vue'
import { AppContext } from '~/typings/context'

@Component({
  components: {
    VExampleComponent
  }
})
export class VIndexPage extends Vue {

  public show: boolean = false

  protected async fetch({ store }: AppContext) {

    await store.dispatch('news/pull')

  }

}

export default VIndexPage
</script>