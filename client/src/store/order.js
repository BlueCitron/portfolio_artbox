import { fetchOrders, deal } from '../apis'

export const state = {
  order: {},
  orders: [],
}

export const getters = {

}

export const actions = {
  async FETCH_ORDERS ({ rootState, commit }) {
    const { user } = rootState.user
    const { orders } = (await fetchOrders({ userId: user.id })).data
    commit('SET_ORDERS', orders)
  },
  BUY_NOW ({ commit, dispatch }, { product, quantity }) {
    dispatch('CLEAR_CART')
    dispatch('ADD_TO_CART', { product, quantity })
  },
  async CHECKOUT ({ commit }, dealInfo) {
    const { order, products } = (await deal(dealInfo)).data
    order['products'] = products
    commit('SET_ORDER', order)
  },
}

export const mutations = {
  SET_ORDER (state, data) {
    state.order = data
  },
  SET_ORDERS (state, data) {
    state.orders = data
  },
}
