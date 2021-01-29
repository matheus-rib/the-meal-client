<template lang="pug">
.container
  ul.tab.tab-block
    li.tab-item.c-hand(:class="{ active: tabActive === 'ingredients'}" @click="changeTabTo('ingredients')")
      a Ingredients
    li.tab-item.c-hand(:class="{ active: tabActive === 'instructions'}" @click="changeTabTo('instructions')")
      a Instructions
  .content
  ingredients(v-if="tabActive === 'ingredients'" :ingredients="ingredients")
  instructions(v-if="tabActive === 'instructions'" :instructions="instructions")
</template>

<script>
import Ingredients from './Ingredients'
import Instructions from './Instructions'

export default {
  data() {
    return {
      tabActive: 'ingredients',
    }
  },

  components: { Ingredients, Instructions },

  props: {
    ingredients: { type: Array, required: true },
    instructions: { type: String, required: true },
  },

  methods: {
    changeTabTo(tab) {
      this.tabActive = tab
    },
  },
}
</script>
