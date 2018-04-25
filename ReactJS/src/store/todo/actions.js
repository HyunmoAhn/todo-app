import { v4 } from 'uuid';
import moment from 'moment';
import * as TYPES from '../actionTypes';

export const addListItem = value => ({ // eslint-disable-line
  type: TYPES.TODO_ADD_LIST_ITEM,
  payload: {
    createTime: moment().toISOString(),
    id: v4(),
    updateTime: moment().toISOString(),
    value,
  },
});
