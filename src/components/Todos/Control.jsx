import React from "react";
import { TodoConsumer } from "./Todos";
import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

const Control = () => (
    <TodoConsumer>
      {({ input, updateInput, addTodo }) => (
      <InputGroup>
      <Input className={"col-6"} type="text" value={input} onChange={updateInput} />
        <InputGroupAddon addonType="append">
          <InputGroupText onClick={addTodo}>Add</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    )}
    </TodoConsumer>
  );

  export default Control;
