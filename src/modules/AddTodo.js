import displayTodos from "./DisplayTodo.js";
import { textField, todoData } from "./GetElements.js";

const addTodo = () => {
  let todos = [];
  const content = "";

  const newData = JSON.parse(localStorage.getItem("todos"));

  if (localStorage.getItem("todos") === null) {
    todos.push({
      index: newData.length,
      description: textField.value,
      completed: false,
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  } else {
    const todosStr = localStorage.getItem("todos");
    todos = JSON.parse(todosStr);
    todos.push({
      index: newData.length,
      description: textField.value,
      completed: false,
    });

    localStorage.setItem("todos", JSON.stringify(todos));
  }
  todoData.innerHTML = content;
  displayTodos();
};

export default addTodo;
