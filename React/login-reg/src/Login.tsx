import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const Login = () => {
  const [login, setLogin] = useState();
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email!"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Col>
      </Form.Group>
      <Button type="submit">Register</Button>
    </Form>
  );
};

export default Login;
