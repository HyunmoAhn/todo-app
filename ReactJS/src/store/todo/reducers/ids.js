import * as TYPES from 'store/actionTypes';

const initialState = [];

function idsReducer(state = initialState, actions) {
  switch (actions.type) {
    case TYPES.TODO_ADD_LIST_ITEM: {
      const nextState = state.slice();

      nextState.push(actions.payload.id);
      return nextState;
    }
    case TYPES.TODO_DELETE_LIST_ITEM: {
      const { id } = actions.payload;

      return state.filter(item => item !== id);
    }
    case TYPES.TODO_CLEAR_COMPLETED_ITEMS: {
      const nextState = state.slice();
      const { items } = actions.payload;

      items.forEach(item => nextState.splice(nextState.indexOf(item), 1));

      return nextState;
    }
    default: {
      return state;
    }
  }
}

export default idsReducer;
