<template lang="pug">
.text-primary {{ instructions }}
</template>

<script>
export default {
  props: {
    instructions: { type: String, required: true },
  },
}
</script>
