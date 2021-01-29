<template lang="pug">
.flex-centered.content-full-height(v-if="loading") #[.loading.loading-lg]
.container.grid-xl(v-else)
  page-title(:title="ucfirst(this.$route.params.category)" icon="fas fa-fw fa-drumstick-bite" :subtitle="`${ucfirst(this.$route.params.category)} meals`")
    div(slot="actions")
      search-input
  list-manager(:loading="loading" :list="mealsInCategoryList")
    .columns
      .column.col-4.col-lg-6.col-sm-12.mb-2.pb-2(v-for="meal in mealsInCategoryList")
        row(:meal="meal")
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { ucfirst } from 'paliari-js-utils'
import Row from './components/MealRow'

export default {
  data() {
    return {
      loading: false,
      ucfirst,
    }
  },

  computed: {
    ...mapState('categories', ['mealsInCategoryList']),
  },

  components: { Row },

  methods: {
    ...mapActions('categories', ['fetchMealsInCategory']),
  },

  async created() {
    try {
      this.loading = true
      await this.fetchMealsInCategory(this.$route.params.category)
    } catch (e) {
      this.$toaster.error(e.message)
    } finally {
      this.loading = false
    }
  },
}
</script>
