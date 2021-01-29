<template lang="pug">
form(@submit.prevent="search")
  .has-icon-right
    input.form-input(type="text" v-model.trim="termToSearchFor" placeholder="Search")
    i.form-icon.fas.fa-search.text-warning.c-hand(@click="search")
</template>

<script>
export default {
  data() {
    return {
      termToSearchFor: '',
    }
  },

  methods: {
    search() {
      this.$router
        .push({
          name: 'meal.search',
          query: { search: this.termToSearchFor },
        })
        .catch(() => {})
    },
  },
}
</script>

<style lang="stylus" scoped>
.form-input
  border-radius 30px
  padding-left 10px
.form-icon
  right 0.3rem
</style>
