// state.js
// Stores and manages app-level state like todos, current filter, etc.

export let todos = []; // Array of todo items
export let currentFilter = "all"; // active | completed | all
export let editingTodoId = null; // Stores the ID of the todo being edited

// Functions to update state (to keep things consistent across modules)
export function setTodos(newTodos) {
  todos = newTodos;
}

export function setCurrentFilter(filter) {
  currentFilter = filter;
}

export function setEditingTodoId(id) {
  editingTodoId = id;
}
