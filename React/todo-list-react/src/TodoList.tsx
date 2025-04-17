import { useEffect, useState } from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
// import { IconName } from "react-icons/fc";
import { FaEdit } from "react-icons/fa";

import { MdDeleteForever } from "react-icons/md";
import { ITodoList } from "./type/ITodoList";
import axios from "axios";

const TodoList = () => {
  const [todo, setTodo] = useState<ITodoList[]>([]);
  const fetchData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/todos");
      setTodo(res.data.todos);
    } catch (error: any) {
      return error.response.data;
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const pendingTodo = todo?.filter((v) => v.completed === false);

  const completedTodo = todo?.filter((v) => v.completed === true);

  return (
    <Container className="py-4">
      {/* Header Section */}
      <Badge
        style={{
          width: "100%",

          fontSize: "24px",
          textAlign: "center",
          fontWeight: "600",
          textTransform: "uppercase",
          color: "#ffffff", // White text for contrast
          background: "linear-gradient(45deg, #6a11cb, #2575fc)",

          padding: "18px 15px",
          marginBottom: "12px",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Deeper shadow for more focus
          backdropFilter: "blur(8px)", // Frosted glass effect for a clean look
        }}
      >
        Todo Lists
      </Badge>
      {/* Main Content Section */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        {/* Pending Column */}

        <Col>
          <Badge
            style={{
              width: "100%",
              fontSize: "24px",
              textAlign: "center",
              fontWeight: "600",
              textTransform: "uppercase",
              color: "#ffffff", // White text for contrast
              background:
                "linear-gradient(45deg, rgba(106, 17, 203, 0.8), rgba(37, 117, 252, 0.8))", // Gradient overlay with opacity
              padding: "12px 15px",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Deeper shadow for more focus
              backdropFilter: "blur(8px)", // Frosted glass effect for a clean look
            }}
          >
            Pending
          </Badge>
          <Row style={{ justifyContent: "space-evenly" }}>
            {pendingTodo.map((value) => (
              <Card
                key={value.id}
                bg="light"
                text="dark"
                style={{
                  height: "auto",
                  borderRadius: "12px", // Slightly rounded corners for a smoother look
                  paddingRight: "0px",
                  paddingLeft: "0px",
                  width: "46%",
                  marginTop: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
                  border: "1px solid #e2e2e2", // Subtle border to frame the card
                }}
                className="mb-3"
              >
                <Card.Header
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "600",
                    fontSize: "20px",
                    backgroundColor: "#6c5ce7", // Soft Purple Header
                    color: "#fff", // White text for contrast
                    borderTopLeftRadius: "12px", // Rounded corners for the header
                    borderTopRightRadius: "12px", // Rounded corners for the header
                  }}
                >
                  Todo Card
                  <MdDeleteForever
                    size="24px"
                    style={{
                      cursor: "pointer",
                      color: "#ffffff", // Red icon color
                    }}
                  />
                </Card.Header>

                <Card.Body
                  style={{
                    backgroundColor: "#f7f7f7", // Light gray background for the body
                  }}
                >
                  <Card.Text
                    style={{
                      fontSize: "14px",
                      color: "#555", // Dark gray text for better readability
                      lineHeight: "1.5",
                    }}
                  >
                    {value.todo}
                  </Card.Text>
                </Card.Body>

                <Card.Footer
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "18px",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                    // textTransform: "uppercase",
                    color: "gray",
                    backgroundColor: "#f1f1f1", // Light background for footer
                    borderBottomLeftRadius: "12px", // Rounded corners for footer
                    borderBottomRightRadius: "12px", // Rounded corners for footer
                  }}
                >
                  Edit
                  <FaEdit
                    size="24px"
                    style={{
                      cursor: "pointer",
                      color: "#6c5ce7", // Purple icon color
                    }}
                  />
                </Card.Footer>
              </Card>
            ))}
          </Row>
        </Col>

        {/* Completed Column */}
        <Col>
          <Badge
            style={{
              width: "100%",
              fontSize: "24px",
              textAlign: "center",
              fontWeight: "600",
              textTransform: "uppercase",
              color: "#ffffff", // White text for contrast
              background:
                "linear-gradient(45deg, rgba(106, 17, 203, 0.8), rgba(37, 117, 252, 0.8))", // Gradient overlay with opacity
              padding: "12px 15px",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Deeper shadow for more focus
              backdropFilter: "blur(8px)", // Frosted glass effect for a clean look
            }}
          >
            Completed
          </Badge>
          <Row style={{ justifyContent: "space-evenly" }}>
            {completedTodo.map((value) => (
              <Card
                key={value.id}
                bg="light"
                text="dark"
                style={{
                  height: "auto",
                  borderRadius: "12px", // Slightly rounded corners for a smoother look
                  paddingRight: "0px",
                  paddingLeft: "0px",
                  width: "46%",
                  marginTop: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
                  border: "1px solid #e2e2e2", // Subtle border to frame the card
                }}
                className="mb-3"
              >
                <Card.Header
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "600",
                    fontSize: "20px",
                    backgroundColor: "#6c5ce7", // Soft Purple Header
                    color: "#fff", // White text for contrast
                    borderTopLeftRadius: "12px", // Rounded corners for the header
                    borderTopRightRadius: "12px", // Rounded corners for the header
                  }}
                >
                  Todo Card
                  <MdDeleteForever
                    size="24px"
                    style={{
                      cursor: "pointer",
                      color: "#ffffff", // Red icon color
                    }}
                  />
                </Card.Header>

                <Card.Body
                  style={{
                    backgroundColor: "#f7f7f7", // Light gray background for the body
                  }}
                >
                  <Card.Text
                    style={{
                      fontSize: "14px",
                      color: "#555", // Dark gray text for better readability
                      lineHeight: "1.5",
                    }}
                  >
                    {value.todo}
                  </Card.Text>
                </Card.Body>

                <Card.Footer
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "18px",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                    // textTransform: "uppercase",
                    color: "gray",
                    backgroundColor: "#f1f1f1", // Light background for footer
                    borderBottomLeftRadius: "12px", // Rounded corners for footer
                    borderBottomRightRadius: "12px", // Rounded corners for footer
                  }}
                >
                  Edit
                  <FaEdit
                    size="24px"
                    style={{
                      cursor: "pointer",
                      color: "#6c5ce7", // Purple icon color
                    }}
                  />
                </Card.Footer>
              </Card>
            ))}
          </Row>
        </Col>
      </section>
      <Row></Row>
    </Container>
  );
};

export default TodoList;
