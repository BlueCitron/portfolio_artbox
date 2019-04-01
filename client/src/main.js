import Vue from 'vue'
import VeeValidator from 'vee-validate'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VeeValidator)
// 천단위 구분
Vue.prototype.ThousandSeparator = function (number) {
  return (number + '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.jQuery = window.$
window.jquery = window.$
