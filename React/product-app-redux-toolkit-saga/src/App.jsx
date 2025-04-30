import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import NavigationBar from "./components/NavigationBar";
import { Container, Row } from "react-bootstrap";
import ViewProduct from "./components/ViewProduct";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<ViewProduct />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/update-product/:id" element={<UpdateProduct />} />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
