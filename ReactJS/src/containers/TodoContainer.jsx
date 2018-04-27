import { connect } from 'react-redux';
import Todo from 'components/Todo';
import {
  addListItem,
  changeFilterStatus,
  clearCompletedItems,
  deleteListItem,
  editListItemValue,
  editToggleListItem,
  toggleAllListItem,
  toggleListItem,
} from 'store/todo/actions';
import {
  filterSelector,
  getNumberOfActiveItem,
  getTodoListCompletedIds,
  getTodoListWithFilter,
  getIsAllCompleted,
} from 'store/todo/selectors';

const mapStateToProps = state => ({
  completedIds: getTodoListCompletedIds(state),
  filter: filterSelector(state),
  isAllCompleted: getIsAllCompleted(state),
  numberOfActiveItem: getNumberOfActiveItem(state),
  todoList: getTodoListWithFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onAddListItem: value => dispatch(addListItem(value)),
  onChangeFilterStatus: filter => dispatch(changeFilterStatus(filter)),
  onClearCompletedItems: items => dispatch(clearCompletedItems(items)),
  onDeleteListItem: id => dispatch(deleteListItem(id)),
  onEditListItemValue: (id, value) => dispatch(editListItemValue(id, value)),
  onEditToggleListItem: id => dispatch(editToggleListItem(id)),
  onToggleAllListItem: () => dispatch(toggleAllListItem()),
  onToggleListItem: id => dispatch(toggleListItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
