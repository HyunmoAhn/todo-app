import Vue from 'vue';

export const ADD_TODO = 'ADD_TODO';
export const SET_FILTER = 'SET_FILTER';
export const UPDATE_TODO = 'UPDATE_TODO';
export const CHANGE_EDIT_VALUE = 'CHANGE_EDIT_VALUE';
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const SET_ALL_ACTIVE = 'SET_ALL_ACTIVE';
export const SET_ALL_COMPLETED = 'SET_ALL_COMPLETED';

export default {
  [ADD_TODO](state, { id, content }) {
    Vue.set(state.byId, id, {
      id,
      content,
      isEdit: false,
      isComplete: false,
    });
  },
  [SET_FILTER](state, { filter }) {
    Vue.set(state, 'filter', filter);
  },
  [UPDATE_TODO](state, { id, ...rest }) {
    Vue.set(state.byId, id, {
      ...state.byId[id],
      ...rest,
    });
  },
  [DELETE_TODO](state, { id }) {
    Vue.delete(state.byId, id);
  },
  [CHANGE_EDIT_VALUE](state, { value }) {
    Vue.set(state, 'currentEdit', value);
  },
  [CLEAR_COMPLETED](state) {
    const { byId } = state;

    Object.keys(byId).forEach((id) => {
      if (byId[id].isComplete) Vue.delete(state.byId, id);
    });
  },
  [SET_ALL_ACTIVE](state) {
    const { byId } = state;

    Object.keys(byId).forEach((id) => {
      Vue.set(state.byId, id, {
        ...state.byId[id],
        isComplete: false,
      });
    });
  },
  [SET_ALL_COMPLETED](state) {
    const { byId } = state;

    Object.keys(byId).forEach((id) => {
      Vue.set(state.byId, id, {
        ...state.byId[id],
        isComplete: true,
      });
    });
  },
};
