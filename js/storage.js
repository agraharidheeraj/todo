import { setTodos } from "./state"


export function loadTodos () {
    const saved = localStorage.getItem("todos")
    setTodos(saved ? JSON.parse(saved) : [] )
}

export function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos))
}