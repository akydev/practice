import { useState } from "react";
import { IReg } from "./interface/registration";
import axios from "axios";
import { Button, Col, Form, Row } from "react-bootstrap";

const initailValues: IReg = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "", // Corrected typo
};

const Registration = () => {
  const [regData, setRegData] = useState(initailValues);
  const [error, setError] = useState(initailValues);

  const validateData = () => {
    const newErrors: IReg = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "", // Corrected typo
    };

    if (!regData.firstName) {
      newErrors.firstName = "Please enter your firstname!";
    }
    if (!regData.lastName) {
      newErrors.lastName = "Please enter your lastname!";
    }
    if (!regData.email) {
      newErrors.email = "Please enter your email!";
    }
    if (!regData.password) {
      newErrors.password = "Please enter your password!";
    }
    if (!regData.confirmPassword) {
      newErrors.confirmPassword = "Please enter your confirm Password!";
    }
    if (regData.password !== regData.confirmPassword) {
      newErrors.confirmPassword = "Password does not match!";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevents the default action (navigation)
    if (!validateData()) {
      console.log("❌ Validation failed:", error);
      return;
    }

    // Reset errors after validation passes
    setError(initailValues);

    console.log("✅ Validation passed, proceeding with API request...");

    try {
      console.log(regData);
      const res = await axios.post("http://localhost:3001/api/user", regData);
      console.log("Data submitted successfully:", res.data);
      // Handle response (e.g., show success message)
    } catch (error) {
      console.error("Error occurred while submitting data:", error);
      // Handle error response (e.g., show error message)
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegData({ ...regData, [name]: value });
    setError({ ...error, [name]: "" }); // Reset error when field changes
  };

  return (
    <div>
      <h1>Registration</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formPlaintextFirstName"
        >
          <Form.Label column sm="2">
            Firstname
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="firstName"
              placeholder="Enter your firstname!"
              value={regData.firstName}
              onChange={handleChange}
            />
            {error.firstName && (
              <span className="text-danger">{error.firstName}</span>
            )}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextLastName">
          <Form.Label column sm="2">
            Lastname
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Enter your lastname!"
              onChange={handleChange}
              value={regData.lastName}
            />
            {error.lastName && (
              <span className="text-danger">{error.lastName}</span>
            )}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email!"
              onChange={handleChange}
              value={regData.email}
            />
            {error.email && <span className="text-danger">{error.email}</span>}
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
              onChange={handleChange}
              value={regData.password}
            />
            {error.password && (
              <span className="text-danger">{error.password}</span>
            )}
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formPlaintextConfirmPassword"
        >
          <Form.Label column sm="2">
            Confirm Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              name="confirmPassword" // Corrected name
              placeholder="Confirm Password"
              onChange={handleChange}
              value={regData.confirmPassword} // Corrected name
            />
            {error.confirmPassword && (
              <span className="text-danger">{error.confirmPassword}</span>
            )}
          </Col>
        </Form.Group>

        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
};

export default Registration;
