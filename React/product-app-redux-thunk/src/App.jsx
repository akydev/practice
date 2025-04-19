import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Navigationbar from "./components/Navigationbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigationbar />
        <Container>
          <Routes>
            <Route path="/" element={<Product />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
