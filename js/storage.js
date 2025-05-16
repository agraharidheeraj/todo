// storage.js
// Responsible for loading and saving todos to localStorage

import { setTodos } from "./state.js";

// Load todos from localStorage
export function loadTodos() {
  const saved = localStorage.getItem("todos");
  setTodos(saved ? JSON.parse(saved) : []);
}

// Save todos to localStorage
export function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
