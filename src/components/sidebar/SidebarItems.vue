<template lang="pug">
.accordion-container
  div(v-for="(menu, index) in menuItems")
    .accordion
      accordion(v-if="menu.subItems" :menu="menu" :index-menu="index")
      router-link.standalone-item(v-else @click="itemSelected" :to="menu.to" :class="{'primary-color': menu.to.name.split('.')[0] === $route.name.split('.')[0]}")
        i.fa-fw(v-if="menu.icon" :class="{ [menu.icon]: true }")
        .accordion-header {{ menu.label }}
</template>

<script>
import Accordion from './Accordion'

export default {
  props: {
    menuItems: { required: true, type: Array },
  },

  components: { Accordion },

  methods: {
    itemSelected() {
      this.$emit('itemSelected')
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../../styles/_colors.styl'

.primary-color
  color warning !important

  i
    color warning !important

a
  box-shadow none
  color #3b4351
  text-decoration none
  &.router-link-exact-active
    color warning !important
  &:hover
    i, div
      color darken(warning, 10) !important

.standalone-item
  display flex
  align-items baseline

  i
    margin-right 10px
    color #3b4351

  a
    text-decoration none

    &:focus, &:active, &:hover
      text-decoration none
      box-shadow none

.accordion
  padding 2px 20px 2px 10px

.accordion-header
  margin-bottom 8px
  padding 0
</style>
