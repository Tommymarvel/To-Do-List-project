// eslint-disable-next-line import/no-cycle
import displayTodos from './DisplayTodo.js';
import { todoData } from './GetElements.js';

const removeTodo = (id) => {
  let todos = [];
  const content = '';
  const todosStr = localStorage.getItem('todos');
  todos = JSON.parse(todosStr);
  todos.splice(id, 1);

  // Updated index
  const updateData = todos.filter((updatedIndex, index) => {
    if (updatedIndex.index !== index) {
      updatedIndex.index = index;
    }
    return updatedIndex;
  });

  localStorage.setItem('todos', JSON.stringify(updateData));
  todoData.innerHTML = content;
  displayTodos();
};

export default removeTodo;
