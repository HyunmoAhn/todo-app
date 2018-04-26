import { combineReducers } from 'redux';
import byId from './byId';
import filter from './filter';
import ids from './ids';

const todo = combineReducers({
  byId,
  filter,
  ids,
});

export default todo;
