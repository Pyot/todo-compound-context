import React from 'react';
import { TodoConsumer } from 'containers/Todos';
import { ListGroupItem } from 'reactstrap';

const Item = ({ id, children }) => (
  <ListGroupItem id={id} className="todo-item d-flex align-items-center">
    <TodoConsumer>{() => children}</TodoConsumer>
  </ListGroupItem>
);
export default Item;
