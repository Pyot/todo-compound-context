import React from "react";
import { TodoConsumer } from "./Todos";
import { Input, InputGroup, InputGroupAddon, InputGroupText, Label, FormGroup, Col } from "reactstrap";

const AddInput = () => (
  <TodoConsumer>
    {({ input, updateInput, addTodo, searchList, updateCheckbox, checkboxAll, checkboxCompleted, checkboxIncompleted }) => (
      <>
        <InputGroup>
          <Input className={"col-4"} type="text" value={input} onChange={updateInput} onKeyDown={(e) => e.key === 'Enter' && addTodo()} />
          <InputGroupAddon addonType="append">
            <InputGroupText onClick={addTodo}>Add</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <Input className={"col-4 mt-2"} type="text" onChange={searchList} />
        </InputGroup>
        <FormGroup row>
          <Label for="checkbox2" sm={2}>Show:</Label>
          <Col sm={{ size: 2 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox-all" onChange={updateCheckbox} checked={checkboxAll} />{' '}
                All
              </Label>
            </FormGroup>
          </Col>
          <Col sm={{ size: 2 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox-completed" onChange={updateCheckbox} checked={checkboxCompleted}/>{' '}
                Completed
              </Label>
            </FormGroup>
          </Col>
          <Col sm={{ size: 2 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox-incompleted" onChange={updateCheckbox} checked={checkboxIncompleted}/>{' '}
                Incompleted
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
      </>
    )}
  </TodoConsumer>
);

export default AddInput;
