import React from 'react';
import { TodoConsumer } from 'containers/Todos';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';

import AddTask from 'components/AddTask.control';
import Search from 'components/Search.control';
import Show from 'components/Show.control';

const ControlView = ({ toggle, isOpen }) => (
  <TodoConsumer>
    {({ checkboxAll, checkboxCompleted, checkboxIncompleted }) => (
      <>
        <Navbar color="navbar-dark bg-primary" light expand="md">
          <NavbarBrand href="/">ToDo</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <AddTask />
              <Search />
              <Show />
            </Nav>
          </Collapse>
        </Navbar>
      </>
    )}
  </TodoConsumer>
);

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
    const { isOpen } = this.state;
    return <ControlView toggle={this.toggle} isOpen={isOpen} />;
  }
}
