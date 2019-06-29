import React from "react";
import { TodoConsumer } from "./Todos";
import { Button } from "reactstrap";

const Remove = () => (
  <TodoConsumer>
    {({ removeTodo }) => <Button onClick={(e)=>{removeTodo(e)}}>Remove</Button>}
  </TodoConsumer>
);

export default Remove;