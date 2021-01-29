<template lang="pug">
.flex-centered.content-full-height(v-if="loading") #[.loading.loading-lg]
.container.grid-xl(v-else)
  page-title(icon="fas fa-hamburger" :title="meal.strMeal" subtitle="Learn how to prepare")
  .columns
    .column.col-3.col-xs-12
      img.img-responsive(:src="meal.strMealThumb" alt="Meal picture")
    .column.col-9.col-xs-12
      .meal-info-entry 
        .info.mr-1 ID:
        .text-primary {{meal.idMeal}}
      .meal-info-entry 
        .info.mr-1 Name:
        .text-primary {{meal.strMeal}}
      .meal-info-entry 
        .info.mr-1 Category:
        .text-primary {{meal.strCategory}}
      .meal-info-entry 
        .info.mr-1 Area:
        .text-primary {{meal.strArea}}
      .meal-info-entry 
        .info.mr-1 Tags:
        .text-primary {{meal.strTags}}
      .meal-info-entry
        a.info.mr-1(:href="meal.strSource" target="_blank") Check out the source
      .tooltip.fit-content(:data-tooltip="youtubeButtonTooltip")
        i.fab.fa-youtube.fa-2x(:class="youtubeButtonClass" @click="toVideo")
  ingredients-and-instructions-tab(:ingredients="ingredients" :instructions="meal.strInstructions")
</template>

<script>
import { mapState, mapActions } from 'vuex'
import mealIngredients from '@/utils/mealIngredients'
import IngredientsAndInstructionsTab from './components/IngredientsAndInstructionsTab'

export default {
  data() {
    return {
      loading: false,
      ingredients: [],
    }
  },

  computed: {
    ...mapState('meals', ['meal']),

    youtubeAvailable() {
      return Boolean(this.meal.strYoutube)
    },

    youtubeButtonClass() {
      return this.youtubeAvailable ? 'text-warning c-hand' : 'text-primary'
    },

    youtubeButtonTooltip() {
      return this.youtubeAvailable ? 'Video available' : 'No video available'
    },
  },

  components: { IngredientsAndInstructionsTab },

  methods: {
    ...mapActions('meals', ['fetchMeal', 'resetMeal']),

    toVideo() {
      if (this.youtubeAvailable) window.open(this.meal.strYoutube, '_blank')
    },
  },

  async created() {
    if (!this.meal) {
      try {
        this.loading = true
        await this.fetchMeal(this.$route.params.mealId)
      } catch (e) {
        this.$toaster.error(e.message)
      } finally {
        this.loading = false
      }
    }
    this.ingredients = mealIngredients(this.meal)
  },

  beforeDestroy() {
    this.resetMeal()
  },
}
</script>

<style lang="stylus" scoped>
@import '../../styles/_colors.styl'

.meal-info-entry
  display flex

  .info
    color warning

.fit-content
  width fit-content
</style>
