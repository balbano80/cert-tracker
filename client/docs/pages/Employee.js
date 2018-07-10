import React from 'react';
import { Container, Row, Col, Input, Email, FormBtn, Button, Fa, Card, CardBody } from 'mdbreact';
import DatePickerMod from '../../components/DatePickerMod';
import API from '../../utils/API';

class Employee extends React.Component {
    // Set state
    state = {
        certArray: [],
        employees: [],
        first_name: "",
        last_name: "",
        phone_number: "",
        email: ""
    };

    componentDidMount() {
        API.getCertificates().then(res => {
            const certArr = []
            for (let i = 0; i < res.data.length; i++) {
                certArr.push(res.data[i]);
            }
            this.setState({ certArray: certArr });
            console.log("Certificates", this.state.certArray);
        })
    }

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, use the API.save Employees method to save the Employees data
    // Then reload Employees from the database
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.first_name && this.state.last_name && this.state.phone_number && this.state.email) {
            API.saveEmployee({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                phone_number: this.state.phone_number,
                email: this.state.email
            })
                .then(res => this.loadEmployee())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container className="mt-5">
                <h2 className="mb-5">Certificate Tracking</h2>
                <Row>
                    <Col md="6">
                        <Card>
                            <CardBody>
                                <form>
                                    <Input className="form-group col-md-12 grey-text"
                                        value={this.state.first_name}
                                        onChange={this.handleInputChange}
                                        name="first_name"
                                        placeholder="First Name (required)"
                                    />
                                    <Input className="form-group col-md-12 grey-text"
                                        value={this.state.last_name}
                                        onChange={this.handleInputChange}
                                        name="last_name"
                                        placeholder="Last name (required)"
                                    />
                                    <Input className="form-group col-md-12 grey-text"
                                        value={this.state.phone_number}
                                        onChange={this.handleInputChange}
                                        name="phone_number"
                                        placeholder="Phone Number (required)"
                                    />
                                    <Input className="form-group col-md-12 grey-text"
                                        value={this.state.phone_number}
                                        onChange={this.handleInputChange}
                                        name="email"
                                        placeholder="Email (required)"
                                    />
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
                                    {this.state.certArray.length > 0 &&
                                        this.state.certArray.map((certObj) => {
                                            return (
                                                <Row>
                                                    <Col>
                                                        <p className="grey-text">{certObj.name}</p>
                                                    </Col>
                                                    <Col>
                                                        <DatePickerMod />
                                                    </Col>
                                                </Row>
                                            )
                                        }
                                        )}
                                    {/* <Row>
                                        <Col>
                                            <p className="grey-text">CA OSHA Fire Saftey</p>
                                        </Col>
                                        <Col>
                                            <DatePickerMod />
                                        </Col>
                                    </Row> */}
                                    {/* <Row>
                                        <Col>
                                            <p className="grey-text">CA OSHA Ladder Saftey</p>
                                        </Col>
                                        <Col>
                                            <DatePickerMod />
                                        </Col>
                                    </Row> */}

                                    <FormBtn
                                        disabled={!(this.state.first_name && this.state.last_name && this.state.phone_number && this.state.email)}
                                        onClick={this.handleFormSubmit}
                                    >
                                    </FormBtn>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
};
export default Employee;
