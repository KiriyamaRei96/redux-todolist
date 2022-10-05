// import { createStore } from "redux";
// import reducer from "./reducer";

// const store = createStore(reducer);

// export default store;
import filterReducer from "../components/filter/filterReducer";
import todoReducer from "../components/todolist/todoReducer";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import { mySaga } from "../saga/saga";
const sagaMiddileware = createSagaMiddleware()
const store = configureStore({
  reducer: {
    filter: filterReducer.reducer,
    todoList: todoReducer.reducer,
  },
  middleware:[sagaMiddileware]
});
sagaMiddileware.run(mySaga)
export default store;
