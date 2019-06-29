import React from "react";
import { TodoConsumer } from "./Todos";
import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

const Control = () => (
    <TodoConsumer>
      {() => (
        <InputGroup>
        <Input className={"col-6"} type="text"   />
          <InputGroupAddon addonType="append">
            <InputGroupText >Add</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      )}
    </TodoConsumer>
  );

  export default Control;
