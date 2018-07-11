/* DEPENDENCIES */

// React
import React, { Component } from "react";
import API from '../utils/API';
import axios from "axios";

// MD React-Bootstrap
import { Container, Row, Col, Button, Card, CardBody, Modal, ModalBody, ModalHeader, ModalFooter, Select, SelectInput, SelectOptions, SelectOption, CardHeader, Table, PerfectScrollbar } from 'mdbreact';

// Components
import TableData from "./TableData";

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
      crewId: '',
      allCerts: [],
      crewCerts: [],
      crewCertIds: [],
      matchedCerts: [],
      employees: [],
      crewEmployees: [],
      value: '',
      addvalues: '',
      addCertId: ''
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
    });

  }

  /* SELECT CREW DROPDOWN */

  optionClick = (id, value) => {

    // Displaying Employees In Selected Crew
    var crewIdArr = this.state.employees.filter(ele => ele.CrewId === id)
    this.setState({ value: value, crewEmployees: crewIdArr, crewId: id });

    // Grabbing CrewCerts That Belong to Selected Crew
    var crewCertIdArr = this.state.crewCerts.filter(ele => ele.CrewId === id)
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
  }

  /* OTHER DROPDOWN OPTIONS */

  optionClick2 = (id, value) => {
    console.log("id: " + id + ", value: " + value)
    this.setState({ addvalues: value, addCertId: id })


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
      this.setState({ employees: result.data })
    })
  }

  handleGetCerts = () => {
    API.getCertificates().then((result) => {
      this.setState({ allCerts: result.data })
    })
  }

  handleGetCrewCerts = () => {
    API.getAllCrewCerts().then((result) => {
      this.setState({ crewCerts: result.data })
    })
  }


  handleCertSubmit = (event, id) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

        API.createCrewCerts({   
          CertificateId: this.state.addCertId,
          CrewId: this.state.crewId, 
        })
          .then(res => {
            this.setState({ name: res.data.name, validFor: res.data.validFor })
            this.toggle()
            this.handleGetCrewCerts();
          })
  };


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
    const modalStyle = { width: '100%' }
    const outerContainerStyle = { width: '100%', height: '200px' }
    return (
      <Container>
        <Button outline color="primary" onClick={this.toggle}>Edit Crew</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader className="blue-grey-text text-center" toggle={this.toggle}>Edit a Crew For This Site</ModalHeader>
          <ModalBody className="blue-grey-text">
            <Row>
              <Col size="12">

                {/* Select Crew Dropdown */}
                <h5>Select a Crew to Edit</h5>
                <Select>
                  <SelectInput value={this.state.value}></SelectInput>
                  <SelectOptions>
                    <SelectOption disabled>Select Crew</SelectOption>
                    {this.props.crews.map((crew, i) => {
                      return (
                        <SelectOption key={i} triggerOptionClick={() => this.optionClick(crew.id, crew.crew_type)}>
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
                      {this.state.crewEmployees.length > 0 &&
                        this.state.crewEmployees.map((crewEmployee, i) => (
                          <Table striped bordered small key={i}>
                            <tbody>
                              <TableData
                                key={crewEmployee.id}
                                name={crewEmployee.first_name}
                                last_name={crewEmployee.last_name}
                              />
                            </tbody>
                          </Table>
                        ))}
                      {this.state.crewEmployees.length < 1 &&
                        <div className="text-center">
                          <h5>No Crew Members In This Crew</h5>
                        </div>
                      }
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
                      {this.state.matchedCerts.length > 0 &&
                        this.state.matchedCerts.map((matchedCert, i) => {
                          return (
                            <Table striped bordered small key={i}>
                              <tbody>
                                <tr>
                                  <td>
                                    {matchedCert.name}
                                    <span onClick={() => this.removeElement(matchedCert.id)} key={matchedCert.id} className="remove"> 𝘅 </span>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          )
                        }
                        )}
                      {this.state.matchedCerts.length === 0 &&
                        <div className="text-center">
                          <h5>No Certificates Available For This Crew</h5>
                        </div>
                      }
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
                        <Select>
                          <SelectInput value={this.state.addvalues}></SelectInput>
                          <SelectOptions>
                            <SelectOption disabled>Select Crew</SelectOption>
                            {this.state.allCerts.map((cert, i) => {
                              return (
                                <SelectOption key={i} triggerOptionClick={() => this.optionClick2(cert.id, cert.name)}>
                                  {cert.name}
                                </SelectOption>
                              )
                            })}
                          </SelectOptions>
                        </Select>
                      </Col>
                      <Col size="3">
                        <Button onClick={this.handleCertSubmit} color="success"> Add Certifications </Button>
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
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default DashbEditSiteModal;

