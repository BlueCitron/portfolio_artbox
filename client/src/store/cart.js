import { deal } from '../apis'

export const state = {
  orders: [
    // {
    //   product: product,
    //   quantity: 1,
    // }
  ],
}

export const getters = {
  totalProductFee: state => state.orders.reduce((sum, order) => sum += (order.product.price * order.quantity), 0),
  shippingFee: (state, getters) => getters.totalProductFee >= 30000 ? 0 : 2500,
  totalFee: (state, getters) => getters.totalProductFee ? getters.totalProductFee + getters.shippingFee : 0
}

export const actions = {
  ADD_TO_CART ({ commit }, { product, quantity }) {
    commit('PUSH_ORDER', { product, quantity: quantity || 1 })
  },
  REMOVE_TO_CART ({ commit }, { index }) {
    commit('POP_ORDER', index)
  },
  BUY_NOW ({ commit, dispatch }, { product, quantity }) {
    commit('SET_ORDERS', [])
    dispatch('ADD_TO_CART', { product, quantity })
  },
  CHECKOUT ({ commit }, dealInfo) {
    return deal(dealInfo)
  },
}

export const mutations = {
  SET_ORDERS (state, data) {
    state.orders = data
  },
  PUSH_ORDER (state, data) {
    state.orders.push(data)
  },
  POP_ORDER (state, index) {
    state.orders.splice(index, 1)
  }
}
