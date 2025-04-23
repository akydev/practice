import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProductThunk, productThunk } from "../thunk/productThunk";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, products, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(productThunk());
  }, []);

  const handleProductView = (id) => {
    navigate(`/product/${id}`);
  };

  const handleProductEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  const handleProductDelete = (id) => {
    dispatch(deleteProductThunk(id));
    alert("Product deleted successfully...");
  };

  return (
    <Container>
      <h1 className="text-center">Product Lists</h1>
      <Row xs={1} md={2} lg={3} xl={4} className="py-4 g-4">
        {loading ? (
          <Col>Loading...</Col>
        ) : error ? (
          <Col>{error}</Col>
        ) : (
          products.map((product) => (
            <Col key={product.id}>
              <Card className="h-100">
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
                <Card.Footer className=" d-flex justify-content-evenly">
                  <Button
                    variant="outline-primary"
                    onClick={() => handleProductView(product.id)}
                  >
                    VIEW
                  </Button>
                  <Button
                    variant="outline-success"
                    onClick={() => handleProductEdit(product.id)}
                  >
                    EDIT
                  </Button>
                  <Button
                    variant="outline-danger"
                    onClick={() => handleProductDelete(product.id)}
                  >
                    DELETE
                  </Button>
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
