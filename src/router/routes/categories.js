export default (componentImport) => [
  {
    name: 'home',
    path: '/',
    component: componentImport('categories/List'),
    meta: {
      title: 'Home',
    },
  },
  {
    name: 'category',
    path: '/category/:category',
    component: componentImport('categories/Meals'),
    meta: {
      title: 'Home',
    },
  },
]
