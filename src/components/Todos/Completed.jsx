import React from "react";
import { TodoConsumer } from "./Todos";

const Completed = ({completed}) => (
  <TodoConsumer>
    {({completedTodo}) => <div className={'col-2'}>
            <input type="checkbox" checked={completed}  onChange={(e)=>{completedTodo(e)}}/>
        </div>}
  </TodoConsumer>
);

export default Completed;