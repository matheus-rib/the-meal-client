import api from './api'

function search(termToSearch) {
  return api.get('/meals/search', {
    params: {
      search: termToSearch,
    },
  })
}

function show(mealId) {
  return api.get(`/meals/show/${mealId}`)
}

function random() {
  return api.get('/meals/random')
}

export default {
  search,
  show,
  random,
}
