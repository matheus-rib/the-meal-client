export default (componentImport) => [
  {
    name: 'meal.search',
    path: '/meals/search',
    component: componentImport('meals/Search'),
    mete: {
      title: 'Meal search results',
    },
  },
  {
    name: 'meal.show',
    path: '/meals/:mealId',
    component: componentImport('meals/Show'),
    meta: {
      title: 'Meal',
    },
  },
]
