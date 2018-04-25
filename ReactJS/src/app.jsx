import React from 'react';
import { Provider } from 'react-redux';
import Todo from 'components/Todo';
import { hot } from 'react-hot-loader';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Todo />
      </div>
    </Provider>
  );
}

export default hot(module)(App);
