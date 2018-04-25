import React from 'react';
// import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};

class TodoFooter extends React.Component {
  render() {
    return (
      <footer className="footer" style={{ display: 'block' }}>
        <span className="todo-count"><strong>1</strong> item left</span>
        <ul className="filters">
          <li><a href="#/" className="selected">All</a></li>
          <li><a href="#/active">Active</a></li>
          <li><a href="#/completed">Completed</a></li>
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
