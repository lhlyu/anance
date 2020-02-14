import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import global from './global'
import HeyUI from 'heyui'

import "./assets/pink.css"

import "@/global/yh.js"

Vue.use(HeyUI)
Vue.use(global)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
