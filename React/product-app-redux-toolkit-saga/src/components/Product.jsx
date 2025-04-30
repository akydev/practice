import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Modal,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductRequest,
  fetchProductRequest,
} from "../redux/slice/productSlice";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, products, error } = useSelector((state) => state.product);
  const [openModal, SetOpenModal] = useState(false);
  const [productId, setProductId] = useState(null);

  const handleView = (id) => {
    navigate(`/product/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/update-product/${id}`);
  };

  useEffect(() => {
    dispatch(fetchProductRequest());
  }, [dispatch]);

  const handleDeleteOpen = (id) => {
    if (id) {
      SetOpenModal(true);
      setProductId(id);
    }
  };

  const handleDelete = () => {
    if (productId) {
      dispatch(deleteProductRequest(productId));
      setTimeout(() => {
        SetOpenModal(false);
        dispatch(fetchProductRequest());
      }, 1000);
    }
  };

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
                <Button
                  variant="outline-primary"
                  onClick={() => handleView(val.id)}
                >
                  VIEW
                </Button>
                <Button
                  variant="outline-success"
                  onClick={() => handleEdit(val.id)}
                >
                  EDIT
                </Button>
                <Button
                  variant="outline-danger"
                  onClick={() => handleDeleteOpen(val.id)}
                >
                  DELETE
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Delete Modal For Product */}
      <Modal
        show={openModal}
        onHide={() => SetOpenModal(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure Delete This Product.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => SetOpenModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Product;
