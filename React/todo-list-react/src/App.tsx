// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateTodo />} />
          <Route path="/list" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
