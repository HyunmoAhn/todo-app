import { connect } from 'react-redux';
import Todo from 'components/Todo';
import {
  addListItem,
  deleteListItem,
  editListItemValue,
  editToggleListItem,
  toggleListItem,
} from 'store/todo/actions';
import { getTodoList } from 'store/todo/selectors';

const mapStateToProps = state => ({
  todoList: getTodoList(state),
});

const mapDispatchToProps = dispatch => ({
  onAddListItem: value => dispatch(addListItem(value)),
  onDeleteListItem: id => dispatch(deleteListItem(id)),
  onEditListItemValue: (id, value) => dispatch(editListItemValue(id, value)),
  onEditToggleListItem: id => dispatch(editToggleListItem(id)),
  onToggleListItem: id => dispatch(toggleListItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
