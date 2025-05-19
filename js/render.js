// render.js
// Responsible for updating the UI based on the current list of todos and filter state.

import {
    todoList,
    totalTasksElement,
    completedTasksElement,
    todoItemTemplate,
  } from "./domElements.js";
  
  import { todos, currentFilter } from "./state.js";
  import { getFilteredTodos } from "./todoUtils.js";


  
  
 /**
   * Renders the filtered list of todos onto the DOM.
   * It first clears the existing list and appends each filtered todo item.
   */
 export function renderTodos() {
  // Clear existing list
  todoList.innerHTML = "";

  // Get filtered todos based on the current filter (all, active, completed)
  const filteredTodos = getFilteredTodos(currentFilter);

  // If no todos, show an empty message
  if (filteredTodos.length === 0) {
    const msg = document.createElement("p");
    msg.textContent = "No tasks found";
    msg.className = "empty-message";
    msg.style.textAlign = "center";
    msg.style.color = "var(--text-light)";
    msg.style.padding = "20px";
    todoList.appendChild(msg);
    return;
  }

  // Loop through todos and create DOM elements from the template
  filteredTodos.forEach(todo => {
    // Clone the template content
    const clone = todoItemTemplate.content.cloneNode(true);
    const item = clone.querySelector(".todo-item");

    // Set the todo ID on the element for identification
    item.dataset.id = todo.id;

    // Apply completed class if the todo is completed
    if (todo.completed) {
      item.classList.add("completed");
    }

    // Set checkbox and text values
    const checkbox = clone.querySelector(".todo-checkbox");
    checkbox.checked = todo.completed;

    const text = clone.querySelector(".todo-text");
    text.textContent = todo.text;

    // Append to the list
    todoList.appendChild(clone);
  });
}

/**
 * Updates the total and completed task count in the stats section.
 */
export function updateStats() {
  // Total tasks = all todos
  totalTasksElement.textContent = todos.length;

  // Completed tasks = only todos where completed is true
  const completedCount = todos.filter(todo => todo.completed).length;
  completedTasksElement.textContent = completedCount;
}



