import * as TYPES from 'store/actionTypes';
import * as STATUS from 'constants/status';

const initialState = {};

function byIdReducer(state = initialState, actions) {
  switch (actions.type) {
    case TYPES.TODO_ADD_LIST_ITEM: {
      const {
        createTime,
        id,
        status,
        updateTime,
        value,
      } = actions.payload;
      const nextState = Object.assign({}, state);

      nextState[id] = {
        createTime,
        id,
        updateTime,
        status,
        value,
      };

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

      return Object.assign({}, state, {
        [id]: item,
      });
    }
    default: {
      return state;
    }
  }
}

export default byIdReducer;
