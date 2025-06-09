import { createStore } from 'vuex'
import { jwtDecode } from "jwt-decode";

export default createStore({
  state: {
    user: null, // Глобальная переменная
  },
  getters: {
    user(state) { // Получение глобальной переменной в любом из компонентов
      return state.user
    }
  },
  mutations: {
    setUser(state, user) { // Функция для изменения глобальной переменной
      state.user = user
    },
  },
  actions: {
    user(context, token) { // Функция для установки глобальной переменной
      const user = jwtDecode(token)
      context.commit('setUser', user);
    }
  },
  modules: {
  }
})
