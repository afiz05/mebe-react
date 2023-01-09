import { useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Image,
} from "react-bootstrap";
import axios from "axios";
import { PersonLock } from "react-bootstrap-icons";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState({});

  const storePost = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3500/api/posts/store", {
        username: username,
        password: password,
      })
      .then(function (response) {
        //redirect
        window.location.href = "http://localhost:3000/Posts";
      })
      .catch(function (error) {
        setValidation(error.response.data);
      });
  };

  return (
    <Container className="mt-3">
      <Row className="body-content">
        <Col md={8}>
          <Card className="border-0 rounded shadow-sm">
            <Card.Body></Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 rounded shadow-sm">
            <Card.Body>
              {validation.errors && (
                <Alert variant="danger">
                  <ul className="mt-0 mb-0">
                    {validation.errors.map((error, index) => (
                      <li key={index}>{`${error.param} : ${error.msg}`}</li>
                    ))}
                  </ul>
                </Alert>
              )}

              <Form>
                <Row md={12} className="text-center mb-3">
                  <Col>
                    <PersonLock className="bg-danger rounded" size={56} />
                  </Col>
                </Row>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Masukkan User" />
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Masukkan Password"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  className="btn btn-sm mt-3"
                  type="submit"
                >
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
