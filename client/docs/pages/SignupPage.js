import React from 'react';
import API from "../../utils/API";
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      company: "",
      first_name: "",
      last_name: "",
      email: "",
      confirmEmail: "",
      password: ""
    }
    this.toggle = this.toggle.bind(this);
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  };

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
    if (!this.state.first_name || !this.state.last_name || !this.state.email || !this.state.password) {
      alert("Fill out your first name, last name, email and password please");
    } 
    else if (this.state.password.length < 6) {
      alert(`Choose a more secure password(at least 6 digits) ${this.state.name}`
      );
    }
    else if (this.state.email !== this.state.confirmEmail){
      alert("Passwords do not match")
    }
    else {
      API.createAdmin({
        company: this.state.company,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
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
        <h2 className="mb-5">Register</h2>
        <Row>
          <Col md="6">
            <Card>
              <CardBody>
                <form>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
                    <Input label="Enter the name of your Company" icon="user" group type="text" validate error="wrong" success="right"
                      value={this.state.company} name="company" onChange={this.handleInputChange} />
                    <Input label="Enter your first name" icon="user" group type="text" validate error="wrong" success="right"
                      value={this.state.first_name} name="first_name" onChange={this.handleInputChange} />
                    <Input label="Enter your last name" icon="user" group type="text" validate error="wrong" success="right"
                      value={this.state.last_name} name="last_name" onChange={this.handleInputChange} />
                    <Input label="Enter your email" icon="envelope" group type="email" validate error="wrong" success="right"
                      value={this.state.email} name="email" onChange={this.handleInputChange} />
                    <Input label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong" success="right"
                      value={this.state.confirmEmail} name="confirmEmail" onChange={this.handleInputChange} />
                    <Input label="Create password" icon="lock" group type="password" validate
                      value={this.state.password} name="password" onChange={this.handleInputChange} />
                  </div>
                  <div className="text-center py-4 mt-3">
                  <Button color="blue" type="submit" onClick={this.handleFormSubmit}>Register</Button>
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

export default SignupPage;
