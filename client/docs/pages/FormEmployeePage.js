import React from 'react';
import { Container, Row, Col, Table, Input, Button, Fa, Card, CardBody, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import DatePickerMod from '../../components/DatePickerMod';
import API from '../../utils/API';

class FormEmployeePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      first_name: "",
      last_name: "",
      phone_number: "",
      email: ""
    
    }
    this.toggle = this.toggle.bind(this);
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  };

    // Handles updating component state when the user types into the input field
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
      if (!this.state.first_name || !this.state.last_name || !this.state.phone_number || !this.state.email ) {
        alert("Fill out your first name, last name, email and phone number please");

      }

      else {
        API.saveEmployee({
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          phone_number: this.state.phone_number,
          email: this.state.email
          
      })
        //.then(direct to dashboard)
        //.catch(error)
      }
    };

  render() {
    return(
      <Container className="mt-5">
        <h2 className="mb-5">Certificate Tracking</h2>
        <Row>
          <Col md="6">
            <Card>
              <CardBody>
                <form>
                  <p className="h4 text-center grey-text py-4">Employee Form</p>
                  <div className="grey-text">
                    <Input label="Enter your first name" icon="user" group type="text" validate error="wrong" success="right"
                      value={this.state.first_name} name="first_name" onChange={this.handleInputChange} />
                    <Input label="Enter your last name" icon="user" group type="text" validate error="wrong" success="right"
                      value={this.state.last_name} name="last_name" onChange={this.handleInputChange} />
                    <Input label="Enter your phone number" icon="phone" group type="text" validate error="wrong" success="right"
                      value={this.state.phone_number} name="phone_number" onChange={this.handleInputChange} />
                    <Input label="Enter your email" icon="envelope" group type="email" validate error="wrong" success="right"
                      value={this.state.email} name="email" onChange={this.handleInputChange} />
                  </div>
                    <Row>
                      <Col>
                      <p>Cert Name</p>
                      </Col>
                      <Col>
                      <p>Cert Date</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <p className="grey-text">CA OSHA Fire Saftey</p>
                      </Col>
                      <Col>
                      <DatePickerMod/>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <p className="grey-text">CA OSHA Ladder Saftey</p>
                      </Col>
                      <Col>
                      <DatePickerMod/>
                      </Col>
                    </Row>

                  <div className="text-center py-4 mt-3">
                    <Button color="blue" type="submit" onClick={this.handleFormSubmit}>Submit</Button>
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
export default FormEmployeePage;
