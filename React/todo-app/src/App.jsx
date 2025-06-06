import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import TodoList from "./component/TodoList";
import ProductPage from "./component/ProductPage";
import NavigationBar from "./component/NavigationBar";
import ProductList from "./component/ProductList";
function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Container>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/productlist" element={<ProductList />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
