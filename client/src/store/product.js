import { fetchProducts, fetchSingleProduct, fetchEventProducts, fetchBestProducts, searchProducts } from '../apis'

export const state = {
  product: {},    // 개별 상품 조회 시
  products: [],   // 상품 목록 조회 시
  pageInfo: {     // 상품 목록 조회 시
    totalItems: 0,
    totalPages: 0,
    page: 0,
    perPage: 12,
  },
  events: {},     // 이벤트 상품 조회 시
  bests: [],      // 베스트 상품 조회 시
  quickview: {},  // 상품 퀵뷰 조회 시
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
  },
  async FETCH_EVENT_PRODUCTS ({ commit }, { type, eventId }) {
    const { products } = (await fetchEventProducts({ type, eventId })).data
    commit('SET_EVENT_PRODUCTS', { type, eventId, data: products })
  },
  async FETCH_BEST_PRODUCTS ({ commit }, { countBy }) {
    const { products } = (await fetchBestProducts({ countBy })).data
    commit('SET_BEST_PRODUCTS', products)
  },
  async SEARCH_PRODUCTS ({ commit }, { name, page }) {
    const { products, pageInfo } = (await searchProducts({ name, page })).data
    commit('SET_PRODUCTS', products)
    commit('SET_PAGEINFO', pageInfo)
  },
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
  },
  SET_EVENT_PRODUCTS (state, { type, eventId, data }) {
    state.events[`${type}_${eventId}`] = data
  },
  SET_BEST_PRODUCTS (state, data) {
    state.bests = data
  },
  SET_QUICKVIEW (state, data){
    state.quickview = data
  },
}
