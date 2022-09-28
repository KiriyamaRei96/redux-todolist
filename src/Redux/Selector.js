import { createSelector } from "@reduxjs/toolkit";

export const todolistSelector = (state) => state.todoList;
export const filterSelector = (state) => state.filter;

export const remainingSelector = createSelector(
  todolistSelector,
  filterSelector,
  (todolist, filter) => {
    return todolist.filter((todo) => {
      if (filter.searchStatus === "All") {
        return (
          todo.job.includes(filter.searchInput) &&
          (filter.searchPriority.length > 0
            ? filter.searchPriority.includes(todo.Priority)
            : true)
        );
      }
      return (
        todo.job.includes(filter.searchInput) &&
        (filter.searchStatus === "Completed"
          ? todo.completed
          : !todo.completed) &&
        (filter.searchPriority.length > 0
          ? filter.searchPriority.includes(todo.Priority)
          : true)
      );
    });
  }
);
