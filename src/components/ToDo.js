import React from "react";
import { TodoItem } from "./TodoItem";

export const ToDo = (props) => {
  return (
    <div className="container text-center">
      <h3>ToDos Lists</h3>
      {props.todo.length === 0
        ? "No ToDO !!"
        : props.todo.map((todo) => {
            return (
              <TodoItem key={todo.Id} todo={todo} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
