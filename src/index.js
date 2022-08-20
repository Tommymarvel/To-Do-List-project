import AddList from './modules/AddTodo.js';
import ClearCompletedTasks from './modules/clearcompleted.js';
import ShowList from './modules/DisplayTodo.js';
import { textBox, clearCompletedTasks } from './modules/GetElements.js';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  textBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const listAdd = new AddList();
      listAdd.addList();
    }
  });
  clearCompletedTasks.addEventListener('click', () => {
    const clearAllCompleted = new ClearCompletedTasks();
    clearAllCompleted.clearCompletedTasks();
  });

  const listShow = new ShowList();
  listShow.showList();
});
