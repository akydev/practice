import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SignUp = () => {
  return (
    <Container>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            FirstName
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="firstName"
              type="text"
              placeholder="Enter your firstname!"
            />
          </Col>
          <span>{"Error"}</span>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            LastName
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="lastName"
              type="text"
              placeholder="Enter your lastname!"
            />
          </Col>
          <span>{"Error"}</span>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter your email!"
            />
          </Col>
          <span>{"Error"}</span>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter your password!"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Confirm Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="cnfPassword"
              type="password"
              placeholder="Enter your confirm password!"
            />
          </Col>
        </Form.Group>
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};

export default SignUp;
