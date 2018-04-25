import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from '../TodoListItem';

const propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string,
      value: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
  onToggleListItem: PropTypes.func,
};
const defaultProps = {
  todoList: {},
  onToggleListItem() {},
};

class TodoList extends React.Component {
  render() {
    const { todoList, onToggleListItem } = this.props;

    return (
      <section className="main">
        <ul className="todo-list">
          {todoList.map(item => (
            <TodoListItem
              key={item.id}
              item={item}
              onToggleListItem={onToggleListItem}
            />))
          }
        </ul>
      </section>
    );
  }
}

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

export default TodoList;
