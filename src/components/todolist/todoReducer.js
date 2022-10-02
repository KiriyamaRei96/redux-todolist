import { createSlice } from "@reduxjs/toolkit";

let initialState = [];
// get infomation from localStorage
const localStorage = window.localStorage.getItem("todoList");

if (Boolean(localStorage)) {
  initialState = JSON.parse(localStorage);
}

const todoReducer = createSlice({
  name: "todo list",
  initialState,
  reducers: {
    addtodo: (state, actions) => {
      state.push(actions.payload);
    },
    completedTodo: (state, actions) => {
      state = state.map((job) => {
        if (job.id === actions.payload) {
          return { ...job, completed: !job.completed };
        }
        return job;
      });
    },
    removeTodo: (state, actions) => {
      state = state.filter((todo) => todo.id !== actions.payload);
    },
  },
});

export const { addtodo, completedTodo, removeTodo } = todoReducer.actions;
export default todoReducer;
// export const addtodoThunk = (payload) => {
//   return async (dispatch, getState) => {
//     const res = await fetch("/api/todoList", {
//       method: "POST",
//       body: JSON.stringify(payload),
//     }).then((res) => res.json());
//     dispatch(addtodo(res));
//   };
// };
