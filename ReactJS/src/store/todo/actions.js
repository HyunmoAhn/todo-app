import { v4 } from 'uuid';
import moment from 'moment';
import * as STATUS from 'constants/status';
import * as TYPES from '../actionTypes';

export const addListItem = value => ({
  type: TYPES.TODO_ADD_LIST_ITEM,
  payload: {
    createTime: moment().toISOString(),
    id: v4(),
    isEdit: false,
    status: STATUS.NORMAL,
    updateTime: moment().toISOString(),
    value,
  },
});

export const deleteListItem = id => ({
  type: TYPES.TODO_DELETE_LIST_ITEM,
  payload: {
    id,
  },
});

export const toggleListItem = id => ({
  type: TYPES.TODO_TOGGLE_LIST_ITEM,
  payload: {
    id,
  },
});

export const editToggleListItem = id => ({
  type: TYPES.TODO_EDIT_TOGGLE_LIST_ITEM,
  payload: {
    id,
  },
});
