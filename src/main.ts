import { TodoList } from "./TodoList";
import "./style.css";

// Skapa ett objekt av TodoList-klassen
const todoList = new TodoList();

// Hämta formuläret och HTML-elementen
const form = document.querySelector("#todoForm") as HTMLFormElement;
const taskInput = document.querySelector("#task") as HTMLInputElement;
const priorityInput = document.querySelector("#priority") as HTMLSelectElement;
const errorMessage = document.querySelector("#errorMessage") as HTMLParagraphElement;
const todoListElement = document.querySelector("#todoList") as HTMLUListElement;

// Lyssna efter att formuläret skickas
form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const task = taskInput.value;
  const priority = Number(priorityInput.value);

  // Lägg till uppgiften med hjälp av klassen
  const success = todoList.addTodo(task, priority);

  if (success) {
    errorMessage.textContent = "";
    form.reset();
    console.log("Uppgift tillagd!");
    renderTodos();

  } else {

    errorMessage.textContent = "Ange en giltig uppgift och prioritet.";
  }
});

function renderTodos(): void {

  const todos = todoList.getTodos();

  todoListElement.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    li.textContent = `${todo.task} - Prioritet: ${todo.priority}`;

    if (todo.completed) {
      li.style.textDecoration = "line-through";
    } else {
      const button = document.createElement("button");
      button.textContent = "Markera som klar";

      button.addEventListener("click", () => {
        todoList.markTodoCompleted(index);
        renderTodos();
      });

      li.appendChild(button);
    }

    todoListElement.appendChild(li);
  });


}

// Visa sparade uppgifter när sidan laddas om
renderTodos();