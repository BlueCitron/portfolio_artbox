export const state = {
  items: [],
}

export const getters = {

}

export const actions = {
  ADD_CART ({ commit }, product) {

  }
}

export const mutations = {
  SET_ITEMS (state, data) {
    state.items = data
  },
  PUSH_ITEM (state, data) {
    state.items.push(data)
  },
  POP_ITEM (state, index) {
    state.items.splice(index, 1)
  }
}
