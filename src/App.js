import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./components/Header";
import Footer from "./components/Footer";
import ToDo from "./components/ToDo";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <>
      <Headers />
      <ToDo>
        <TodoItem /> 
      </ToDo>
      <Footer />
    </>
  );
}

export default App;
