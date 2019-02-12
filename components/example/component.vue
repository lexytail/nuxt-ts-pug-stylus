<template lang="pug">

section
  h3 Компонент

</template>

<script lang="ts">
import { Prop, Vue, Component } from 'vue-property-decorator'
import VAuthAlert from '~/components/auth/alert.vue'

@Component({
  name: 'example-component',
})
export class VExampleComponent extends Vue {



}

export default VExampleComponent
</script>