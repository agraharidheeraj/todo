// todoUtils.js
// Contains core logic for creating, deleting, toggling, editing, and filtering todos

import { renderTodos, updateStats } from "./render.js";
import { todos, setTodos } from "./state.js";
import { saveTodos } from "./storage.js";

export function createTodo(text) {
  const newTodo = {
    id: Date.now().toString(),   // Unique ID based on timestamp
    text,
    completed: false,
    createdAt: new Date(),       // Optional: you can use this for sorting or history
  };

  const updatedTodos = [newTodo, ...todos];
  setTodos(updatedTodos);
  saveTodos(updatedTodos);
  renderTodos();
  updateStats();
}

/**
 * Deletes a todo item based on its ID.
 * @param {string} id - The ID of the todo to delete
 */
export function deleteTodo(id) {
  const updatedTodos = todos.filter(todo => todo.id !== id);
  setTodos(updatedTodos);
  saveTodos(updatedTodos);
  renderTodos();
  updateStats();
}

/**
 * Toggles the completed state of a todo item by ID.
 * @param {string} id - The ID of the todo to toggle
 */
export function toggleTodoStatus(id) {
  const updatedTodos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );

  setTodos(updatedTodos);
  saveTodos(updatedTodos);
  renderTodos();
  updateStats();
}



export function getFilteredTodos(filter) {
  switch (filter) {
    case "active":
      return todos.filter(todo => !todo.completed)
      case "completed":
        return  todos.filter(todo => todo.completed)
        default:
          return todos;
  }
}