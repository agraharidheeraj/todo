import { setupEventListeners } from "./events"
import { loadTodos } from "./storage"


document.addEventListener("DOMContentLoaded" , () => {
    loadTodos()
    setupEventListeners();
})