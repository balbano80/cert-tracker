import React from 'react';
import { Container, Row, Col, Table, Input, Button, Fa, Card, CardBody, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import DatePickerMod from '../../components/DatePickerMod';
import API from '../../utils/API';

class FormEmployeePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'John Doe'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    API.getEmployee().then(function(res){
      console.log(res);
    }).catch(err => {
      console.log(err)
    })
    alert('Input value: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return(
      <Container className="mt-5">
        <h2 className="mb-5">Certificate Tracking</h2>
        <Row>
          <Col md="6">
            <Card>
              <CardBody>
                <form>             
                    <div className="form-group col-md-12 grey-text">
                      <label htmlFor="first-name">First Name</label>
                      <input value={this.state.first_name} onChange={this.handleChange} type="text" className="form-control" id="first-name" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-12 grey-text">
                      <label htmlFor="last-name">Last Name</label>
                      <input value={this.state.last_name} onChange={this.handleChange} type="text" className="form-control" id="last-name" placeholder="Last Name" />
                    </div>
                  <div className="form-group col-md-12 grey-text">
                    <label htmlFor="phone-number">Phone Number</label>
                    <input value={this.state.phone_number} onChange={this.handleChange} type="text" className="form-control" id="phone-nmber" placeholder="555 555 55555" />
                  </div>
                  <div className="form-group col-md-12 grey-text">
                    <label htmlFor="inputEmail4">Email</label>
                    <input value={this.state.email} onChange={this.handleChange} type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                  </div>
                  <br />
                  <hr />
                  <h4 className="mb-2 mt-2 grey-text">Certification dates</h4>
                  <p className="grey-text">Please enter the dates you obtained each certificate</p>
                  
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

                  <Button onClick={this.handleSubmit}>Submit</Button>
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
