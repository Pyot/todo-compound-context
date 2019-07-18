import React from 'react';
import { TodoConsumer } from 'containers/Todos';
import {
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  NavItem
} from 'reactstrap';

const AddTask = () => (
  <TodoConsumer>
    {({ input, updateInput, addTodo }) => (
      <NavItem className="mb-2 mt-2 mb-md-0">
        <InputGroup>
          <Input
            type="text"
            value={input}
            onChange={updateInput}
            onKeyDown={e => e.key === 'Enter' && addTodo()}
            placeholder="Add new task"
          />
          <InputGroupAddon addonType="append">
            <InputGroupText onClick={addTodo}>Add</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </NavItem>
    )}
  </TodoConsumer>
);

export default AddTask;
