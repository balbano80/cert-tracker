import React from 'react';
import API from "../../utils/API";
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, Modal, ModalBody, ModalHeader, ModalFooter, CardImage } from 'mdbreact';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: "",
      password: ""
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
      alert("Please input your email and password");
    }
    else {
      API.signIn({
        email: this.state.email,
        password: this.state.password
      })
      //.then(direct to dashboard)
      //.catch(error)
    }
  };

  render() {
    return (
      <Container className="mt-5">
        <h2 className="mb-5 text-center">Login page</h2>
        <Row>
        <Col md="6" className="mx-auto float-none white z-depth-1 py-2 px-2">
            <CardImage src="https://www.glensfallshospital.org/application/files/2914/7550/5313/Glens_Falls_Hospital_Employee_Login.jpg" 
                       alt="Card image cap"/>
          </Col>
          <Col md="6">
            <Card className = "mt-4">
              <CardBody>
                <form>
                  <p className="h4 text-center py-4">Login here</p>
                  <div className="grey-text">
                    <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"
                      value={this.state.email} name="email" onChange={this.handleInputChange} />
                    <Input label="Your password" icon="lock" group type="password" validate
                      value={this.state.password} name="password" onChange={this.handleInputChange} />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <Button color="blue" type="submit" onClick={this.handleFormSubmit}>Login</Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default LoginPage;
