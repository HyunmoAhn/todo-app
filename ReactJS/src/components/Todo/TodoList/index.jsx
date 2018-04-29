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
  onDeleteListItem: PropTypes.func,
  onEditListItemValue: PropTypes.func,
  onEditToggleListItem: PropTypes.func,
  onToggleListItem: PropTypes.func,
};
const defaultProps = {
  todoList: [],
  onDeleteListItem() {},
  onEditListItemValue() {},
  onEditToggleListItem() {},
  onToggleListItem() {},
};

class TodoList extends React.Component {
  render() {
    const {
      todoList,
      onDeleteListItem,
      onEditListItemValue,
      onEditToggleListItem,
      onToggleListItem,
    } = this.props;

    return (
      <section className="main">
        <ul className="todo-list">
          {todoList.map(item => (
            <TodoListItem
              key={item.id}
              item={item}
              onDeleteListItem={onDeleteListItem}
              onEditListItemValue={onEditListItemValue}
              onEditToggleListItem={onEditToggleListItem}
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
