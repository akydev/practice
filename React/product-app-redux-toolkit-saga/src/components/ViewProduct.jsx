import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchViewProductRequest } from "../redux/slice/productSlice";

const ViewProduct = () => {
  const dispatch = useDispatch();
  const id = useParams();
  const { loading, selectedProduct, error } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchViewProductRequest(id));
    }
  }, [id, dispatch]);

  return (
    <Container>
      <h1 className="text-center pt-4 text-uppercase">View Product</h1>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4 py-5">
        {selectedProduct && (
          <Col key={selectedProduct.id}>
            <Card className="h-100">
              <Carousel>
                {selectedProduct.images.map((img, index) => (
                  <Carousel.Item key={index}>
                    <Card.Img variant="top" src={img} />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <Card.Title>{selectedProduct.title}</Card.Title>
                <Card.Text>{selectedProduct.description}</Card.Text>
              </Card.Body>
              <Card.Footer className=" d-flex justify-content-evenly">
                <Button variant="outline-primary">VIEW</Button>
              </Card.Footer>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default ViewProduct;
