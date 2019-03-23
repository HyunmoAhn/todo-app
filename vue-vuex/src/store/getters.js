export default {
  filteredIds(state) {
    const { byId, filter } = state;
    const ids = Object.keys(byId);

    switch (filter) {
      case 'completed': {
        return ids.filter(id => byId[id].isComplete);
      }
      case 'active': {
        return ids.filter(id => !byId[id].isComplete);
      }
      default: {
        return ids;
      }
    }
  },
  infoById: state => id => state.byId[id],
  leftNumber: state => Object
    .keys(state.byId)
    .filter(id => state.byId[id].isComplete === false)
    .length,
  isAllCompleted: (state, getters) => Object
    .keys(state.byId).length !== 0 && getters.leftNumber === 0,
};
