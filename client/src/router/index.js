import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'

import Index            from '@/pages/index.vue'
import Products         from '@/pages/Products.vue'
import Login            from '@/pages/Login.vue'
import Cart             from '@/pages/Cart.vue'
import ProductDetail    from '@/pages/ProductDetail.vue'
import Checkout         from '@/pages/Checkout.vue'
import OrderSuccess     from '@/pages/OrderSuccess.vue'
import UserInfo         from '@/pages/UserInfo.vue'


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
      async beforeEnter (to, from, next) {
        await store.dispatch('FETCH_EVENT_PRODUCTS', { eventId: 1 })
        next()
      },
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
      beforeEnter (to, from, next) {
        const { user } = store.state.user
        if (user.id) {
          next({ path: `/user/${user.id}` })
        } else {
          next()
        }
        next()
      }
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
        await store.dispatch('FETCH_SINGLE_PRODUCT', { productId: id })
        next()
      }
    },
    {
      name: 'Checkout',
      path: '/checkout',
      component: Checkout,
      beforeEnter (to, from, next) {
        const { cart } = store.state.cart
        const { user } = store.state.user
        if (cart.length > 0) {
          next()
        } else if (user.id == undefined || user.id == null) {
          next({ path: '/login' })
        } else {
          next({ path: '/' })
        }
      }
    },
    {
      name: 'OrderSuccess',
      path: '/ordersuccess',
      component: OrderSuccess,
    },
    {
      name: 'UserInfo',
      path: '/user/:id',
      component: UserInfo,
      async beforeEnter (to, from, next) {
        const { user } = store.state.user
        if (user.id) {
          await store.dispatch('FETCH_ORDERS')
          next()
        } else {
          next({ path: '/login' })
        }
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
