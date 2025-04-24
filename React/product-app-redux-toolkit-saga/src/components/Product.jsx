import React, { useEffect } from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductRequest } from "../redux/slice/productSlice";

const Product = () => {
  const dispatch = useDispatch();

  const { loading, products, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductRequest());
  }, [dispatch]);

  return (
    <Container>
      <h1 className="text-center pt-4 text-uppercase">Product List</h1>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4 py-5">
        {products.map((val, i) => (
          <Col key={val.id}>
            <Card className="h-100">
              <Carousel>
                {val.images.map((img, index) => (
                  <Carousel.Item key={index}>
                    <Card.Img variant="top" src={img} />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <Card.Title>{val.title}</Card.Title>
                <Card.Text>{val.description}</Card.Text>
              </Card.Body>
              <Card.Footer className=" d-flex justify-content-evenly">
                <Button variant="outline-primary">VIEW</Button>
                <Button variant="outline-success">EDIT</Button>
                <Button variant="outline-danger">DELETE</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Product;
