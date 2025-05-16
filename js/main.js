// main.js
// Entry point of the application

import { loadTodos } from "./storage.js";
import { setupEventListeners } from "./events.js";

// Initialize app on page load
document.addEventListener("DOMContentLoaded", () => {
  loadTodos();        // Load from localStorage
  setupEventListeners(); // Add event listeners
});
