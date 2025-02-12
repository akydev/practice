{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import { ILogin } from "./redux/type/ILogin";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "./redux/store/store";
import { loginReq } from "./redux/slice/loginSlice";

const initialValues: ILogin = {
  email: "",
  password: "",
};

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const userData = useSelector<AppState>((state) => state.login.user);
  const error = useSelector<AppState>((state) => state.login.error);
  console.log(userData);
  console.log(error);

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required!"),
    password: Yup.string()
      .min(2, "Atleast 6 character required")
      .required("Password is required!"),
  });

  const { values, handleChange, handleBlur, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginReq(values));
    },
  });

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter your email!"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Col>
          <span>{errors.email}</span>
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
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Col>
          <span>{errors.password}</span>
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
}

export default App;
