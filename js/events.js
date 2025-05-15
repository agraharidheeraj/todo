import { todoForm, todoInput } from "./domElements";
import { createTodo } from "./todoUtils";



export function setupEventListeners() {
    todoForm.addEventListener("submit", e => {
        e.preventDefault();
        const text = todoInput.value.trim();
        if(text) {
            createTodo(text)
            todoInput.value = ""
        }
    });


    
}