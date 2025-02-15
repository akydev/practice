import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import UserList from "./UserList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/list" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
