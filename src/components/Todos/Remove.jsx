import React from "react";
import { TodoConsumer } from "./Todos";
import { Button } from "reactstrap";

const Remove = () => (
  <TodoConsumer>
    {({ removeTodo }) => <Button className="ml-3 mr-3 btn-sm" color="danger" onClick={(e)=>{removeTodo(e)}}>Remove</Button>}
  </TodoConsumer>
);

export default Remove;