import Vuex from 'vuex';
import Vue from 'vue';
import quiz from './modules/quiz';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    quiz
  }
});