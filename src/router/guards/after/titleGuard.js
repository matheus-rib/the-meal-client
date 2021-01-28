export default to => {
  if (to.meta.title) {
    document.title = `The Meal - ${to.meta.title}`
  } else {
    document.title = 'The Meal'
  }
}
