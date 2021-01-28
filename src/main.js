import Vue from 'vue'
import App from './App.vue'
import config from '@/config'
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  ...config,
  store,
  render: h => h(App),
}).$mount('#app')
