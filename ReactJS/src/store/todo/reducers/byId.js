import * as TYPES from 'store/actionTypes';

const initialState = {};

function byIdReducer(state = initialState, actions) {
  switch (actions.type) {
    case TYPES.TODO_ADD_LIST_ITEM: {
      const {
        createTime,
        id,
        updateTime,
        value,
      } = actions.payload;
      const nextState = Object.assign({}, state);

      nextState[id] = {
        createTime,
        id,
        updateTime,
        value,
      };

      return nextState;
    }

    default: {
      return state;
    }
  }
}

export default byIdReducer;
