import { useDispatch, useSelector } from "react-redux/es/exports";
// import { addtodo } from "../../Redux/actions";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./todo.module.css";
import { remainingSelector } from "../../Redux/Selector";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import Job from "../todo";
import { addtodo, addtodoThunk } from "./todoReducer";
function TodoList() {
  const [input, setInput] = useState("");
  const [selected, setSelect] = useState("Medium");
  const todoList = useSelector(remainingSelector);

  const dispatch = useDispatch();

  const addHandler = () => {
    if (input !== "") {
      // dispatch(
      //   addtodo({
      //     id: uuidv4(),
      //     job: input,
      //     Priority: selected,
      //     completed: false,
      //   })
      // );
      dispatch(
        addtodoThunk({
          id: uuidv4(),
          job: input,
          Priority: selected,
          completed: false,
        })
      );
      setInput("");
      setSelect("Medium");
    }
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)" }}>
        {todoList.map((todo) => (
          <Job
            className={style.job}
            key={todo.id}
            id={todo.id}
            job={todo.job}
            priority={todo.Priority}
            complete={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          ></Input>
          <Select onChange={(value) => setSelect(value)} value={selected}>
            <Select.Option value="Hight" label="Hight">
              <Tag color="red">Hight</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={addHandler}>add</Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
export default TodoList;
