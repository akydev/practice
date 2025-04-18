import React from "react";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <BootstrapNavbar bg="primary" data-bs-theme="dark">
      <Container>
        <BootstrapNavbar.Brand href="#home">App</BootstrapNavbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Todo</Nav.Link>
          <Nav.Link href="/product">Product</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default NavigationBar;
