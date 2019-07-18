import React from 'react';
import { TodoConsumer } from 'containers/Todos';
import {
  Input,
  Label,
  FormGroup,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem
} from 'reactstrap';

const Search = () => (
  <TodoConsumer>
    {({
      updateCheckbox,
      checkboxAll,
      checkboxCompleted,
      checkboxIncompleted
    }) => (
      <>
        <UncontrolledDropdown className="mb-2 mt-2 mb-md-0 ml-3" nav inNavbar>
          <DropdownToggle nav caret>
            Show tasks:
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    id="checkbox-all"
                    onChange={updateCheckbox}
                    checked={checkboxAll}
                  />{' '}
                  All
                </Label>
              </FormGroup>
            </DropdownItem>
            <DropdownItem>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    id="checkbox-completed"
                    onChange={updateCheckbox}
                    checked={checkboxCompleted}
                  />{' '}
                  Completed
                </Label>
              </FormGroup>
            </DropdownItem>
            <DropdownItem>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    id="checkbox-incompleted"
                    onChange={updateCheckbox}
                    checked={checkboxIncompleted}
                  />{' '}
                  Incompleted
                </Label>
              </FormGroup>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
          <span className="navbar-text ml-3 mr-3">
            {checkboxAll ||
            (!checkboxAll && !checkboxCompleted && !checkboxIncompleted) ? (
              <Badge color="info">All</Badge>
            ) : (
              ''
            )}
            {checkboxCompleted && <Badge color="info">Completed</Badge>}
            {checkboxIncompleted && <Badge color="info">Incompleted</Badge>}
          </span>
        </NavItem>
      </>
    )}
  </TodoConsumer>
);

export default Search;
