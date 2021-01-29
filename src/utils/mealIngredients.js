export default function (meal) {
  const ingredients = []
  for (let i = 0; i < 20; i++) {
    const index = i + 1
    const ingredientIndex = `strIngredient${index}`
    const measureIndex = `strMeasure${index}`
    if (meal[ingredientIndex]) {
      ingredients.push({
        ingredient: meal[ingredientIndex],
        measure: meal[measureIndex],
      })
    }
  }

  return ingredients
}
