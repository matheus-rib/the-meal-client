import Vue from 'vue'
import '@/styles'

import Toaster from 'v-toaster'
Vue.use(Toaster, { timeout: 5000 })

import Components from '@/components'
Vue.use(Components)

import router from '@/router'
export default { router }
