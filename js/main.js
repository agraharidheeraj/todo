// main.js
// Entry point of the application

import { loadTodos } from "./storage.js";
import { setupEventListeners } from "./events.js";
import { renderTodos } from "./render.js";
import { updateStats } from "./render.js";

// Initialize app on page load
document.addEventListener("DOMContentLoaded", () => {
  loadTodos();  
 renderTodos() ;
 updateStats()   // Load from localStorage
  setupEventListeners(); // Add event listeners
});
