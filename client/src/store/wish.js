import { fetchWishlist, addToWishlist, removeToWishlist } from '../apis'

export const state = {
  wishlist: [],
}

export const getters = {

}

export const actions = {
  async FETCH_WISHLIST ({ commit }, { userId }) {
    const { wishlist } = (await fetchWishlist({ userId })).data
    commit('SET_WISHLIST', wishlist)
  },
  async ADD_TO_WISHLIST ({ rootState, commit }, { product }) {
    const isExist = state.wishlist.find(wish => wish.id == product.id)
    if (!isExist) {
      const { user } = rootState.user
      console.log('ADD_TO_WISHLIST : ', product, user)
      const { data } = await addToWishlist({ userId: user.id, productId: product.id })
      if (data.success) {
        commit('PUSH_PRODUCT', product)
      }
    }
  },
  async REMOVE_TO_WISHLIST ({ rootState, commit }, { product, index }) {
    const isExist = state.wishlist.find(wish => wish.id == product.id)
    if (isExist) {
      const { user } = rootState.user
      const { data } = await removeToWishlist({ userId: user.id, productId: product.id })
      if (data.success) {
        commit('POP_PRODUCT', index)
      }
    }
  },
}

export const mutations = {
  SET_WISHLIST (state, data) {
    state.wishlist = data
  },
  PUSH_PRODUCT (state, data) {
    state.wishlist.push(data)
  },
  POP_PRODUCT (state, index) {
    state.wishlist.splice(index, 1)
  },
}
