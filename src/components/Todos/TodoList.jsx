import React from "react";
import { TodoConsumer } from "./Todos";
import { ListGroup } from 'reactstrap';

const TodoList = ({ children }) => <div>
  <ListGroup className="todo-list">
    <TodoConsumer>{children}</TodoConsumer>
  </ListGroup>
</div>

export default TodoList;
