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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from "reactstrap";

const ControlView = ({ toggle, isOpen }) => (
  <TodoConsumer>
    {({ input, updateInput, addTodo, searchList, updateCheckbox, checkboxAll, checkboxCompleted, checkboxIncompleted }) => (
      <>
        <Navbar color="navbar-dark bg-primary" light expand="md">
          <NavbarBrand href="/">ToDo</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className="mb-2 mt-2 mb-md-0">
                <InputGroup>
                  <Input type="text" value={input} onChange={updateInput} onKeyDown={(e) => e.key === 'Enter' && addTodo()} placeholder="Add new task" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText onClick={addTodo}>Add</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </NavItem>
              <NavItem className="mb-2 mt-2 mb-md-0">
                <InputGroup >
                  <Input className="ml-5" type="text" onChange={searchList} placeholder="Search task..." />
                </InputGroup>
              </NavItem>
              <UncontrolledDropdown className="mb-2 mt-2 mb-md-0 ml-3" nav inNavbar>
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
                <span className="navbar-text ml-3 mr-3">
                  {checkboxAll || (!checkboxAll && !checkboxCompleted && !checkboxIncompleted) ? <Badge color="info">All</Badge> : ''}
                  {checkboxCompleted && <Badge color="info">Completed</Badge>}
                  {checkboxIncompleted && <Badge color="info">Incompleted</Badge>}
                </span>
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