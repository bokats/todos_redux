import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { receiveTodo, receiveTodos, fetchTodos } from './actions/todo_actions';
import { APIUtil } from './util/todo_api_util';

const store = configureStore();
window.store = store;
// window.fetchTodos = fetchTodos();
store.dispatch(fetchTodos());


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
