import React from 'react';
import ReactDOM from 'react-dom';
import 'node_modules/todomvc-app-css/index.css';
import 'node_modules/todomvc-common/base.css';
import Todo from 'components/Todo';
import CounterContainer from 'containers/CounterContainer';
import { Provider } from 'react-redux';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Todo />
      <CounterContainer />
    </div>
  </Provider>,
  document.getElementById('root'),
);
