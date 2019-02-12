<template lang="pug">
section(id="section-main")
  v-parallax(src="/studio/bg-shadow.jpg" height="700")
    v-layout(column align-center justify-center class="white--text")
      img(src="https://vuetifyjs.com/themes/parallax-starter/assets/vuetify.png" alt="Vuetify.js" height="200")
      h1(class="white--text mb-2 display-2 text-xs-center"): b {{ error.statusCode }}
      div(class="headline mb-3 text-xs-center") {{ error.message }}
      v-btn(v-if="error.statusCode === 404" class="blue lighten-2 mt-5" dark large nuxt to="/") Вернутся на главную
</template>

<script>
export default {
  name: 'nuxt-error',
  props: ['error'],
  head () {
    return {
      title: this.error.message || 'An error occured'
    }
  }
}
</script>