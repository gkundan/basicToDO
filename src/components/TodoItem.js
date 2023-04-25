import React from "react";
import Button from "react-bootstrap/Button";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="text-center">
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <Button
        variant="danger"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </Button>
    </div>
  );
};
