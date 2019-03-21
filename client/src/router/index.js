import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index.vue'
import Products from '@/pages/Products.vue'
import Login from '@/pages/Login.vue'
import Cart from '@/pages/Cart.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Index',
      path: '/',
      component: Index,
    },
    {
      name: 'Products',
      path: '/category/:id',
      component: Products,
    },
    {
      name: 'Login',
      path: '/login',
      component: Login,
    },
    {
      name: 'Cart',
      path: '/cart',
      component: Cart,
    },
  ]
})
