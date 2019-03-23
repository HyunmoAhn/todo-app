import Vue from 'vue';
import Vuex from 'vuex';
import { STORAGE_KEY } from '@/constant';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    byId: JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || {
      // [id]: {
      //   id: String,
      //   content: String,
      //   isEdit: Boolean,
      //   isComplete: Boolean,
      // },
    },
    filter: 'all',
    currentEdit: '',
  },
  actions,
  mutations,
  getters,
});

store.watch(
  state => state.byId,
  value => window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value)),
);

export default store;
