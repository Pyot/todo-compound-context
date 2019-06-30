import React from "react";
import { TodoConsumer } from "./Todos";
import { Badge } from "reactstrap";

const TimeStamp = ({timeStamp}) => (
  <TodoConsumer>
    {() => <Badge className="todo-timestamp ml-3 mr-3" color="warning">{timeStamp}</Badge>}
  </TodoConsumer>
);

export default TimeStamp;