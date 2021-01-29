<template lang="pug">
.py-2
  .columns.align-center
    .column.col-auto
      i.text-warning.fa-4x.fa-fw(v-if="icon" :class="icon")
    .column
      .h3 {{ title }}
      span(v-if="subtitle") {{ subtitle }}
    .column.col-auto
      slot(name="actions")
  .divider
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    icon: { type: String, default: '' },
  },
}
</script>
