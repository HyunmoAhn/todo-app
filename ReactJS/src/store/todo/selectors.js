import * as STATUS from 'constants/status';

export const todoSelector = state => state.todo;

export const byIdSelector = (state) => {
  const todo = todoSelector(state);

  return todo.byId;
};

export const idsSelector = (state) => {
  const todo = todoSelector(state);

  return todo.ids;
};

export const filterSelector = (state) => {
  const todo = todoSelector(state);

  return todo.filter;
};

export const getTodoList = (state) => {
  const byId = byIdSelector(state);
  const ids = idsSelector(state);

  return ids.map((id) => {
    const info = byId[id];

    return {
      id: info.id,
      isEdit: info.isEdit,
      status: info.status,
      value: info.value,
    };
  });
};

export const getTodoListWithFilter = (state) => {
  const list = getTodoList(state);
  const filter = filterSelector(state);

  if (filter === 'completed') {
    return list.filter(item => item.status === STATUS.COMPLETE);
  } else if (filter === 'active') {
    return list.filter(item => item.status === STATUS.NORMAL);
  }

  return list;
};

export const getNumberOfCompletedItem = (state) => {
  const byId = byIdSelector(state);

  return Object.keys(byId).filter(item =>
    byId[item].status === STATUS.COMPLETE).length;
};

export const getNumberOfActiveItem = (state) => {
  const byId = byIdSelector(state);

  return Object.keys(byId).filter(item =>
    byId[item].status === STATUS.NORMAL).length;
};

export const getIsAllCompleted = (state) => {
  const byId = byIdSelector(state);
  const numberOfCompleted = getNumberOfCompletedItem(state);

  const numberOfAll = Object.keys(byId).length;

  return numberOfAll === numberOfCompleted;
};
