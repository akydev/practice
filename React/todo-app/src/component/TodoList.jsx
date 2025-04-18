import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editId, setEditId] = useState(null); // State to hold the id of the todo being edited

  const handleChange = (e) => {
    setTodo(e.target.value); // Since todo is just a string
  };

  const handleEdit = (id) => {
    // Find the todo with the given id
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setTodo(todoToEdit.title);
      setEditId(id); // Set the edit mode
    }
  }; // Implement edit functionality here

  const handleDelete = (id) => {
    // Filter out the todo with the given id
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    // If the deleted todo is the one being edited, reset the form
    if (editId === id) {
      setTodo("");
      setEditId(null);
    }
  }; // Implement delete functionality here

  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Check if the todo is not empty
    if (todo.trim() === "") {
      alert("Please enter a todo item.");
      return;
    }
    if (editId !== null) {
      // Update existing todo
      const updatedTodos = todos.map((item) =>
        item.id === editId ? { ...item, title: todo.trim() } : item
      );
      setTodos(updatedTodos);
      setEditId(null);
    } else {
      // Add new todo
      const newId =
        todos.length > 0 ? Math.max(...todos.map((item) => item.id)) + 1 : 1;
      const newTodo = {
        id: newId,
        title: todo.trim(),
      };
      setTodos([...todos, newTodo]);
    }

    setTodo(""); // Clear input field after submit
  };

  return (
    <Container>
      <h1 className="text-center">Todo Application</h1>

      {/* todo add */}
      <Row>
        <Col xs={4} md={3}></Col>
        <Col xs={8} md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="todoForm.ControlInput1">
              {/* <Form.Label>Todo</Form.Label> */}

              <Form.Control
                name="title"
                type="text"
                placeholder="Enter your Todo here..."
                value={todo} // <-- this line is important!
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Col>
        <Col xs={4} md={3}></Col>
      </Row>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center">
                No todos available
              </td>
            </tr>
          ) : (
            todos.map((item, index) => (
              <tr key={index} className="text-center">
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td className="d-flex gap-2 align-items-center justify-content-center">
                  <Button variant="primary" onClick={() => handleEdit(item.id)}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default TodoList;
