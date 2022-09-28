import { useState } from "react";
import { useDispatch } from "react-redux";
import { completedTodo, removeTodo } from "../todolist/todoReducer";
import { Row, Button, Checkbox, Tag } from "antd";
import style from "../todolist/todo.module.css";

function Job({ job, priority, className, id, complete }) {
  const [completed, setCompleted] = useState(complete);
  const dispatch = useDispatch();
  const checkHandler = () => {
    setCompleted(!completed);
    dispatch(completedTodo(id));
  };
  const removeHandler = () => {
    dispatch(removeTodo(id));
  };
  const colorMap = {
    Hight: "red",
    Medium: "blue",
    Low: "gray",
  };
  return (
    <Row
      className={className && completed ? `${style.completed}` : true}
      justify="space-between"
    >
      <Checkbox checked={completed} onChange={checkHandler}>
        {job}
      </Checkbox>
      <div>
        <Tag color={colorMap[priority]}>{priority}</Tag>
        <Button onClick={removeHandler} className={style.button}>
          Remove
        </Button>
      </div>
    </Row>
  );
}
export default Job;
