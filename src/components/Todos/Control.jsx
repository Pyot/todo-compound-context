import React from "react";
import { TodoConsumer } from "./Todos";
import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

const AddInput = () => (
  <TodoConsumer>
    {({ input, updateInput, addTodo, searchList }) => (
      <>
      <InputGroup>
      <Input className={"col-4"} type="text" value={input} onChange={updateInput} />
        <InputGroupAddon addonType="append">
          <InputGroupText onClick={addTodo}>Add</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
      <Input className={"col-4 mt-2"} type="text" onChange={searchList} />
      </InputGroup>
      </>
    )}
  </TodoConsumer>
);

export default AddInput;
