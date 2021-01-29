<template lang="pug">
.container.grid-xl
  page-title(icon="fas fa-info" title="About" subtitle="About this project")
    div(slot="actions")
      search-input
  .about-content
    .hero.bg-gray 
      h3.text-center.text-warning The Meal Client
      p List and shows recipes from #[a(href="https://www.themealdb.com" target="_blank") TheMealDB] fetching data from a #[a(href="https://github.com/matheus-rib/the-meal-api" target="_blank") self-made API]
      p.dependencies-paragraph Project made in &nbsp;
        a(href="https://vuejs.org" target="_blank") Vue.JS
        span &nbsp; and it's bundle (
        a(href="https://vuex.vuejs.org" target="_blank") Vuex 
        span and 
        a(href="https://router.vuejs.org" target="_blank") Vue Router
        span ), and the following dependencies:
      .dependencies-container
        dl
          dd 
            a(href="https://www.npmjs.com/package/axios" target="_blank") Axios
          dd
            a(href="https://www.npmjs.com/package/core-js" target="_blank") Core-JS
          dd 
            a(href="https://fontawesome.com" target="_blank") Font Awesome
          dd 
            a(href="https://www.npmjs.com/package/paliari-js-utils" target="_blank") Paliari JS Utils
          dd
            a(href="https://www.npmjs.com/package/qs" target="_blank") QS
          dd 
            a(href="https://picturepan2.github.io/spectre/index.html" target="_blank") Spectre.css
          dd 
            a(href="https://www.npmjs.com/package/v-toaster" target="_blank") V-Toaster
        p Developed with the following Pre-Processors:
        dl
          dd 
            a(href="https://pugjs.org/api/getting-started.html" target="_blank") Pug
          dd 
            a(href="https://sass-lang.com" target="_blank") SCSS
          dd 
            a(href="https://stylus-lang.com" target="_blank") Stylus
</template>

<style lang="stylus" scoped>
@import '../../styles/_colors.styl'

.about-content
  .hero.bg-gray
    padding 20px
    h3
      margin-bottom 1.5em
    a
      color warning

      &:hover
        color darken(warning, 10)
        box-shadow none
        text-decoration none
    .dependencies-container
      dl
        dd
          margin-bottom 10px
</style>
