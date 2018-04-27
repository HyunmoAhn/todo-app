import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const propTypes = {
  completedIds: PropTypes.arrayOf(PropTypes.string),
  filter: PropTypes.string,
  numberOfActiveItem: PropTypes.number,
  onClearCompletedItems: PropTypes.func,
};
const defaultProps = {
  completedIds: [],
  filter: 'all',
  numberOfActiveItem: 0,
  onClearCompletedItems() {},
};

class TodoFooter extends React.Component {
  constructor(props) {
    super(props);
    this.handleClearCompletedItems = this.handleClearCompletedItems.bind(this);
  }

  handleClearCompletedItems() {
    this.props.onClearCompletedItems(this.props.completedIds);
  }

  render() {
    const { filter, numberOfActiveItem } = this.props;
    const allClassName = cx({ selected: filter === 'all' });
    const activeClassName = cx({ selected: filter === 'active' });
    const completedClassName = cx({ selected: filter === 'completed' });

    return (
      <footer className="footer" style={{ display: 'block' }}>
        <span className="todo-count"><strong>{numberOfActiveItem}</strong> item left</span>
        <ul className="filters">
          <li><a href="#/" className={allClassName}>All</a></li>
          <li><a href="#/active" className={activeClassName}>Active</a></li>
          <li><a href="#/completed" className={completedClassName}>Completed</a></li>
        </ul>
        <button
          className="clear-completed"
          style={{ display: 'block' }}
          onClick={this.handleClearCompletedItems}
        >
          Clear completed
        </button>
      </footer>
    );
  }
}

TodoFooter.propTypes = propTypes;
TodoFooter.defaultProps = defaultProps;

export default TodoFooter;
