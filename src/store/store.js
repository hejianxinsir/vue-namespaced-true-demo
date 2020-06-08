import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 1
  },
  modules: {
    moduleA: {
      namespaced: true,
      state: {name: 'moduleA', num: 10},
      mutations: {
        add(state){
          state.num++
        }
      }
    }
  },
  getters: {
    getNum(state){
      return state.num
    },
    getModuleANum(state){
      return state.moduleA.num
    }
  },
  mutations: {
    add(state){
      state.num += 1
    }
  }
})