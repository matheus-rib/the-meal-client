<template lang="pug">
.item-container
  input(type="checkbox" hidden name="accordion-radio" :id="`menu-title${indexMenu}`")
  .parent-menu-item
    i.fa-fw.left-icon(v-if="menu.icon" :class="menu.icon")
    label.accordion-header.c-hand(:for="`menu-title${indexMenu}`")
      .accordion-label {{ menu.label }}
      i.fas.fa-angle-right
  .accordion-body
    ul.menu.menu-nav
      li.menu-item(v-for="item in menu.subItems" @click="$emit('selectItem')")
        router-link(:to="item.to") {{ item.label }}
          i.fa.fa-fw(v-if="item.icon" :class="{[item.icon]: true}")
</template>

<script>
export default {
  data() {
    return { currentRoute: false }
  },

  props: {
    menu: Object,
    indexMenu: Number,
  },
}
</script>

<style lang="stylus" scoped>
@import '../../styles/_colors.styl'

li
  a
    width 100%

.parent-menu-item label i
  transition all .3s ease

.accordion input:checked ~ .parent-menu-item label i
  transform rotate(90deg)

.parent-menu-item
  display flex
  align-items baseline

  .labeled-icon
    align-items baseline
    display flex
    margin-bottom 8px
    flex 1

    .left-icon
      margin-right 10px

  .fas.fa-angle-right
    margin-top 3px

  &:hover
    color darken(warning, 10) !important

.d-flex
  align-items center
  justify-content space-between

.menu
  padding 0

  .menu-item
    font-size 14px
    display flex
    align-items baseline
    margin-left 11px

    &:hover
      color danger

    &:last-child
      padding-bottom 3px

    a
      padding 2px 0
      margin-left 0

      &:hover
        background-color transparent
        color darken(primary, 30) !important

        i
          color darken(primary, 30) !important

      &:focus
        background-color transparent
        box-shadow none

      i
        float left
        margin 2px 5px 2px 0

.accordion-header
  display flex
  flex 1
  padding 0
  padding 2px 0
  align-items center
  .accordion-label
    padding-left 10px
    flex 1

.router-link-exact-active
  color danger !important

.currentRoute
  color danger
</style>
