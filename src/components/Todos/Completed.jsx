import React from "react";
import { TodoConsumer } from "./Todos";

const Completed = ({completed}) => (
  <TodoConsumer>
    {() => <div className={'col-2'}>
        <input type="checkbox" checked={completed}/>
        </div>}
  </TodoConsumer>
);

export default Completed;