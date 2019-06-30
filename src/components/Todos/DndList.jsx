import React, { Component } from "react";
import { TodoConsumer } from "./Todos";
import Todos from './Todos'

import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const SortableItem = SortableElement(({ todo }) => <Todos.Item key={todo.id} id={todo.id}>
                                                      <Todos.Completed completed={todo.completed} />
                                                      <Todos.Text text={todo.text} />
                                                      <Todos.TimeStamp timeStamp={todo.timestamp} />
                                                      <Todos.Remove todoId={todo.id} />
                                                    </Todos.Item>);

const SortableList = SortableContainer(() => {
  return (
    <Todos.TodoList>
          {({ todosFilter }) =>
            todosFilter.map((todo, index) => (
              <SortableItem key={`item-${todo.id}`} index={index} todo={todo} />
            ))}
    </Todos.TodoList>
  );
});

const DndList = () => (
  <TodoConsumer>
    {({ onSortEnd }) => {
          return <SortableList disabled={true} distance={5} onSortEnd={onSortEnd} />}}
  </TodoConsumer>
);

export default DndList