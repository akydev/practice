{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "./redux/store/store";
import { useEffect } from "react";
import { productRequest } from "./redux/slice/productSlice";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { IClothProduct } from "./redux/type/IClothProduct";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const productData = useSelector<AppState>(
    (state) => state.product.data
  ) as IClothProduct[];
  useEffect(() => {
    dispatch(productRequest());
  }, []);
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          flex: "wrap",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {productData.map((value) => {
          return (
            <Col>
              <Card style={{ width: "23rem", height: "auto" }}>
                <Carousel>
                  {value.images.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={image}
                        alt={`Product Image ${index + 1}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>{value.description}</Card.Text>
                  <Card.Text>{value.category.name}</Card.Text>
                  <Card.Text>{value.price}</Card.Text>
                  {/* <Card.Text>{value.creationAt}</Card.Text> */}

                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default App;
