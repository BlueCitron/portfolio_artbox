import { deal } from '../apis'

export const state = {
  cart: [
    // Bunddle {
    //   product: product,
    //   quantity: 1,
    // }
  ],
}

export const getters = {
  totalProductFee: state => state.cart.reduce((sum, bunddle) => sum += (bunddle.product.price * bunddle.quantity), 0),
  shippingFee: (state, getters) => getters.totalProductFee >= 30000 ? 0 : 2500,
  totalFee: (state, getters) => getters.totalProductFee ? getters.totalProductFee + getters.shippingFee : 0,
  isCartEmpty: state => !state.cart.length,
}

export const actions = {
  ADD_TO_CART ({ commit }, { product, quantity }) {
    commit('PUSH_BUNDLE', { product, quantity: quantity || 1 })
  },
  CLEAR_CART ({ commit }) {
    commit('SET_CART', [])
  },
  REMOVE_TO_CART ({ commit }, { index }) {
    commit('POP_BUNDLE', index)
  },
}

export const mutations = {
  SET_CART (state, data) {
    state.cart = data
  },
  PUSH_BUNDLE (state, data) {
    const isExist = state.cart.find(bundle => bundle.product.id == data.product.id)
    if (!isExist) {
      state.cart.push(data)
    }
  },
  POP_BUNDLE (state, index) {
    state.cart.splice(index, 1)
  }
}
