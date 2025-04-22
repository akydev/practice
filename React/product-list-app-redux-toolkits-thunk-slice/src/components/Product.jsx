import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { productThunk } from "../thunk/productThunk";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, products, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(productThunk());
  }, []);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Container>
      <h1 className="text-center">Product Lists</h1>
      <Row xs={1} md={3} className="g-4">
        {loading ? (
          <Col>Loading...</Col>
        ) : error ? (
          <Col>{error}</Col>
        ) : (
          products.map((product) => (
            <Col key={product.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={product.thumbnail}
                  width={50}
                  height={220}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleProductClick(product.id)}
                  >
                    View Product
                  </button>
                </Card.Footer>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Product;
