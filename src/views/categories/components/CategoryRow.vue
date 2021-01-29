<template lang="pug">
router-link.card.height-100(:to="{ name: 'category', params: { category: category.strCategory } }")
  .card-image
    img.img-responsive(:src="category.strCategoryThumb" :alt="category.strCategory")
  .card-header
    .card-title.h5.text-primary {{category.strCategory}}
  .card-body {{category.strCategoryDescription}}
</template>

<script>
export default {
  props: { category: { type: Object, required: true } },
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
