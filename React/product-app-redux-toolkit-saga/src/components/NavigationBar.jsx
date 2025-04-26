import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Product App</Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/product">Product</Nav.Link>
          <Nav.Link href="/add-product">Add Product</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
