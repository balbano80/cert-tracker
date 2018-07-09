/* DEPENDENCIES */

// React
import React, { Component } from "react";
import API from '../utils/API';
// import { BrowserRouter as Router } from 'react-router-dom';

// MD React-Bootstrap
import { Container, Row, Col, Button, Card, CardBody, Modal, ModalBody, ModalHeader, ModalFooter, Select, SelectInput, SelectOptions, SelectOption, CardHeader, Table, PerfectScrollbar } from 'mdbreact';

// Components
import DropdownOption from "./DropdownOption";
import TableData from "./TableData";
import MultipleSelectOption from "./MultipleSelectOption";

// Modal CSS
import "./styles/DashEditSiteModal.css";

// TEMPORARY JSON files for employees/certifications
import crews from "./temp-json/crews.json";
import certs from "./temp-json/certs.json";
// import employees from "./temp-json/employees.json";
import { conditionallyUpdateScrollbar } from '../src/components/utils';

// -------------------------------------------------------------------------------------------------

const modStyle = {
  margin: 0
}

let employeesArr = []
let certsArr = []



class DashbEditSiteModal extends Component {


  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      employees: [],
      certs: [],
      crews,
    }

  }


  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  // Select Crew Dropdown Value
  optionClick = (value) => {
    if (value.constructor === Array) {
      value = value.join(', ');
    }
    this.setState({ value: value });
  }

  // Select Certifications to Add Values
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

  // removeElement = id => {
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   this.setState({ friends });
  // };
  


// Opening Modal will toggle modal & get employees
  onClickModal = (event) => {
    this.toggle();
    // this.handleGetEmployees()
    // this.handleGetCrewCerts()
    this.updateModal();

 }
 updateModal = () => {
  this.updateCerts()    
  this.updateEmployees()
 }

  handleSubmit = () => {
    console.log("Yay, handleSubmit ran")
  }

  updateEmployees() {
    this.setState({ employees: employeesArr })
    console.log("employee state updated")
  }

  // handleGetEmployees = () => {
  //   API.getEmployees()
  //   .then(function(result) {
  //     result.data.forEach(function(value) {
  //        employeesArr.push({
  //          last_name: value.last_name,
  //          first_name: value.first_name,
  //          id: value.id
  //         });
  //     });
  //     console.log("handleGetEmployees successful")
  //   })
  // }

  /* WORKING ON POPULATING CERTS */

  // handleGetCrewCerts = () => {
  //   API.getCertificates()
  //   .then( function(res) {
  //     // console.log('Employeessss: ', result.data);
  //     res.data.forEach(function(value) {
  //        certsArr.push({
  //          id: value.id,
  //          name: value.name
  //         });
  //     });
  //     console.log("handleGetCrewCerts successful")
  //   })
  // }



  updateCerts() {
    this.setState({certs: certsArr})
    console.log("crew certs updated")
  }





  componentDidMount() {
    document.addEventListener('click', this.onClick,);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }


// ================================================================================================================

  render() {
    const modalStyle = { width: '100%' }
    const outerContainerStyle = { width: '100%', height: '200px' }
    return (
      <Container>
        <Button outline color="primary" onClick={this.onClickModal}>Edit Crew</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader className="blue-grey-text text-center" toggle={this.toggle}>Edit this Site</ModalHeader>
          <ModalBody className="blue-grey-text">
            <Row>
              <Col size="12">

                {/* Select Crew Dropdown */}
                <h5>Select a Crew to Edit</h5>
                <Select>
                  <SelectInput value="Select Crew"></SelectInput>
                  <SelectOptions>
                    <SelectOption disabled>Select Crew</SelectOption>
                    {this.state.crews.map(crew => (
                      <DropdownOption
                        key={crew.id}
                        id={crew.id}
                        name={crew.name}
                        optionClick={this.optionClick}
                      />
                    ))}
                  </SelectOptions>
                </Select>
                {/* Select Crew Dropdown */}

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
                          {this.state.employees.map(employee => (
                            <TableData
                              key={employee.id}
                              first={employee.first_name}
                              last={employee.last_name}
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

                {/* Edit Employee Table */}
                <Card style={outerContainerStyle} className="mt-5">
                  <CardHeader>
                    Delete Certification Requirements
                  </CardHeader>
                  <PerfectScrollbar className="scrollbar-primary">
                    <CardBody>
                      <Table striped bordered small>
                        <tbody>
                          {this.state.certs.map(cert => (
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
                {/* End Edit Employee Table */}

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
                    <Select multiple>
                      <SelectInput value="Select Certifications">
                      </SelectInput>
                      <SelectOptions>
                        <SelectOption disabled> Select Certifications </SelectOption>
                        {this.state.certs.map(cert => (
                          <MultipleSelectOption
                            key={cert.id}
                            id={cert.id}
                            name={cert.name}
                            optionClick={this.optionClick2}
                          />
                        ))}
                      </SelectOptions>
                    </Select>
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
            <Button color="primary" onClick={() => {
           this.handleSubmit();
            }}>
          Save changes</Button>
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

