import categories from './categories'
import meals from './meals'

const componentImport = (view) => () => import(`@/views/${view}.vue`)

export default [
  {
    path: '/',
    component: componentImport('Base'),
    children: [
      {
        name: 'random',
        path: '/random',
        component: componentImport('meals/Random'),
        meta: {
          title: 'Random meal',
        },
      },
      {
        name: 'about',
        path: '/about',
        component: componentImport('about/About'),
        meta: {
          title: 'About',
        },
      },
      ...categories(componentImport),
      ...meals(componentImport),
    ],
  },
]
