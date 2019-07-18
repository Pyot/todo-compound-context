import React from 'react';
import { TodoConsumer } from 'containers/Todos';

const Completed = ({ completed }) => (
  <TodoConsumer>
    {({ completedTodo }) => (
      <input
        className="ml-3 mr-3"
        type="checkbox"
        checked={completed}
        onChange={e => {
          completedTodo(e);
        }}
      />
    )}
  </TodoConsumer>
);

export default Completed;
