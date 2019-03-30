import { fetchProducts, fetchSingleProduct } from '../apis'

export const state = {
  product: {},
  products: [],
  pageInfo: {
    totalItems: 0,
    totalPages: 0,
    page: 0,
    perPage: 12,
  },
}

export const getters = {

}

export const actions = {
  async FETCH_PRODUCTS ({ commit }, { categoryId, divisionId, page }) {
    const { products, pageInfo } = (await fetchProducts({ categoryId, divisionId, page })).data
    commit('SET_PRODUCTS', products)
    commit('SET_PAGEINFO', pageInfo)
  },
  async FETCH_SINGLE_PRODUCT ({ commit }, { productId }) {
    const { product } = (await fetchSingleProduct({ productId })).data
    commit('SET_PRODUCT', product)
  }
}

export const mutations = {
  SET_PRODUCTS (state, data) {
    state.products = data
  },
  SET_PAGEINFO (state, data) {
    state.pageInfo = data
  },
  SET_PRODUCT (state, data) {
    state.product = data
  }
}
