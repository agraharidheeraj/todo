//create todos

import { setTodos, todos } from "./state"
import { saveTodos } from "./storage";

export function createTodo(text) {
    const newTodo = {
        id: Date.now().toString(),
        text,
        completed:false,
        createdAt:new Date(),
    }

    const updatedTodos = [newTodo, ...todos]
    setTodos(updatedTodos);
    saveTodos(updatedTodos)
}