//stores and manage data inside app-level

export let todos =[]  // Array of todo items
export let currentFilter = 'all';
export let editTodoId= null;


//function to update the state 
export function setTodos(newTodos) {
    todos = newTodos;
}

export function setCurrentFilter(filter) {
    currentFilter = filter;
}

export function setEditingTodoId(id) {
    editTodoId=id;
}