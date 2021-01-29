import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import * as guards from './guards'
import qs from 'qs'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'router-link-exact-active active',
  stringifyQuery: (query) =>
    Object.values(query).length ? `?${qs.stringify(query)}` : '',
  parseQuery: qs.parse,
})

guards.register(router)

export default router
