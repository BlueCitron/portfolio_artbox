import { register, login, verify } from '../apis'

export const state = {
  user: {},
  accessToken: '',
}

export const getters = {

}

export const actions = {
  REGISTER ({ }, { username, email, password }) {
    console.log('register action : ', { username, email, password })
    return register({ username, email, password })
  },
  LOGIN ({ }, { username, password }) {
    return login({ username, password })
  },
  LOGOUT ({ commit }) {
    commit('SET_USER', {})
    commit('SET_ACCESS_TOKEN', '')
  },
  async VERIFY ({ commit }, { accessToken }) {
    const { data } = await verify({ accessToken })
    if (data.success) {
      commit('SET_USER', data.user)
      commit('SET_ACCESS_TOKEN', data.accessToken)
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
