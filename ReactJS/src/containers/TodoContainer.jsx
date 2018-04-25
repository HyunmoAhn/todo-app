import { connect } from 'react-redux';
import Todo from 'components/Todo';
import { addListItem } from 'store/todo/actions';
import { getTodoList } from 'store/todo/selectors';

const mapStateToProps = state => ({
  todoList: getTodoList(state),
});

const mapDispatchToProps = dispatch => ({
  onAddListItem: value => dispatch(addListItem(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
