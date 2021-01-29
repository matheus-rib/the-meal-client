<template lang="pug">
.list-manager
  .flex-centered.content-full-height(v-if="loading") #[.loading.loading-lg]
  slot(v-else-if="list && list.length > 0")
  .flex-centered.content-full-height(v-else)
    empty-list
</template>

<script>
import EmptyList from './EmptyList'

export default {
  components: { EmptyList },
  props: {
    loading: { type: Boolean, default: false },
    list: { type: Array, default: null },
  },
}
</script>
