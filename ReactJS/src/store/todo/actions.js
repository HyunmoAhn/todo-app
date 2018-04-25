import { v4 } from 'uuid';
import moment from 'moment';
import * as STATUS from 'constants/status';
import * as TYPES from '../actionTypes';

export const addListItem = value => ({ // eslint-disable-line
  type: TYPES.TODO_ADD_LIST_ITEM,
  payload: {
    createTime: moment().toISOString(),
    id: v4(),
    status: STATUS.NORMAL,
    updateTime: moment().toISOString(),
    value,
  },
});
