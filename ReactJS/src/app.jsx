import React from 'react';
import { Provider } from 'react-redux';
import Todo from 'containers/TodoContainer';
import { hot } from 'react-hot-loader';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default hot(module)(App);
