import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import NavigationBar from "./components/NavigationBar";
import { Container } from "react-bootstrap";
import ViewProduct from "./components/ViewProduct";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Container>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ViewProduct />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
