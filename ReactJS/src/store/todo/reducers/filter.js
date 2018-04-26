import * as TYPES from 'store/actionTypes';
import extractFilterStatus from 'utils/extractFilterStatus';

const initialState = extractFilterStatus();

function statusReducer(state = initialState, actions) {
  switch (actions.type) {
    case TYPES.TODO_CHANGE_FILTER_STAUTS: {
      return actions.payload.filter;
    }
    default: {
      return state;
    }
  }
}

export default statusReducer;
