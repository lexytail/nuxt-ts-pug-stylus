<template lang="pug">
v-app

  nuxt/

</template>

<script lang="ts">
import { Vue, Component } from '~/modules/nuxt'

@Component({

})
export class VLandingLayout {

  public hello() {

    console.log('HI FROM DUDE')

  }

}

export default VLandingLayout
</script>