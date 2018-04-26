import { connect } from 'react-redux';
import Todo from 'components/Todo';
import {
  addListItem,
  changeFilterStatus,
  deleteListItem,
  editListItemValue,
  editToggleListItem,
  toggleAllListItem,
  toggleListItem,
} from 'store/todo/actions';
import {
  filterSelector,
  getNumberOfActiveItem,
  getTodoListWithFilter,
  getIsAllCompleted,
} from 'store/todo/selectors';

const mapStateToProps = state => ({
  filter: filterSelector(state),
  isAllCompleted: getIsAllCompleted(state),
  numberOfActiveItem: getNumberOfActiveItem(state),
  todoList: getTodoListWithFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onAddListItem: value => dispatch(addListItem(value)),
  onChangeFilterStatus: filter => dispatch(changeFilterStatus(filter)),
  onDeleteListItem: id => dispatch(deleteListItem(id)),
  onEditListItemValue: (id, value) => dispatch(editListItemValue(id, value)),
  onEditToggleListItem: id => dispatch(editToggleListItem(id)),
  onToggleAllListItem: () => dispatch(toggleAllListItem()),
  onToggleListItem: id => dispatch(toggleListItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
