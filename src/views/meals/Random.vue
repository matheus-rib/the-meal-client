<template lang="pug">
.flex-centered.content-full-height.loading.loading-lg
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('meals', ['meal']),
  },

  methods: {
    ...mapActions('meals', ['fetchRandomMeal']),
  },

  async created() {
    try {
      await this.fetchRandomMeal()
      this.$router.replace({
        name: 'meal.show',
        params: { mealId: this.meal.idMeal },
      })
    } catch (e) {
      this.$toaster.error(e.message)
      this.$router.replace({ name: 'home' })
    }
  },
}
</script>
