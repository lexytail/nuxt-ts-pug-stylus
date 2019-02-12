<template lang="pug">

div
  h2 Добро пожаловать на главную
  v-example-component

</template>

<script lang="ts">
import { Vue, Component } from '~/modules/nuxt'
import VExampleComponent from '~/components/example/component.vue'
import { AppContext } from '~/typings/context'

@Component({
  components: { VExampleComponent }
})
export class VIndexPage extends Vue {

}

export default VIndexPage
</script>