import React from "react";
import { TodoConsumer } from "./Todos";
import {
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  FormGroup,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const ControlView = ({ toggle, isOpen }) => (
  <TodoConsumer>
    {({ input, updateInput, addTodo, searchList, updateCheckbox, checkboxAll, checkboxCompleted, checkboxIncompleted }) => (
      <>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">ToDo</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <InputGroup>
                  <Input type="text" value={input} onChange={updateInput} onKeyDown={(e) => e.key === 'Enter' && addTodo()} placeholder="Add new task" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText onClick={addTodo}>Add</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </NavItem>
              <NavItem>
                <InputGroup >
                  <Input className={'ml-5'} type="text" onChange={searchList} placeholder="Search task..." />
                </InputGroup>
              </NavItem>
              <UncontrolledDropdown className={'ml-3'} nav inNavbar>
                <DropdownToggle nav caret>
                  Show tasks:
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" id="checkbox-all" onChange={updateCheckbox} checked={checkboxAll} />{' '}
                        All
                      </Label>
                    </FormGroup>
                  </DropdownItem>
                  <DropdownItem>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" id="checkbox-completed" onChange={updateCheckbox} checked={checkboxCompleted} />{' '}
                        Completed
                      </Label>
                    </FormGroup>
                  </DropdownItem>
                  <DropdownItem>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" id="checkbox-incompleted" onChange={updateCheckbox} checked={checkboxIncompleted} />{' '}
                        Incompleted
                      </Label>
                    </FormGroup>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink disabled>
                  {checkboxAll || (!checkboxAll && !checkboxCompleted && !checkboxIncompleted) ? 'All' : ''}
                  {checkboxCompleted && 'Completed'}
                  {checkboxIncompleted && 'Incompleted'}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    )}
  </TodoConsumer>
)



export default class Control extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { isOpen } = this.state
    return (
      <ControlView toggle={this.toggle}
        isOpen={isOpen}
      />
    );
  }
}