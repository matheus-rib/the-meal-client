<template lang="pug">
.empty
  .empty-icon
    i(:class="iconClass" v-if="iconClass")
  p.empty-title.h5 {{ title }}
  p.empty-subtitle {{ subtitle }}
</template>

<script>
export default {
  props: {
    iconClass: { type: String, default: 'fa-5x fas fa-bone' },
    title: { type: String, default: 'No results.' },
    subtitle: { type: String, default: 'No matching results were found' },
  },
}
</script>
