import api from './api'

function categoriesList() {
  return api.get('/meals/categories')
}

function listMealsByCategory(category) {
  return api.get(`/meals/categories/${category}`)
}

export default {
  categoriesList,
  listMealsByCategory,
}
