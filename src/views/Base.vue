<template lang="pug">
sidebar(:menu-items="menuItems")
  .app-container
    .content.p-relative
      router-view
    footer-component
</template>

<script>
import menuItems from '@/lib/menuItems'
import Sidebar from '@/components/sidebar/Siderbar'
import FooterComponent from '@/components/layout/Footer'

export default {
  data() {
    return {
      menuItems,
    }
  },

  components: { Sidebar, FooterComponent },
}
</script>

<style lang="stylus" scoped>
.app-container
  display flex
  flex-direction column
  height 100vh
  .content
    flex 1
    background-color #fff
    overflow-y auto
    overflow-x hidden
</style>
