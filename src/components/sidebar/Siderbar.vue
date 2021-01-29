<template lang="pug">
  .off-canvas.off-canvas-sidebar-show
    .off-canvas-toggle.off-canvas-block
      a.btn.btn-link.btn-action(@click='active = !active')
        i.icon.icon-menu
    .off-canvas-sidebar(:class='{active}')
      .brand
        router-link(:to='{name: "home"}')
          .title-container.container
            i.fas.fa-pizza-slice.fa-2x.mr-2
            .text-warning The Meal
      div
        sidebar-items(@itemSelected='active = false' :menuItems="menuItems")
    a.off-canvas-overlay(@click='active = false')
    .off-canvas-content
      .content
        slot
</template>

<script>
import SidebarItems from './SidebarItems'

export default {
  components: { SidebarItems },

  data() {
    return { active: false }
  },

  props: {
    menuItems: { required: true, type: Array },
  },
}
</script>

<style lang="stylus" scoped>
@import '../../styles/_colors.styl'

.off-canvas .off-canvas-sidebar
  width 11rem
  height 100vh
  overflow auto
  background sidebar-background

.off-canvas-sidebar.active
  background background

.off-canvas-sidebar-show

  .off-canvas-toggle.off-canvas-block
    top 0
    left 0
    position sticky
    display none
    z-index 10
    align-items center
    overflow hidden

    a
      font-size 1rem
      margin-left 1rem

    .route-name
      padding-left 1rem
      color primary
      font-size .9rem

  .sidebar-items,.user-sidebar
    bottom 1.5rem
    -webkit-overflow-scrolling touch
    overflow-y auto
    position fixed

  .user-sidebar
    bottom 0

  .sidebar-items
    padding .5rem 1.5rem
    top 3.5rem

.off-canvas .off-canvas-content
  max-width 100%
  padding 0

.brand
  a
    margin 10px 0
    display flex
    align-items flex-start
    text-decoration none !important
    box-shadow none
    color warning

    .title-container
      display flex;
      align-items center;

      .text-warning
        font-size: 2em;

    &:hover, &:active, &:focus
      text-decoration none !important
      box-shadow none

@media(max-width:959px)
  .off-canvas-sidebar-show
    flex-wrap wrap

    .off-canvas-toggle.off-canvas-block
      display flex
      background-color background
      height 55px
</style>
