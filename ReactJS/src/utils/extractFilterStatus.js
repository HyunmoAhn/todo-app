function extractFilterStatus() {
  switch (window.location.hash) {
    case '#/completed':
      return 'completed';
    case '#/active':
      return 'active';
    default:
      return 'all';
  }
}
export default extractFilterStatus;
