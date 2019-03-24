export default () => {
  switch (window.location.hash) {
    case '#/completed':
      return 'completed';
    case '#/active':
      return 'active';
    default:
      return 'all';
  }
};
