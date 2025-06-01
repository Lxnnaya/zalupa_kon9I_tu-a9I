import { createStore } from 'vuex'
import { jwtDecode } from "jwt-decode";

export default createStore({
  state: {
    user: null,
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
  },
  actions: {
    user(context, token) {
      const user = jwtDecode(token)
      context.commit('setUser', user);
    }
  },
  modules: {
  }
})
