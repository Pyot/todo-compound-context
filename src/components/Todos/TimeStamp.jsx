import React from "react";
import { TodoConsumer } from "./Todos";

const TimeStamp = ({timeStamp}) => (
  <TodoConsumer>
    {() => <div className="todo-timestamp col-4">{timeStamp}</div>}
  </TodoConsumer>
);

export default TimeStamp;