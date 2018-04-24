export const counterSelector = state => state.counter;

export const valueSelector = (state) => {
  const counter = counterSelector(state);

  return counter.value;
};
