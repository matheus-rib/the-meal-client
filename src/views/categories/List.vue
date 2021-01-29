<template lang="pug">
.flex-centered.content-full-height(v-if="loading") #[.loading.loading-lg]
.container.grid-xl(v-else)
  page-title(title="Home" icon="fas fa-fw fa-home" subtitle="Meals categories")
  list-manager(:loading="loading" :list="categoriesList")
    .columns
      .column.col-4.col-lg-6.col-sm-12.mb-2.pb-2(v-for="category in categoriesList")
        row(:category="category")
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Row from './components/CategoryRow'

export default {
  data() {
    return {
      loading: false,
    }
  },

  computed: {
    ...mapState('categories', ['categoriesList']),
  },

  components: { Row },

  methods: {
    ...mapActions('categories', ['fetchCategoriesList']),
  },

  async created() {
    try {
      this.loading = true
      await this.fetchCategoriesList()
    } catch (e) {
      this.$toaster.error(e.message)
    } finally {
      this.loading = false
    }
  },
}
</script>
