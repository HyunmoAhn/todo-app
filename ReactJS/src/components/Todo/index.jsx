import React from 'react';
import PropTypes from 'prop-types';
import extractFilterStatus from 'utils/extractFilterStatus';
import TodoFooter from './TodoFooter';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

const propTypes = {
  completedIds: PropTypes.arrayOf(PropTypes.string),
  filter: PropTypes.string,
  isAllCompleted: PropTypes.bool,
  numberOfActiveItem: PropTypes.number,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string,
      value: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
  onAddListItem: PropTypes.func,
  onChangeFilterStatus: PropTypes.func,
  onClearCompletedItems: PropTypes.func,
  onEditListItemValue: PropTypes.func,
  onEditToggleListItem: PropTypes.func,
  onDeleteListItem: PropTypes.func,
  onToggleAllListItem: PropTypes.func,
  onToggleListItem: PropTypes.func,
};

const defaultProps = {
  completedIds: [],
  filter: 'all',
  isAllCompleted: false,
  numberOfActiveItem: 0,
  todoList: [],
  onAddListItem() {},
  onChangeFilterStatus() {},
  onClearCompletedItems() {},
  onEditListItemValue() {},
  onEditToggleListItem() {},
  onDeleteListItem() {},
  onToggleAllListItem() {},
  onToggleListItem() {},
};

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.handleHashChange = this.handleHashChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.handleHashChange);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.handleHashChange);
  }

  handleHashChange() {
    const nextFilter = extractFilterStatus();

    this.props.onChangeFilterStatus(nextFilter);
  }

  render() {
    const {
      completedIds,
      filter,
      isAllCompleted,
      numberOfActiveItem,
      todoList,
      onAddListItem,
      onClearCompletedItems,
      onEditListItemValue,
      onEditToggleListItem,
      onDeleteListItem,
      onToggleAllListItem,
      onToggleListItem,
    } = this.props;

    return (
      <section className="todoapp">
        <TodoHeader
          isAllCompleted={isAllCompleted}
          onAddListItem={onAddListItem}
          onToggleAllListItem={onToggleAllListItem}
        />
        <TodoList
          todoList={todoList}
          onEditListItemValue={onEditListItemValue}
          onEditToggleListItem={onEditToggleListItem}
          onDeleteListItem={onDeleteListItem}
          onToggleListItem={onToggleListItem}
        />
        <TodoFooter
          completedIds={completedIds}
          filter={filter}
          numberOfActiveItem={numberOfActiveItem}
          onClearCompletedItems={onClearCompletedItems}
        />
      </section>
    );
  }
}

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

export default Todo;
