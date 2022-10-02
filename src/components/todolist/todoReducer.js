import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// let initialState = [];
// get infomation from localStorage
// const localStorage = window.localStorage.getItem("todoList");

// if (Boolean(localStorage)) {
//   initialState = JSON.parse(localStorage);
// }

const todoReducer = createSlice({
  name: "todo list",
  initialState: [],
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
  extraReducers: (builder) => {
    builder
      .addCase(getTodoList.fulfilled, (state, actions) => {
        state = actions.payload.todos;
        return state;
      })
      .addCase(addtodoThunk.fulfilled, (state, actions) => {
        state.push(actions.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, actions) => {
        state = state.filter((todo) => todo.id !== actions.payload);

        return state;
      });
  },
});

export const { addtodo, completedTodo, removeTodo } = todoReducer.actions;
export const getTodoList = createAsyncThunk(
  "todoList/getTodoList",
  async () => {
    const res = await fetch("/api/todoList")
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
    return res;
  }
);
export const addtodoThunk = createAsyncThunk(
  "todoList/addtodoThunk",
  async (payload) => {
    const res = await fetch("/api/todoList", {
      method: "POST",
      body: JSON.stringify(payload),
    }).then((res) => res.json());
    return res;
  }
);
export const deleteTodo = createAsyncThunk(
  "todoList/deleteTodo",
  async (payload) => {
    const res = await fetch(`/api/todoList/${payload}`, {
      method: "DELETE",
      body: JSON.stringify(payload),
    }).then((responve) => {
      return responve.json();
    });

    return payload;
  }
);
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
