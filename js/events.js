// events.js
// Handles user interactions: form submit, button clicks, modal actions

import {
  editInput,
  editModal,
  todoForm,
  todoInput,
  todoList,
} from "./domElements.js";
import { setEditingTodoId, todos } from "./state.js";

import { createTodo, deleteTodo, toggleTodoStatus } from "./todoUtils.js";

/**
 * Sets up all necessary event listeners once the app is initialized.
 */
export function setupEventListeners() {
  // Listener for adding a new todo
  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (text) {
      createTodo(text);
      todoInput.value = "";
    }
  });

    // Delegated event listeners for actions within todo list
    todoList.addEventListener("click", e => {
      const item = e.target.closest(".todo-item");
      if (!item) return;
      const id = item.dataset.id;
  
      // Toggle completion
      if (e.target.classList.contains("todo-checkbox")) {
        toggleTodoStatus(id);
      }
  
      // Delete todo
      else if (e.target.classList.contains("delete-btn")) {
        deleteTodo(id);
      }
  
      // Open edit modal
      else if (e.target.classList.contains("edit-btn")) {
        openEditModal(id);
      }
    });

}

  /**
   * Opens the edit modal for a specific todo item.
   * @param {string} id - ID of the todo to edit
   */
  function openEditModal(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
      setEditingTodoId(id);
      editInput.value = todo.text;
      editModal.classList.add("show");
      editInput.focus();
    }
  }
  
  /**
   * Closes the edit modal and resets the editing state.
   */
  function closeEditModal() {
    editModal.classList.remove("show");
    setEditingTodoId(null);
  }
  