import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { ITodo } from "./type/ITodo";
import axios from "axios";

interface ITodoError {
  todo: string;
  userId: string;
}

const CreateTodo = () => {
  const [formValues, setFormValues] = useState<ITodo>({
    todo: "",
    completed: false,
    userId: 1,
  });
  const [formError, setFormError] = useState<ITodoError>({
    todo: "",
    userId: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value, // Ensure "completed" gets boolean value
    });
    setFormError({ ...formError, [name]: "" });
  };
  console.log(formError);
  const validation = () => {
    const obj: ITodoError = { todo: "", userId: "" };
    if (!formValues.todo) {
      obj.todo = "Place enter your task...";
    }
    if (!formValues.userId) {
      obj.userId = "Place enter your Id.";
    }
    setFormError(obj);
    return Object.values(obj).every((error) => error === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validation()) {
      try {
        const res = await axios.post(
          "https://dummyjson.com/todos/add",
          formValues
        );
        setFormValues({ todo: "", userId: 1, completed: false }); // Example reset, modify as needed
        console.log("Form submitted successfully", res.data);
        return res.data;
      } catch (error: any) {
        return error.response.data;
      }
    }
  };
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
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="todo" as={Row} className="mb-3">
              <Form.Label column sm="2">
                Todo
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  name="todo"
                  type="text"
                  placeholder="Add new task!"
                  value={formValues.todo}
                  onChange={handleChange}
                  isInvalid={!!formError.todo} // Display invalid state if there's an error
                />
                <Form.Control.Feedback type="invalid">
                  {formError.todo} {/* Show the error message here */}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group controlId="userId" as={Row} className="mb-3">
              <Form.Label column sm="2">
                UserId
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  name="userId"
                  type="number"
                  placeholder="Enter your UserId!"
                  value={formValues.userId}
                  onChange={handleChange}
                  isInvalid={!!formError.userId}
                />
                <Form.Control.Feedback type="invalid">
                  {formError.userId}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Status
              </Form.Label>
              <Col sm="10">
                <Form.Check
                  type="switch"
                  checked={formValues.completed}
                  onChange={handleChange}
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
              Add
            </Button>
          </Form>
        </Card>
      </Row>
    </Container>
  );
};

export default CreateTodo;
