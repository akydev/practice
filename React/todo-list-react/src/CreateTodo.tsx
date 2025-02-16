import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const CreateTodo = () => {
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card
          style={{
            width: "56rem",
            padding: "12px 26px",
            border: "1px solid grey",
            borderRadius: "25px",
          }}
        >
          <Card.Body
            style={{
              fontSize: "32px",
              textAlign: "center",
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "#30368b",
              paddingTop: "0px",
            }}
          >
            Create Todo-List
          </Card.Body>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="fromPlaintextEmail"
            >
              <Form.Label column sm="2">
                Todo
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  name="toDO"
                  type="text"
                  placeholder="Add new task!"
                />
              </Col>
            </Form.Group>
            {/* <Form.Group
              as={Row}
              className="mb-3"
              controlId="fromPlaintextEmail"
            >
              <Form.Label column sm="2">
                UserId
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  name="toDO"
                  type="text"
                  placeholder="Enter your UserId!"
                />
              </Col>
            </Form.Group> */}
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="fromPlaintextEmail"
            >
              <Form.Label column sm="2">
                Status
              </Form.Label>
              <Col sm="10">
                <Form.Check type="switch" />
              </Col>
            </Form.Group>
            <Button
              type="submit"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "18rem",
                margin: "0 auto", // This helps center the button
              }}
            >
              Add
            </Button>
          </Form>
        </Card>
      </Row>
    </Container>
  );
};

export default CreateTodo;
