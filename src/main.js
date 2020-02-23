import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import HeyUI from 'heyui'

import global from './global'

import "./assets/css/pink.css"

import "@/assets/js/yh.js"

Vue.use(HeyUI)
Vue.use(global)

// 自定义一个指令 v-high
Vue.directive('high',function (el,binding) {
  if(binding.value){
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
      hljs.highlightBlock(block)
    })
  }
})

Vue.directive('line',function (el,binding) {
  if(binding.value) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      hljs.lineNumbersBlock(block)
    })
  }
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
