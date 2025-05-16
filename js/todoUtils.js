// todoUtils.js
// Contains core logic for creating, deleting, toggling, editing, and filtering todos

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
}

