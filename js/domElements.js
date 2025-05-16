// domElements.js
// This file exports all DOM elements used in the app

export const todoForm = document.getElementById("todo-form");
export const todoInput = document.getElementById("todo-input");
export const todoList = document.getElementById("todo-list");

export const totalTasksElement = document.getElementById("total-tasks");
export const completedTasksElement = document.getElementById("completed-tasks");

export const filterButtons = document.querySelectorAll(".filter-btn");
export const clearCompletedBtn = document.getElementById("clear-completed");
export const clearAllBtn = document.getElementById("clear-all");

export const editModal = document.getElementById("edit-modal");
export const editInput = document.getElementById("edit-input");
export const saveEditBtn = document.getElementById("save-edit");
export const cancelEditBtn = document.getElementById("cancel-edit");

export const todoItemTemplate = document.getElementById("todo-item-template");
