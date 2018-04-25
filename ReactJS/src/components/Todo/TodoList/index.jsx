import React from 'react';
// import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};

class TodoHeader extends React.Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          <li>
            <div className="view">
              <input type="checkbox" className="toggle" />
              <label>value</label>
              <button className="destroy" />
            </div>
          </li>
          <li className="completed">
            <div className="view">
              <input type="checkbox" className="toggle" />
              <label>value2</label>
              <button className="destroy" />
            </div>
          </li>
          <li className="editing">
            <div className="view">
              <input type="checkbox" className="toggle" />
              <label>value2</label>
              <button className="destroy" />
            </div>
            <input type="text" className="edit" />
          </li>
        </ul>
      </section>
    );
  }
}

TodoHeader.propTypes = propTypes;
TodoHeader.defaultProps = defaultProps;

export default TodoHeader;
