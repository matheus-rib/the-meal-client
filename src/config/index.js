import Vue from 'vue'
import '@/styles'

import Toaster from 'v-toaster'
Vue.use(Toaster, { timeout: 5000 })

import router from '@/router'
export default { router }
