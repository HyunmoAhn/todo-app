import * as TYPES from 'store/actionTypes';

const initialState = JSON.parse(localStorage.getItem('ids')) || [];

function idsReducer(state = initialState, actions) {
  switch (actions.type) {
    case TYPES.TODO_ADD_LIST_ITEM: {
      const nextState = state.slice();

      nextState.push(actions.payload.id);

      localStorage.setItem('ids', JSON.stringify(nextState));
      return nextState;
    }
    case TYPES.TODO_DELETE_LIST_ITEM: {
      const { id } = actions.payload;
      const nextState = state.filter(item => item !== id);

      localStorage.setItem('ids', JSON.stringify(nextState));
      return nextState;
    }
    case TYPES.TODO_CLEAR_COMPLETED_ITEMS: {
      const nextState = state.slice();
      const { items } = actions.payload;

      items.forEach(item => nextState.splice(nextState.indexOf(item), 1));

      localStorage.setItem('ids', JSON.stringify(nextState));
      return nextState;
    }
    default: {
      return state;
    }
  }
}

export default idsReducer;
