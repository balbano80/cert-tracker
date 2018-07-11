/* DEPENDENCIES */

// React
import React, { Component } from "react";
import API from '../utils/API';

// MD React-Bootstrap
import { Container, Row, Col, Button, Card, CardBody, Modal, ModalBody, ModalHeader, ModalFooter, Select, SelectInput, SelectOptions, SelectOption, CardHeader, Table, PerfectScrollbar } from 'mdbreact';

// Components
import DropdownOption from "./DropdownOption";
import TableData from "./TableData";
import MultipleSelectOption from "./MultipleSelectOption";

// Modal CSS
import "./styles/DashEditSiteModal.css";
import { conditionallyUpdateScrollbar } from '../src/components/utils';
import { updateLocale } from "../../node_modules/moment";

// -------------------------------------------------------------------------------------------------

const modStyle = {
  margin: 0
}




class DashbEditSiteModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      // crews: [],
      allCerts: [],
      crewCerts: [],
      crewCertIds: [],
      matchedCerts: [],
      employees: [],
      crewEmployees: [],
      value: ''
    }

  }

  /* Toggle Modal */

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
    axios.get("/api/user_data").then(res => {
      this.setState({
        user: res.data
      })
      console.log("UserInfo ", this.state.user);
    });

  }

  /* SELECT CREW DROPDOWN */

  optionClick = (id, value) => {
    console.log("id: " + id)
    console.log("value: " + value)

    // Displaying Employees In Selected Crew
    var crewIdArr = this.state.employees.filter(ele => ele.CrewId === id)
    // console.log("Crew ID Array is: ", crewIdArr)
    this.setState({ value: value, crewEmployees: crewIdArr });

    // Grabbing CrewCerts That Belong to Selected Crew
    var crewCertIdArr = this.state.crewCerts.filter(ele => ele.CrewId === id)
    console.log("crewCert ID Array is: ", crewCertIdArr)
    this.setState({ crewCertIds: crewCertIdArr })
    
    let CrewCertIds = this.state.crewCertIds;
    let AllCerts = this.state.allCerts;
    let tempMatchedCerts = [];
    for (let i = 0; i < CrewCertIds.length; i++) {

      for (let j = 0; j < AllCerts.length; j++) {
        if (AllCerts[j].id === this.state.crewCertIds[i].CertificateId) {
          tempMatchedCerts.push(AllCerts[j]);
        }
      }
    }
    this.setState({ matchedCerts: tempMatchedCerts })
    console.log("matched certs array content: ", this.state.matchedCerts)

  }

  /* OTHER DROPDOWN OPTIONS */

  optionClick2 = (value) => {
    if (value.constructor === Array) {
      value = value.join(', ');
    }
    this.setState({ value: value });
  }

  onClick = (e) => {
    // check if select is multiple
    if (e.target.dataset.multiple === 'true') {
      return;
    }

    if (e.target.classList.contains('select-dropdown')) {
      this.otherDropdownsClose();
      if (e.target.nextElementSibling) {
        e.target.nextElementSibling.classList.add('fadeIn');
      }
    } else {
      this.otherDropdownsClose();
    }
  }

  otherDropdownsClose = () => {
    let dropdowns = document.querySelectorAll('.dropdown-content');
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains('fadeIn')) {
        dropdowns[i].classList.remove('fadeIn');
      }
    }
  }

  /* API CALLS */

  handleGetEmployees = () => {
    API.getEmployees().then((result) => {
      // console.log("Employees working ", result.data)
      this.setState({ employees: result.data })
    })
  }

  handleGetCerts = () => {
    API.getCertificates().then((result) => {
      // console.log("Get All Certs success", result.data)
      this.setState({ allCerts: result.data })
    })
  }

  handleGetCrewCerts = () => {
    API.getAllCrewCerts().then((result) => {
      // console.log("Get Crew Certs success", result.data)
      this.setState({ crewCerts: result.data })
    })
  }

  /* LIFECYCLE EVENTS */

  componentDidMount() {
    document.addEventListener('click', this.onClick);
    this.handleGetEmployees();
    this.handleGetCrewCerts();
    this.handleGetCerts();

  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }



  render() {
    // console.log(this.props.crews)
    const modalStyle = { width: '100%' }
    const outerContainerStyle = { width: '100%', height: '200px' }
    return (
      <Container>
        <Button outline color="primary" onClick={this.toggle}>Edit Crew</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader className="blue-grey-text text-center" toggle={this.toggle}>Edit this Site</ModalHeader>
          <ModalBody className="blue-grey-text">
            <Row>
              <Col size="12">

                {/* Select Crew Dropdown */}
                <h5>Select a Crew to Edit</h5>
                <Select>
                  <SelectInput value={this.state.value}></SelectInput>
                  <SelectOptions>
                    <SelectOption disabled>Select Crew</SelectOption>
                    {this.props.crews.map(crew => {
                      return (
                      <SelectOption triggerOptionClick={() => this.optionClick(crew.id, crew.crew_type)}> 
                        {crew.crew_type}
                      </SelectOption>
                      )
                    })}
                  </SelectOptions>
                </Select>
                {/* End Select Crew Dropdown */}

              </Col>
            </Row>
            <Row>
              <Col size="12">
                <h5>Edit Crew Members</h5>

                {/* Edit Crew Member Table */}
                <Card style={outerContainerStyle} className="mt-5">
                  <CardHeader>
                    Delete Crew Members
                  </CardHeader>
                  <PerfectScrollbar className="scrollbar-primary">
                    <CardBody>
                      <Table striped bordered small>
                        <tbody>
                          {this.state.crewEmployees.map(crewEmployee => (
                            <TableData
                              key={crewEmployee.id}
                              name={crewEmployee.first_name}
                              last_name={crewEmployee.last_name}
                            />
                          ))}
                        </tbody>
                      </Table>
                    </CardBody>
                  </PerfectScrollbar>
                </Card>
                <hr />
                {/* End Edit Crew Member Table */}

              </Col>
            </Row>
            <Row>
              <Col size="12">
                <h5>Update Certifications For This Crew</h5>

                {/* Edit Cert Table */}
                <Card style={outerContainerStyle} className="mt-5">
                  <CardHeader>
                    Delete Certification Requirements
                  </CardHeader>
                  <PerfectScrollbar className="scrollbar-primary">
                    <CardBody>
                      <Table striped bordered small>
                        <tbody>
                          {this.state.matchedCerts.map(cert => (
                            <TableData
                              key={cert.id}
                              name={cert.name}
                            />
                          ))}
                        </tbody>
                      </Table>
                    </CardBody>
                  </PerfectScrollbar>
                </Card>
                <hr />
                {/* End Edit Cert Table */}

              </Col>
            </Row>
            <Row>
              <Col size="12">

                {/* Add Certification */}
                <Card>
                  <CardHeader>
                    Assign New Certifications
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col size="9">
                        <Select multiple>
                          <SelectInput value="Select Certifications">
                          </SelectInput>
                          <SelectOptions>
                            <SelectOption disabled> Select Certifications </SelectOption>
                            {this.state.allCerts.map(cert => (
                              <MultipleSelectOption
                                key={cert.id}
                                id={cert.id}
                                name={cert.name}
                                optionClick={this.optionClick2}
                              />
                            ))}
                          </SelectOptions>
                        </Select>
                      </Col>
                      <Col size="3">
                        <Button color="success"> Add Certifications </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <hr />
                {/* End Add Certification */}

              </Col>
            </Row>
            <Row>
              <Col size="12">

                {/* Delete Crew Button */}
                <h5>Delete This Crew</h5>
                <Button color="danger" > Delete Crew
                </Button>
                {/* End Delete Crew Button */}

              </Col>
            </Row>



          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
            <Button color="primary" onClick={this.toggle}> Save changes</Button>{' '}
            {/* <Button color="primary" onClick={() => { this.handleSaveChanges(); }}> Save changes</Button> */}
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default DashbEditSiteModal;


// {this.state.employees.map(employee => (
//   <Dropdown
//       id={employee.id}
//       key={employee.id}
//       name={employee.name}
//       removeEmployee={this.removeEmployee}
//       editEmployee={this.editEmployee}
//   />
// ))}

