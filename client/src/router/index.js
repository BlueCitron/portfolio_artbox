import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'

import Index from '@/pages/index.vue'
import Products from '@/pages/Products.vue'
import Login from '@/pages/Login.vue'
import Cart from '@/pages/Cart.vue'
import ProductDetail from '@/pages/ProductDetail.vue'


Vue.use(Router)

function createList () {
  return {
    render (createElement) {
      return createElement(Products)
    }
  }
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'Index',
      path: '/',
      component: Index,
    },
    {
      name: 'Products',
      path: '/product',
      component: createList(),
      async beforeEnter (to, from, next) {
        const { category, division, page } = to.query
        if (!category) {
          next({ path: '/' })
        } else {
          await store.dispatch('FETCH_PRODUCTS', { categoryId: category, divisionId: division, page: page })
          next()
        }
      }
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
    {
      name: 'ProductDetail',
      path: '/product/:id',
      component: ProductDetail,
      async beforeEnter (to, from, next) {
        const { id } = to.params
        await store.dispatch('FETCH_SINGLE_PRODUCT', { productId: id})
        next()
      }
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    // 원하는 위치로 돌아가기
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
