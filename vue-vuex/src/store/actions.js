import * as mutations from './mutations';

export const CHECK_ALL = 'CHECK_ALL';

export default {
  [CHECK_ALL]({ commit, getters }) {
    if (getters.isAllCompleted) {
      commit(mutations.SET_ALL_ACTIVE);
    } else {
      commit(mutations.SET_ALL_COMPLETED);
    }
  },
};
