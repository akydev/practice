import React, { useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "./redux/store/store";
import { registerRequest, registerUpdate } from "./redux/slice/registerSlice";
import { IRegister } from "./redux/type/IRegister";

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, data, user, error } = useSelector(
    (state: AppState) => state.register
  );
  const [formErrors, setFormErrors] = useState<IRegister>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const validation = () => {
    const newError: IRegister = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    if (!data.firstName) {
      newError.firstName = "Enter your first name!";
    }

    if (!data.lastName) {
      newError.lastName = "Enter your last name!";
    }

    if (!data.email) {
      newError.email = "Enter your email!";
    }

    if (!data.password) {
      newError.password = "Enter your password!";
    }
    setFormErrors(newError);
    return Object.values(newError).every((error) => error === "");
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(registerUpdate({ name, value }));
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (loading) return;
    if (validation()) {
      dispatch(registerRequest(data));
    }
  };
  // console.log(data);
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Card
          style={{
            width: "32rem",
            padding: "56px",
            border: "1px solid grey",
            borderRadius: "25px",
          }}
        >
          <Card.Body
            style={{
              fontSize: "44px",
              textAlign: "center",
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "#30368b",
            }}
          >
            Register
          </Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontWeight: 500, color: "#30368b" }}>
                First Name
              </Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
                isInvalid={!!formErrors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontWeight: 500, color: "#30368b" }}>
                Last Name
              </Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                isInvalid={!!formErrors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontWeight: 500, color: "#30368b" }}>
                Email
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter Email"
                isInvalid={!!formErrors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontWeight: 500, color: "#30368b" }}>
                Password
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Enter Password"
                isInvalid={!!formErrors.password}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit" variant="dark" style={{ width: "100%" }}>
              Submit
            </Button>
          </Form>
        </Card>
      </Row>
    </Container>
  );
};

export default Register;
