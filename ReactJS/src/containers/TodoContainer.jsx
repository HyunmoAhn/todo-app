import { connect } from 'react-redux';
import Todo from 'components/Todo';
import {
  addListItem,
  changeFilterStatus,
  deleteListItem,
  editListItemValue,
  editToggleListItem,
  toggleListItem,
} from 'store/todo/actions';
import {
  filterSelector,
  getTodoList,
} from 'store/todo/selectors';

const mapStateToProps = state => ({
  filter: filterSelector(state),
  todoList: getTodoList(state),
});

const mapDispatchToProps = dispatch => ({
  onAddListItem: value => dispatch(addListItem(value)),
  onChangeFilterStatus: filter => dispatch(changeFilterStatus(filter)),
  onDeleteListItem: id => dispatch(deleteListItem(id)),
  onEditListItemValue: (id, value) => dispatch(editListItemValue(id, value)),
  onEditToggleListItem: id => dispatch(editToggleListItem(id)),
  onToggleListItem: id => dispatch(toggleListItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
