import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./components/Header";
import Footer from "./components/Footer";
import { ToDo } from "./components/ToDo";
import React, { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";

function App() {
  //initial check
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  //delete todos.
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
    localStorage.setItem(
      "todos",
      JSON.stringify(todos.filter((e) => e !== todo))
    );
  };

  // add todo
  const addTodo = (title, desc) => {
    let Id;
    if (todos.length === 0) {
      Id = 0;
    } else {
      Id = todos[todos.length - 1].Id + 1;
    }
    const myTodo = {
      Id: Id,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);

    localStorage.setItem("todos", JSON.stringify([...todos, myTodo]));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Headers />
      <div className="container d-flex ">
        <AddTodo addTodo={addTodo} />
        <ToDo todo={todos} onDelete={onDelete} />
      </div>
      <Footer />
    </>
  );
}

export default App;
