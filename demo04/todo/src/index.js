import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import * as serviceWorker from './serviceWorker';
import store from './Store';
import {Provider} from 'react-redux'
ReactDOM.render(<Provider store={store}>
  <TodoApp />
</Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
