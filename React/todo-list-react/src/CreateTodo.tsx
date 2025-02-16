import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const CreateTodo = () => {
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          //   alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Col></Col>
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
                Fisrtname
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  name="firstName"
                  type="text"
                  placeholder="Enter your firstname!"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="fromPlaintextEmail"
            >
              <Form.Label column sm="2">
                Fisrtname
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  name="firstName"
                  type="text"
                  placeholder="Enter your firstname!"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="fromPlaintextEmail"
            >
              <Form.Label column sm="2">
                Fisrtname
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  name="firstName"
                  type="text"
                  placeholder="Enter your firstname!"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="fromPlaintextEmail"
            >
              <Form.Label column sm="2">
                Fisrtname
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  name="firstName"
                  type="text"
                  placeholder="Enter your firstname!"
                />
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
              Submit
            </Button>
          </Form>
        </Card>
      </Row>
    </Container>
  );
};

export default CreateTodo;
