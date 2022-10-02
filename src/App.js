import React, { useEffect } from "react";
import TodoList from "./components/todolist";
import Filter from "./components/filter";
import { Divider } from "antd";
import "./App.css";

import "antd/dist/antd.min.css";
import { setupServer } from "./fake Api/server";
import { getTodoList } from "./components/todolist/todoReducer";
import { useDispatch } from "react-redux";
setupServer();
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodoList());
  }, []);
  return (
    <div className="wrapper">
      <Filter />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
