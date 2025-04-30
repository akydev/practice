import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchViewProductRequest,
  updateProductChange,
  updateProductImage,
  updateProductRequest,
} from "../redux/slice/productSlice";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [category, setCategory] = useState([]);
  const [image, setImage] = useState("");
  const { selectedProduct } = useSelector((state) => state.product);
  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/categories"
      );
      setCategory(response.data);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Product category is not found.";
      throw new Error(errorMessage);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let parsedValue = value;
    switch (name) {
      case "price":
        parsedValue = Number(value);
        break;
      case "category":
        const selectedCatergory = category.find(
          (cat) => cat.id === Number(value)
        );
        if (selectedCatergory) {
          parsedValue = selectedCatergory;
        }
    }
    dispatch(updateProductChange({ name, value: parsedValue }));
  };

  const handleImageKeyDown = (e) => {
    if (e.key === "Enter" && image.trim()) {
      e.preventDefault();
      dispatch(updateProductImage(image.trim()));
      setImage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProductRequest({ id, product: selectedProduct }));
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchViewProductRequest(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <Container>
      <h1 className="text-center py-4 text-uppercase">Update Product</h1>
      <Card className="w-50 mx-auto">
        {selectedProduct && (
          <Form onSubmit={handleSubmit}>
            <Card.Body>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextTitle"
              >
                <Form.Label column sm="2">
                  Title
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    name="title"
                    value={selectedProduct.title}
                    type="text"
                    placeholder="Enter the product title."
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPrice"
              >
                <Form.Label column sm="2">
                  Price
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    name="price"
                    value={selectedProduct.price}
                    type="number"
                    placeholder="Enter the product price."
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextDescription"
              >
                <Form.Label column sm="2">
                  Description
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    name="description"
                    value={selectedProduct.description}
                    type="text"
                    placeholder="Enter the product description."
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextCategory"
              >
                <Form.Label column sm="2">
                  Category
                </Form.Label>
                <Col sm="10">
                  <Form.Select
                    aria-label="Default select category"
                    name="category"
                    value={selectedProduct.category?.id}
                    onChange={handleChange}
                  >
                    <option>Open this select menu</option>

                    {category.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
              </Form.Group>

              <Row xs={1} md={2} lg={3} xl={4} className="g-4 py-5">
                {selectedProduct.images.map((img, index) => (
                  <Card.Img key={index} src={img} alt="image" />
                ))}
              </Row>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextImage"
              >
                <Form.Label column sm="2">
                  Image URL
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    name="image"
                    value={image}
                    type="text"
                    placeholder="Enter the product  image URL and press enter."
                    onChange={(e) => setImage(e.target.value)}
                    onKeyDown={handleImageKeyDown}
                  />
                </Col>
              </Form.Group>
            </Card.Body>
            <Card.Footer className=" d-flex justify-content-evenly">
              <Button className="w-50" variant="outline-primary" type="submit">
                Submit
              </Button>
            </Card.Footer>
          </Form>
        )}
      </Card>
    </Container>
  );
};

export default UpdateProduct;
