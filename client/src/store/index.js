import Vue from 'vue'
import Vuex from 'vuex'

import * as cart from './cart'
import * as category from './category'
import * as product from './product'
import * as user from './user'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    category,
    product,
    user,
  },
})
