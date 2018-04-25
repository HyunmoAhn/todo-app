import { combineReducers } from 'redux';
import counter from './counter/reducers';
import todo from './todo/reducers';

const rootReducer = combineReducers({
  counter,
  todo,
});

export default rootReducer;
