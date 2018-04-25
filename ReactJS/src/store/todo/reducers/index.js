import { combineReducers } from 'redux';
import byId from './byId';
import ids from './ids';

const todo = combineReducers({
  byId,
  ids,
});

export default todo;
