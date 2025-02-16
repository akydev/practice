import { Card, Col, Container, Row } from "react-bootstrap";
// import { IconName } from "react-icons/fc";
import { FaEdit } from "react-icons/fa";

import { MdDeleteForever } from "react-icons/md";

const TodoList = () => {
  return (
    <Container className="py-4">
      {/* Header Section */}
      <Row className="mb-3">
        <Col>
          <Card
            className="shadow-sm"
            style={{
              borderRadius: "15px",
              // background: "linear-gradient(45deg, #00bcd4, #8e44ad)",
              background: "linear-gradient(45deg, #6a11cb, #2575fc)",
              // background: "linear-gradient(45deg, #8e2de2, #4a00e0)",
              // background: "linear-gradient(45deg, #a8ff78, #78ffd6)",
            }}
          >
            <Card.Body
              style={{
                fontSize: "28px",
                textAlign: "center",
                fontWeight: "600",
                textTransform: "uppercase",
                color: "#fff",
                padding: "15px 20px",
              }}
            >
              Todo Lists
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Main Content Section */}
      <Row className="justify-content-center">
        {/* Pending Column */}
        <Col sm={5} className="mb-3">
          <Card
            className="shadow-sm"
            style={{
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
              border: "1px solid #ddd",
            }}
          >
            <Card.Body
              style={{
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
            </Card.Body>
          </Card>
        </Col>

        {/* Completed Column */}
        <Col sm={5}>
          <Card
            className="shadow-sm"
            style={{
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
              border: "1px solid #ddd",
            }}
          >
            <Card.Body
              style={{
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
              Complete
            </Card.Body>
          </Card>

          <Card
            bg="light"
            text="dark"
            style={{
              borderRadius: "12px", // Slightly rounded corners for a smoother look
              width: "50%",
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
                  // color: "#e74c3c", // Red icon color
                  color: "#ffffff", // Red icon color
                }}
              />
            </Card.Header>

            <Card.Body
              style={{
                padding: "15px",
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>

            <Card.Footer
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "18px",
                padding: "12px",
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
          <Card
            bg="light"
            text="dark"
            style={{
              borderRadius: "12px", // Slightly rounded corners for a smoother look
              width: "50%",
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
                  // color: "#e74c3c", // Red icon color
                  color: "#ffffff", // Red icon color
                }}
              />
            </Card.Header>

            <Card.Body
              style={{
                padding: "15px",
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>

            <Card.Footer
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "18px",
                padding: "12px",
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
          <Card
            bg="light"
            text="dark"
            style={{
              borderRadius: "12px", // Slightly rounded corners for a smoother look
              width: "50%",
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
                  // color: "#e74c3c", // Red icon color
                  color: "#ffffff", // Red icon color
                }}
              />
            </Card.Header>

            <Card.Body
              style={{
                padding: "15px",
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>

            <Card.Footer
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "18px",
                padding: "12px",
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
        </Col>
      </Row>
    </Container>
  );
};

export default TodoList;
