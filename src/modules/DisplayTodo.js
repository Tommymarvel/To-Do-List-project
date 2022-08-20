import { todoData } from './GetElements.js';
// eslint-disable-next-line import/no-cycle
import removeTodo from './RemoveTodo.js';
// eslint-disable-next-line import/no-cycle
import updateTodo from './UpdateTodo.js';

const displayTodos = () => {
  let todos = [];

  if (localStorage.getItem('todos') === null) {
    localStorage.setItem('todos', JSON.stringify(todos));
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.map((data) => {
    const { index, description } = data;
    const elementDiv = document.createElement('div');
    elementDiv.className = 'todo-lists the-elements';
    const checkBox = document.createElement('input');
    const todoParagraph = document.createElement('p');
    const removeBtn = document.createElement('i');
    removeBtn.className = 'fa fa-trash';
    const editBtn = document.createElement('i');
    editBtn.className = 'fa fa-edit';
    removeBtn.style.display = 'none';
    const editField = document.createElement('input');
    editField.style.display = 'none';
    editField.value = description;
    editField.className = 'edit-field';

    removeBtn.addEventListener('click', () => {
      removeTodo(index);
    });

    editBtn.addEventListener('click', () => {
      todoParagraph.style.display = 'none';
      checkBox.style.display = 'none';
      removeBtn.style.display = 'block';
      editBtn.style.display = 'none';
      editField.style.display = 'block';
      editField.focus();
    });

    editField.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        updateTodo(index, editField.value);
      }
    });

    checkBox.setAttribute('type', 'checkbox');
    todoParagraph.innerText = description;
    elementDiv.append(checkBox, todoParagraph, editField, editBtn, removeBtn);
    todoData.append(elementDiv);
    return data;
  });
};

export default displayTodos;
