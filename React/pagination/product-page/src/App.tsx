import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { IProduct } from "./interface/product";
import { Button, Card, Col, Container, Pagination, Row } from "react-bootstrap";

function App() {
  const [data, setData] = useState<IProduct[]>([]);
  const [page, setPage] = useState<number>(1);

  const fetchData = async () => {
    try {
      const apiData = await axios.get("https://fakestoreapi.com/products");
      const res = apiData.data;
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / 4);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1) pageNumber = 1;
    if (pageNumber > totalPages) pageNumber = totalPages;
    setPage(pageNumber);
  };

  return (
    <>
      <Container>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "18px",
          }}
        >
          {data.slice(page * 4 - 4, page * 4).map((value, index) => {
            return (
              <Card key={value.id} style={{ width: "18rem", height: "auto" }}>
                <Card.Img variant="top" src={value.image} />
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>{value.description}</Card.Text>
                  <Card.Text>{value.category}</Card.Text>
                  <Card.Text>{value.price}</Card.Text>
                  <Card.Text>{value.rating.count}</Card.Text>
                  <Card.Text>{value.rating.rate}</Card.Text>
                  <Button variant="primary">View More</Button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "40px",
          }}
        >
          {/* <Button
            style={{
              width: "120px",
              backgroundColor: "blue",
              color: "white",
            }}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </Button>

          {[...Array(data.length / 4)].map((_, i) => {
            return (
              <Col>
                {" "}
                <button
                  key={i}
                  className="mx-1 px-2 py-1 border rounded-md"
                  style={{
                    width: "120px",
                    backgroundColor: "blue",
                    color: "white",
                  }}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </button>
              </Col>
            );
          })}
          <Button
            style={{
              width: "120px",
              backgroundColor: "blue",
              color: "white",
            }}
            onClick={() => setPage(page + 1)}
          >
            Prev
          </Button> */}
          <Row
            style={{
              // display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Pagination>
              <Pagination.Prev
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
              /> */}
            {[...Array(data.length / 4)].map((v, i) => {
              return (
                <Pagination.Item onClick={() => handlePageChange(i + 1)}>
                  {i + 1}
                </Pagination.Item>
              );
            })}
            {/* <Pagination.Next
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
              />
            </Pagination> */}
          </Row>
        </Row>
      </Container>
    </>
  );
}

export default App;
