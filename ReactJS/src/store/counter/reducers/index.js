import { combineReducers } from 'redux';
import value from './value';

const counterReducer = combineReducers({
  value,
});

export default counterReducer;
