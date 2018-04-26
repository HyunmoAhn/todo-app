export const todoSelector = state => state.todo;

export const byIdSelector = (state) => {
  const todo = todoSelector(state);

  return todo.byId;
};

export const idsSelector = (state) => {
  const todo = todoSelector(state);

  return todo.ids;
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
