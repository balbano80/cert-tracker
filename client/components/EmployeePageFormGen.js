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

// -------------------------------------------------------------------------------------------------

class EmployeePageFormGen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      sites: [],
      crews: [],
      certs: [],
      employees: [],
      value: ''
    }

  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  // Select Crew Dropdown Value
  optionClick = (value) => {
    // if (value.constructor === Array) {
    //   value = value.join(', ');
    // }
    console.log("value: " + value)
    this.setState({ value: value });
    this.handleSelectCrew();

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


  handleSaveChanges = () => {
    console.log("Yay, handleSaveChanges ran")
  }

  handleSelectCrew = () => {
    this.handleGetEmployees();
    this.handleGetCerts();
  }

  /* API CALLS */


  handleGetEmployees = () => {
    let self = this;
    fetch('/api/employee', {
        method: 'GET'
    }).then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        self.setState({employees: data});
        console.log("this.state.employees: " + self.state.employees)
    }).catch(err => {
    console.log('caught it!',err);
    })
  }

  handleGetCrews = () => {
    let self = this;
    fetch('/api/crews', {
        method: 'GET'
    })
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        self.setState({crews: data});
        console.log("this.state.crews: " + self.state.crews)
    }).catch(err => {
    console.log('caught it!',err);
    })
  }

  handleGetSites = () => {
    let self = this;
    fetch('/api/sites', {
        method: 'GET'
    })
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        self.setState({sites: data});
        console.log("this.state.sites: " + self.state.sites)
    }).catch(err => {
    console.log('caught it!',err);
    })
  }


  handleGetCerts = () => {
    let self = this;
    fetch('/api/certification', {
        method: 'GET'
    }).then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        self.setState({certs: data});
        console.log("this.state.certs: " + self.state.certs)
    }).catch(err => {
    console.log('caught it!',err);
    })
  }
  // handleGetCerts = () => {
  //   let self = this;
  //   fetch('/api/certificates', {
  //       method: 'GET'
  //   }).then(function(response) {
  //       if (response.status >= 400) {
  //           throw new Error("Bad response from server");
  //       }
  //       return response.json();
  //   }).then(function(data) {
  //       self.setState({certs: data});
  //       console.log("this.state.certs: " + self.state.certs)
  //   }).catch(err => {
  //   console.log('caught it!',err);
  //   })
  // }


  componentDidMount() {
    document.addEventListener('click', this.onClick);
    this.handleGetSites();
    this.handleGetCrews();

  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }



  render() {
    const modalStyle = { width: '40%' }
    const outerContainerStyle = { width: '40%', height: '200px' }
    return (
      <Container>
        <Button outline color="primary" onClick={this.toggle}>Create your Form</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader className="blue-grey-text text-center" toggle={this.toggle}>Edit your Form</ModalHeader>
          <ModalBody className="blue-grey-text">
            <Row>
            <Col size="4">
                {/* Select Crew Dropdown */}
                <h5>Select the Site</h5>
                <Select>
                    <SelectInput value={this.state.value}></SelectInput>
                        <SelectOptions>
                            <SelectOption disabled>Select Site</SelectOption>
                            {this.state.sites.map(site => (
                            <DropdownOption
                                key={site.id}
                                id={site.id}
                                name={site.name}
                                optionClick={this.optionClick}
                            />
                            ))}
                        </SelectOptions>
                    </Select>
                    {/* Select Crew Dropdown */}
                </Col>
              <Col size="4">
                {/* Select Crew Dropdown */}
                <h5>Select the Crew</h5>
                <Select>
                    <SelectInput value={this.state.value}></SelectInput>
                        <SelectOptions>
                            <SelectOption disabled>Select Crew</SelectOption>
                            {this.state.crews.map(crew => (
                            <DropdownOption
                                key={crew.id}
                                id={crew.id}
                                crew_type={crew.crew_type}
                                optionClick={this.optionClick}
                            />
                            ))}
                        </SelectOptions>
                    </Select>
                    {/* Select Crew Dropdown */}
                </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
            <Button color="primary" onClick={() => {
              this.handleSaveChanges();
            }}>
              Save changes</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default EmployeePageFormGen;

