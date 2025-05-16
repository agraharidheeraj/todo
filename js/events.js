// events.js
// Handles user interactions: form submit, button clicks, modal actions

import {
    todoForm,
    todoInput,
  } from "./domElements.js";
  
  import {
    createTodo,
  } from "./todoUtils.js";
  
  
  /**
   * Sets up all necessary event listeners once the app is initialized.
   */
  export function setupEventListeners() {
    // Listener for adding a new todo
    todoForm.addEventListener("submit", e => {
      e.preventDefault();
      const text = todoInput.value.trim();
      if (text) {
        createTodo(text);
        todoInput.value = "";
      }
    });
  
  
  }
  
 