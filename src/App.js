import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./components/Header";
import Footer from "./components/Footer";
import { ToDo } from "./components/ToDo";
import React, { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("Deleted!", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const [todos, setTodos] = useState([
    {
      Id: 1,
      title: "Need to Clean Your House",
      desc: "Today Is the Day To Clean Your House.",
    },
    {
      Id: 2,
      title: "Go to Market",
      desc: "Have to Buy Some Grocery.",
    },
    {
      Id: 3,
      title: "Go for Walk",
      desc: "Walk up to 5000 steps.",
    },
    {
      Id: 4,
      title: "Go to Collage",
      desc: "Today Have to go collage .",
    },
  ]);

  return (
    <>
      <Headers />
      <ToDo todo={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
