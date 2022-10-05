import React, { useEffect } from "react";
import TodoList from "./components/todolist";
import Filter from "./components/filter";
import { Divider } from "antd";
import "./App.css";

import "antd/dist/antd.min.css";
import { setupServer } from "./fake Api/server";
import { useDispatch } from "react-redux";
setupServer();
function App() {
const dispatch = useDispatch()
useEffect(()=>{
  dispatch({type:"USER_FETCH_REQUESTED",action:'test'})

},[])



  // useEffect(() => {
  //   fetch("/api/todoList")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //     });
  //   fetch("/api/todoList", {
  //     method: "post",
  //     body: JSON.stringify({
  //       id: "n30262a2-3707-4428-b320-14116b3f78a2",
  //       job: "ccccc",
  //       Priority: "Medium",
  //       completed: true,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //     })
  //     .then(
  //       fetch("/api/todoList/n30262a2-3707-4428-b320-14116b3f78a2", {
  //         method: "PATCH",
  //         body: JSON.stringify({ id: "testing" }),
  //       })
  //         .then((res) => res.json())
  //         .then((json) => {
  //           console.log(json);
  //         })
  //     );
  // }, []);
  return (
    <div className="wrapper">
      <Filter />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
