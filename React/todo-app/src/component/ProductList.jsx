import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { initialState, productReducer } from "../reducer/productReducer";

const ProductList = () => {
  //   const [products, setProducts] = useState([]);

  const [state, dispatch] = useReducer(productReducer, initialState);
  const { loading, error, products } = state;

  const fetchProducts = async () => {
    dispatch({ type: "ProductRequest" });
    try {
      const response = await axios.get("https://dummyjson.com/products");
      dispatch({ type: "ProductSuccess", payload: response.data.products });
    } catch (error) {
      dispatch({ type: "ProductError", payload: error.message });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <h1 className="text-center">Product Lists</h1>
      <Row xs={1} md={3} className="g-4">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          products.map((product) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={product.thumbnail} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default ProductList;
