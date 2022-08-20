import addTodo from "./modules/AddTodo";
import displayTodos from "./modules/DisplayTodo";
import { textField } from "./modules/GetElements";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  textField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTodo();
      textField.value = "";
    }
  });
  displayTodos();
});
