import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/pages/index.vue'
import Products from '@/pages/Products.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
    },
    {
      path: '/:product/',
      component: Products,
    },
  ]
})
