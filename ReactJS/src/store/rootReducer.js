import { combineReducers } from 'redux';
import todo from './todo/reducers';

const rootReducer = combineReducers({
  todo,
});

export default rootReducer;
