import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex/dist/vuex.js'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 保存启动时的初始状态
const state = {
  isShown: false,
  popTitle: '',

}

//  mutation 函数，变更函数
const mutations = {
  SHOW_LOGIN(state, value) {
    state.isShown = value.state;
    state.popTitle = value.title;
  }
}

export const getters = {
  isShown: state => state.isShown,
  popTitle: state => state.popTitle
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
const store = new Vuex.Store({
  state,
  mutations,
  getters
})

export default store;
export const actions = {
  showLogin: function (value) {
    store.commit('SHOW_LOGIN', value)
  }
}