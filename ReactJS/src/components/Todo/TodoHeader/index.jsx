import React from 'react';
// import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};

class TodoHeader extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" type="text" placeholder="What needs to be done?" />
        <input className="toggle-all" id="toggle-all" type="checkbox" />
        <label style={{ top: '15px' }} htmlFor="toggle-all">Mark all async complete</label>
      </header>
    );
  }
}

TodoHeader.propTypes = propTypes;
TodoHeader.defaultProps = defaultProps;

export default TodoHeader;
