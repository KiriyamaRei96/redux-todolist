import { Col, Row, Input, Radio, Typography, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch, searchStatus, searchPriority } from "./filterReducer";
const { Search } = Input;
function Filter() {
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState("");
  const searchHandler = (value) => {
    setSearchInput(value);
    dispatch(setSearch(value));
  };
  const slecStatusHandler = (value) => {
    dispatch(searchStatus(value));
  };
  const slecPriorityHandler = (value) => {
    dispatch(searchPriority(value));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{
            fontWeight: "bold",
            marginBottom: "3px",
            marginTop: "10px",
          }}
        >
          Search
        </Typography.Paragraph>
        <Search
          value={searchInput}
          onChange={(e) => searchHandler(e.target.value)}
        />
      </Col>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group
          defaultValue={"All"}
          onChange={(e) => slecStatusHandler(e.target.value)}
        >
          <Radio value="All"> All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          onChange={(value) => slecPriorityHandler(value)}
          mode="multiple"
          allowClear={true}
          placeholder="Please select"
          style={{ width: "100%" }}
        >
          <Select.Option value="Hight">
            <Tag color="red">Hight</Tag>
          </Select.Option>
          <Select.Option value="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
export default Filter;
