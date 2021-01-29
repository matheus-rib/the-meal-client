<template lang="pug">
router-link.card.height-100(:to="{ name: 'random'}")
  .card-image
    img.img-responsive(:src="meal.strMealThumb" :alt="meal.strMeal")
  .card-header
    .card-title.h5.text-primary.text-center {{meal.strMeal}}
</template>

<script>
export default {
  props: { meal: { type: Object, required: true } },
}
</script>

<style lang="stylus" scoped>
@import '../../../styles/_colors.styl'

a
  &:hover
    text-decoration none

    .text-primary
      color warning !important


.card
  .card-image
    display flex
    justify-content center
    align-items center
    padding-top 20px
    .img-responsive
      max-height 150px
</style>
