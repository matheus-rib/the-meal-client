import categoriesServices from '@/services/categories'

const state = { categoriesList: [], mealsInCategoryList: [] }

const actions = {
  async fetchCategoriesList({ commit }) {
    const data = await categoriesServices.categoriesList()

    commit('setCategoriesList', data)
  },

  async fetchMealsInCategory({ commit }, category) {
    const data = await categoriesServices.listMealsByCategory(category)

    commit('setMealsInCategoryList', data)
  },
}

const mutations = {
  setCategoriesList(state, payload) {
    state.categoriesList = payload
  },
  setMealsInCategoryList(state, payload) {
    state.mealsInCategoryList = payload
  },
}

export default { namespaced: true, state, actions, mutations }
