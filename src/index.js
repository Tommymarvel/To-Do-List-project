/* eslint-disable max-classes-per-file */

import addTodo from './modules/AddTodo.js';
import displayTodos from './modules/DisplayTodo.js';
import { textField } from './modules/GetElements.js';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  textField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addTodo();
      textField.value = '';
    }
  });
  displayTodos();
});
