import displayTodos from "./DisplayTodo";
import { todoData } from "./GetElements";

const updateTodo = (index, description) => {
  let todos = [];
  const content = "";

  const todosStr = localStorage.getItem("todos");
  todos = JSON.parse(todosStr);

  const updateTodo = todos.filter((item) => {
    if (item.index === index) {
      item.description = description;
    }
    return item;
  });

  localStorage.setItem("todos", JSON.stringify(updateTodo));

  todoData.innerHTML = content;
  displayTodos();
};

export default updateTodo;
