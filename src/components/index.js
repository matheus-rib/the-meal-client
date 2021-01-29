import EmptyList from './layout/EmptyList'
import ListManager from './layout/ListManager'
import PageTitle from './layout/PageTitle'

export default {
  install(vue) {
    vue.component('empty-list', EmptyList)
    vue.component('list-manager', ListManager)
    vue.component('page-title', PageTitle)
  },
}
