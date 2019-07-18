import React from 'react';
import { TodoConsumer } from 'containers/Todos';
import { Input, InputGroup, NavItem } from 'reactstrap';

const Search = () => (
  <TodoConsumer>
    {({ searchList }) => (
      <NavItem className="mb-2 mt-2 mb-md-0">
        <InputGroup>
          <Input
            className="ml-5"
            type="text"
            onChange={searchList}
            placeholder="Search task..."
          />
        </InputGroup>
      </NavItem>
    )}
  </TodoConsumer>
);

export default Search;
