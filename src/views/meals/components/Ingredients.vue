<template lang="pug">
.content
  ul(v-for="ingredient in ingredients")
    li {{ ingredient.ingredient }} - {{ ingredient.measure }}
</template>

<script>
export default {
  props: { ingredients: { type: Array, required: true } },
}
</script>
