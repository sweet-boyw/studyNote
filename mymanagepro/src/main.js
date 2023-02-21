import Vue from 'vue'
import App from './App.vue'
import './utils/element'
import axios from 'axios'
import router from './router'

import ('@/utils/directives')

Vue.config.productionTip = false

Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
