import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutation.js';
import actions from './actions.js';
import state from './state.js';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state,
  mutations,
  actions
});
