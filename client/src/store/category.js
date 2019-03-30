import { fetchCategory } from '../apis'

export const state = {
  categories: [],
  divisions: [],
  category: {
    id: 1,
    name: '인형/토이'
  },
  division: null,
}

export const getters = {
  GET_CURRENT_DIVISIONS: state => state.divisions.filter(division => division.categoryId == state.category.id),
}

export const actions = {
  async FETCH_CATEGORY ({ commit }) {
    const { categories, divisions } = (await fetchCategory()).data
    commit('SET_CATEGORIES', categories)
    commit('SET_DIVISIONS', divisions)
  }
}

export const mutations = {
  SET_CATEGORIES (state, data) {
    state.categories = data
  },
  SET_DIVISIONS (state, data) {
    state.divisions = data
  },
  SET_CATEGORY (state, data) {
    state.category = data
  },
  SET_DIVISION (state, data) {
    state.division = data
  }
}
