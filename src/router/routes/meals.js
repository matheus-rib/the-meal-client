export default (componentImport) => [
  {
    name: 'meal.show',
    path: '/meals/:mealId',
    component: componentImport('meals/Show'),
    meta: {
      title: 'Meal',
    },
  },
]
