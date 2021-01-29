import categories from './categories'

const componentImport = (view) => () => import(`@/views/${view}.vue`)

export default [
  {
    path: '/',
    component: componentImport('Base'),
    children: [
      {
        name: 'random',
        path: '/random',
        component: componentImport('Index'),
        meta: {
          title: 'Home',
        },
      },
      {
        name: 'about',
        path: '/about',
        component: componentImport('Index'),
        meta: {
          title: 'Home',
        },
      },
      ...categories(componentImport),
    ],
  },
]
