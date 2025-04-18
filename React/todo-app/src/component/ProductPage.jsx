import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <h1 className="text-center">Product Lists</h1>
      <Row xs={1} md={3} className="g-4">
        {products.map((product) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={product.thumbnail} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage;
