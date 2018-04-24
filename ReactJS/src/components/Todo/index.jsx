import React from 'react';

function Todo() {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" type="text" placeholder="What needs to be done?" />
      </header>
      <section className="main">
        <input className="toggle-all" id="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all async complete</label>
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

    </section>
  );
}

export default Todo;
