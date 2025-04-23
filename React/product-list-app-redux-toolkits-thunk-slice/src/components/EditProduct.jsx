import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editProductThunk } from "../thunk/productThunk";

const EditProduct = () => {
  const dispatch = useDispatch();
  const { product, loading, error, success } = useSelector(
    (state) => state.editProduct
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setProduct({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProductThunk(id, product));
    alert("Product Edit successfully!");
  };

  return (
    <Container>
      <h1 className="text-center pt-4"> Edit Product Details</h1>
      <Row
        xs={1}
        md={3}
        className="align-items-center justify-content-center pt-5"
      >
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="productForm.ControlInput1">
              <Form.Label>Product Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                value={product.title}
                placeholder="Add product title!"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="productForm.ControlInput2">
              <Form.Label>Category</Form.Label>
              <Form.Control
                name="category"
                type="text"
                value={product.category}
                placeholder="Enter product category!"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProduct;
