import * as TYPES from 'store/actionTypes';
import * as STATUS from 'constants/status';

const initialState = JSON.parse(localStorage.getItem('byId')) || {};

function byIdReducer(state = initialState, actions) {
  switch (actions.type) {
    case TYPES.TODO_ADD_LIST_ITEM: {
      const {
        createTime,
        id,
        isEdit,
        status,
        updateTime,
        value,
      } = actions.payload;
      const nextState = Object.assign({}, state);

      nextState[id] = {
        createTime,
        id,
        isEdit,
        updateTime,
        status,
        value,
      };

      localStorage.setItem('byId', JSON.stringify(nextState));
      return nextState;
    }
    case TYPES.TODO_DELETE_LIST_ITEM: {
      const nextState = Object.assign({}, state);

      delete nextState[actions.payload.id];

      return nextState;
    }
    case TYPES.TODO_TOGGLE_LIST_ITEM: {
      const { id } = actions.payload;
      const item = Object.assign({}, state[id], {
        status: state[id].status === STATUS.NORMAL
          ? STATUS.COMPLETE : STATUS.NORMAL,
      });
      const nextState = Object.assign({}, state, {
        [id]: item,
      });

      localStorage.setItem('byId', JSON.stringify(nextState));
      return nextState;
    }
    case TYPES.TODO_EDIT_TOGGLE_LIST_ITEM: {
      const { id } = actions.payload;
      const item = Object.assign({}, state[id], {
        isEdit: !state[id].isEdit,
      });
      const nextState = Object.assign({}, state, {
        [id]: item,
      });

      localStorage.setItem('byId', JSON.stringify(nextState));
      return nextState;
    }
    case TYPES.TODO_EDIT_LIST_ITEM_VALUE: {
      const { id, value } = actions.payload;
      const item = Object.assign({}, state[id], {
        value,
      });
      const nextState = Object.assign({}, state, {
        [id]: item,
      });

      localStorage.setItem('byId', JSON.stringify(nextState));
      return nextState;
    }
    case TYPES.TODO_TOGGLE_ALL_LIST_ITEM: {
      const nextState = Object.assign({}, state);

      const completedNumber = Object.keys(nextState).filter(item =>
        nextState[item].status === STATUS.COMPLETE).length;
      const setComplete = completedNumber !== Object.keys(nextState).length;

      Object.keys(nextState).forEach((item) => {
        nextState[item] = Object.assign({}, nextState[item], {
          status: setComplete ? STATUS.COMPLETE : STATUS.NORMAL,
        });
      });

      localStorage.setItem('byId', JSON.stringify(nextState));
      return nextState;
    }
    case TYPES.TODO_CLEAR_COMPLETED_ITEMS: {
      const nextState = Object.assign({}, state);
      const { items } = actions.payload;

      items.forEach(item => delete nextState[item]);

      localStorage.setItem('byId', JSON.stringify(nextState));
      return nextState;
    }
    default: {
      return state;
    }
  }
}

export default byIdReducer;
