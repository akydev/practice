import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import Product from "./components/Product";
import SingleProduct from "./components/SingleProduct";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigationbar />
        <Container>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
            <Route path="/pricing" element={<h1>Pricing</h1>} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/contact" element={<h1>Contact</h1>} />
            <Route path="/services" element={<h1>Services</h1>} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
