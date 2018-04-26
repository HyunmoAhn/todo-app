import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const propTypes = {
  filter: PropTypes.string,
};
const defaultProps = {
  filter: 'all',
};

class TodoFooter extends React.Component {
  render() {
    const { filter } = this.props;
    const allClassName = cx({ selected: filter === 'all' });
    const activeClassName = cx({ selected: filter === 'active' });
    const completedClassName = cx({ selected: filter === 'completed' });

    return (
      <footer className="footer" style={{ display: 'block' }}>
        <span className="todo-count"><strong>1</strong> item left</span>
        <ul className="filters">
          <li><a href="#/" className={allClassName}>All</a></li>
          <li><a href="#/active" className={activeClassName}>Active</a></li>
          <li><a href="#/completed" className={completedClassName}>Completed</a></li>
        </ul>
        <button className="clear-completed" style={{ display: 'block' }}>
          Clear completed
        </button>
      </footer>
    );
  }
}

TodoFooter.propTypes = propTypes;
TodoFooter.defaultProps = defaultProps;

export default TodoFooter;
