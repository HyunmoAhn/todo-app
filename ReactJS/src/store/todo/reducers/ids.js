import * as TYPES from 'store/actionTypes';

const initialState = [];

function idsReducer(state = initialState, actions) {
  switch (actions.type) {
    case TYPES.TODO_ADD_LIST_ITEM: {
      const nextState = state.slice();

      nextState.push(actions.payload.id);
      return nextState;
    }

    default: {
      return state;
    }
  }
}

export default idsReducer;
