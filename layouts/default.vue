<template lang="pug">
v-app(:dark="dark")
  v-toolbar(color="blue darken-3" dark app clipped-left fixed dense)
    v-toolbar-side-icon(@click.stop="navigation = !navigation")
    v-toolbar-title(class="ml-0 pl-3")
      span(class="hidden-xs-only") SaintBook
    div(class="d-flex align-center" style="margin-left: auto")
      v-auth-button
      v-btn(icon @click="dark = !dark" v-if="$auth.loggedIn")
        v-icon color_lens
      v-btn(icon large @click.stop="project_drawler = !project_drawler")
        v-icon grade
  
  v-navigation-drawer(fixed clipped temporary app v-model="navigation")
    template(v-if="$auth.user")
      v-img(:aspect-ratio="16/9", :src="$auth.user.avatar || '/no-img.png'")
        v-layout.pa-2.column.fill-height.lightbox.white--text
          v-spacer
          v-flex.shrink
            div.subheading {{ $auth.user.name }} {{ $auth.user.surname }}
            div.body-1 {{ $auth.user.email }}
    v-list(dense)
      v-list-tile(nuxt to="/" exact)
        v-list-tile-action: v-icon dashboard
        v-list-tile-content: v-list-tile-title Новости
      template(v-if="$auth.loggedIn")
        v-list-tile(nuxt to="/profile" exact)
          v-list-tile-action: v-icon person
          v-list-tile-content: v-list-tile-title Личный кабинет
      v-list-tile(nuxt to="/chat" exact)
        v-list-tile-action: v-icon question_answer
        v-list-tile-content: v-list-tile-title Чат
      v-list-tile(nuxt to="/admin" exact v-if="$auth.user && $auth.user.access > 0")
        v-list-tile-action: v-icon account_box
        v-list-tile-content: v-list-tile-title Администрирование
  
  v-navigation-drawer(fixed right temporary app v-model="project_drawler")
    v-list(dense)
      template(v-for="project in projects")
        v-list-tile(avatar nuxt :to="project.link")
          v-list-tile-avatar
            v-icon(color="blue") {{ project.icon }}
          v-list-tile-content
            v-list-tile-title {{ project.title }}

  v-content
    nuxt/

</template>

<script lang="ts">
import Vue from 'vue'
import VAuthButton from '~/components/auth/button.vue'

export default Vue.extend({
  data: function() {
    const self = this
    return {
      dark: false,
      navigation: false,
      project_drawler: false,
      projects: [
        { title: 'Saintbook Studio', icon: 'web', link: '/studio' }, // Для конструкора
        { title: 'SkillsBook', icon: 'book', link: '/education' },
        { title: 'Saintbook Games', icon: 'games', link: '/games' },
        // { title: 'Saintbook Dev', icon: 'extension', link: '/dev' } // Приложений
      ],
      exit: () => this.$auth.reset()
    }
  },
  props: {
    source: String
  },
  components: { VAuthButton }
})
</script>

<style lang="stylus" scoped>
.lightbox {
  box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
}
</style>
