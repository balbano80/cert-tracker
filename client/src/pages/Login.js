import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Login = () => (
  <div>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To Cert Tracker!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>Login</p>
          <p>on this</p>
          <p>page</p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Login;
