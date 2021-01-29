<template lang="pug">
.text-ellipsis
  .divider
  footer.text-dark(:class="{ collapsed: collapsed }")
    span
      a(href='https://github.com/matheus-rib/the-meal-client' target='_blank') &nbsp;The Meal Client
      | . Developed by:
      a(href='https://github.com/matheus-rib/' target='_blank') &nbsp;Matheus Ribeiro&nbsp;
    code
      small (v{{version}})
</template>

<script>
import { version } from '../../../package'

export default {
  props: { collapsed: Boolean },
  data() {
    return {
      version,
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '../../styles/_colors.styl'

footer
  text-align right
  padding 5px
  font-size .7rem
  a
    text-decoration none

    &:hover
      color darken(warning, 10) !important
</style>
