import mealsServices from '@/services/meals'

const state = { meal: {}, mealsList: [] }

const actions = {
  async fetchMeals({ commit }, searchTerm) {
    const data = await mealsServices.search(searchTerm)

    commit('setMealsList', data)
  },

  async fetchMeal({ commit }, mealId) {
    const data = await mealsServices.show(mealId)

    commit('setMeal', data)
  },

  async fetchRandomMeal({ commit }) {
    const data = await mealsServices.random()

    commit('setMeal', data)
  },
}

const mutations = {
  setMealsList(state, payload) {
    state.mealsList = payload
  },
  setMeal(state, payload) {
    state.meal = payload
  },
}

export default { namespaced: true, state, actions, mutations }
