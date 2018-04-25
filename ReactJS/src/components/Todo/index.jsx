import React from 'react';
import PropTypes from 'prop-types';
import TodoFooter from './TodoFooter';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

const propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string,
      value: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
  onAddListItem: PropTypes.func,
  onDeleteListItem: PropTypes.func,
  onToggleListItem: PropTypes.func,
};

const defaultProps = {
  todoList: [],
  onAddListItem() {},
  onDeleteListItem() {},
  onToggleListItem() {},
};

function Todo(props) {
  const {
    todoList,
    onAddListItem,
    onDeleteListItem,
    onToggleListItem,
  } = props;

  return (
    <section className="todoapp">
      <TodoHeader
        onAddListItem={onAddListItem}
      />
      <TodoList
        todoList={todoList}
        onDeleteListItem={onDeleteListItem}
        onToggleListItem={onToggleListItem}
      />
      <TodoFooter />
    </section>
  );
}

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

export default Todo;
