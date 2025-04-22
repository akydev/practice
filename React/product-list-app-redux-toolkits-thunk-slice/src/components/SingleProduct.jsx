import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductByIdThunk } from "../thunk/productThunk";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, selectedProduct, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchProductByIdThunk(id));
    }
  }, [id]);

  return (
    <Container>
      <h1 className="text-center pt-4">Product Details</h1>
      <Row
        xs={1}
        md={3}
        className="align-items-center justify-content-center pt-5"
      >
        {loading ? (
          <Col>Loading...</Col>
        ) : error ? (
          <Col>{error}</Col>
        ) : (
          selectedProduct && (
            <Col key={selectedProduct.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={selectedProduct.thumbnail}
                  width={50}
                  height={220}
                />
                <Card.Body>
                  <Card.Title>{selectedProduct.title}</Card.Title>
                  <Card.Text>{selectedProduct.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        )}
      </Row>
    </Container>
  );
};

export default SingleProduct;
