import * as TYPES from '../actionTypes';

export const counterIncrement = () => ({
  type: TYPES.COUNTER_INCREMENT,
  payload: {},
});

export const counterDecrement = () => ({
  type: TYPES.COUNTER_DECREMENT,
  payload: {},
});
