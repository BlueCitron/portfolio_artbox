import { register, login, verify } from '../apis'

export const state = {
  user: {},
  accessToken: '',
}

export const getters = {
  isLogedIn: state => !!(Object.keys(state.user).length)
}

export const actions = {
  REGISTER ({ }, { username, email, password, postCode, address, phone }) {
    return register({ username, email, password, postCode, address, phone })
  },
  LOGIN ({ }, { username, password }) {
    return login({ username, password })
  },
  LOGOUT ({ commit }) {
    commit('SET_USER', {})
    commit('SET_ACCESS_TOKEN', '')
  },
  async VERIFY ({ commit, dispatch }, { accessToken }) {
    const { data } = await verify({ accessToken })
    if (data.success) {
      commit('SET_USER', data.user)
      commit('SET_ACCESS_TOKEN', data.accessToken)
      dispatch('FETCH_WISHLIST', { userId: data.user.id })
    }
  },
}

export const mutations = {
  SET_USER (state, data) {
    state.user = data
  },
  SET_ACCESS_TOKEN (state, data) {
    state.accessToken = data
  },

}
