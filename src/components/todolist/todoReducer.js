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
// {
//   let newState = [];
//   switch (actions.type) {
//     case "todoList/addtodo":
//       newState = [...state, actions.payload];
//       break;

//     case "todoList/completetodo":
//       newState = state.map((job) => {
//         if (job.id === actions.payload) {
//           return { ...job, completed: !job.completed };
//         }
//         return job;
//       });
//       break;
//     case "todoList/removetodo":
//       newState = state.filter((todo) => todo.id !== actions.payload);

//       break;

//     default:
//       return state;
//   }
//   window.localStorage.setItem("todoList", JSON.stringify(newState));
//   return newState;
// }
export const { addtodo, completedTodo, removeTodo } = todoReducer.actions;
export default todoReducer;
