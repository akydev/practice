import {
  Button,
  Card,
  Container,
  Pagination,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "./redux/store/store";
import { useEffect, useState } from "react";
import { UsersRequest } from "./redux/slice/userListSlice";

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState<number>(1);
  const { loading, data, error } = useSelector(
    (state: AppState) => state.users
  );
  useEffect(() => {
    dispatch(UsersRequest());
  }, []);

  const totalPage = Math.ceil(data.length / 5); // pagenation logic
  const handlePageChange = (newPage: number) => {
    if (newPage < 1) newPage = 1;
    if (newPage > totalPage) newPage = totalPage;
    setPage(newPage);
  };
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
            Users List
          </Card.Body>

          <Table striped bordered hover>
            <thead style={{ textAlign: "center" }}>
              <tr>
                <th style={{ fontWeight: 500, color: "#30368b" }}>#</th>
                <th style={{ fontWeight: 500, color: "#30368b" }}>
                  First Name
                </th>
                <th style={{ fontWeight: 500, color: "#30368b" }}>Last Name</th>
                <th style={{ fontWeight: 500, color: "#30368b" }}>Email</th>
                <th style={{ fontWeight: 500, color: "#30368b" }}>Password</th>
                <th style={{ fontWeight: 500, color: "#30368b" }}>Actions</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }}>
              {loading ? (
                <tr>
                  <td colSpan={6}>
                    <Spinner animation="border" size="sm" />
                  </td>
                </tr>
              ) : (
                data.slice(page * 5 - 5, page * 5).map((value) => (
                  <tr key={value.id}>
                    <td>{value.id}</td>
                    <td>{value.firstName}</td>
                    <td>{value.lastName}</td>
                    <td>{value.email}</td>
                    <td>
                      {value.password.charAt(-1) +
                        "*".repeat(value.password.length - 1)}
                    </td>
                    <td
                      style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Button variant="primary">Edit</Button>
                      <Button variant="danger">Delete</Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
          <Pagination
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="primary"
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              Pre
            </Button>
            <span
              style={{ fontWeight: "bold", color: "blue", padding: "16px" }}
            >
              {page}
            </span>
            <Button
              variant="primary"
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPage}
            >
              Next
            </Button>
          </Pagination>
        </Card>
      </Row>
    </Container>
  );
};

export default UserList;
