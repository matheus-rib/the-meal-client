<template lang="pug">
.flex-centered.content-full-height(v-if="loading") #[.loading.loading-lg]
.container.grid-xl(v-else)
  page-title(title="Search" icon="fas fa-fw fa-search" subtitle="Search results")
      div(slot="actions")
        search-input
  list-manager(:loading="loading" :list="mealsList")
    .columns
      .column.col-4.col-lg-6.col-sm-12.mb-2.pb-2(v-for="meal in mealsList")
        row(:meal="meal")
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Row from './components/SearchRow'

export default {
  data() {
    return {
      loading: false,
    }
  },

  computed: {
    ...mapState('meals', ['mealsList']),
  },

  components: { Row },

  methods: {
    ...mapActions('meals', ['fetchMeals']),

    async fetchData(termToSearch) {
      try {
        this.loading = true
        await this.fetchMeals(termToSearch)
      } catch (e) {
        this.$toaster.error(e.message)
      } finally {
        this.loading = false
      }
    },
  },

  async created() {
    await this.fetchData(this.$route.query.search)
  },

  watch: {
    async '$route.query.search'(newValue) {
      await this.fetchData(newValue)
    },
  },
}
</script>
