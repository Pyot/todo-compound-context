import React from "react";
import { TodoConsumer } from "./Todos";

const TimeStamp = ({timeStamp}) => (
  <TodoConsumer>
    {() => <span className="todo-timestamp">{timeStamp}</span>}
  </TodoConsumer>
);

export default TimeStamp;