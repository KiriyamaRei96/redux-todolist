import React from "react";
import TodoList from "./components/todolist";
import Filter from "./components/filter";
import { Divider } from "antd";
import "./App.css";

import "antd/dist/antd.min.css";

function App() {
  return (
    <div className="wrapper">
      <Filter />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
