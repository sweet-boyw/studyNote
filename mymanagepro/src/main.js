import Vue from 'vue'
import App from './App.vue'
// import './utils/element'
// import axios from 'axios'
import router from './router'

import * as echarts from 'echarts'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import ('@/utils/directives') // 引入全局自定义指令
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

// Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
