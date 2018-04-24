import * as TYPES from 'store/actionTypes';

const initialState = 0;

function valueReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.COUNTER_INCREMENT:
      return state + 1;
    case TYPES.COUNTER_DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

export default valueReducer;
