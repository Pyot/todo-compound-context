import React from "react";
import { TodoConsumer } from "./Todos";

const Dnd = ({children}) => <TodoConsumer>{children}</TodoConsumer>;

export default Dnd;
