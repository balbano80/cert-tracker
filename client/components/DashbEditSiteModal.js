import React, { Component } from "react";
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, Modal, ModalBody, ModalHeader, ModalFooter, Select, SelectInput, SelectOptions, SelectOption, CardHeader, Table, PerfectScrollbar } from 'mdbreact';
// import EditCrewEmployee from "./EditCrewEmployee"
// import EditCrewCerts from "./EditCrewCerts"
import DropdownOption from "./DropdownOption"
// import CertDropdown from "./CertDropdown"

// Modal CSS
import "./styles/DashEditSiteModal.css";

// TEMPORARY JSON files for employees/certifications
import crews from "./temp-json/crews.json";
import certs from "./temp-json/certs.json";



const modStyle = {
  margin: 0
}


class DashbEditSiteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      crewDDvalue: "Select a Crew",  //select crew dropdown
      certDDvalue: "Select Certification to Add",
      crews,
      certs,
    }
    this.toggle = this.toggle.bind(this);

    // select crew dropdown
    this.onClick = this.onClick.bind(this);
    this.otherDropdownsClose = this.otherDropdownsClose.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  /* select crew dropdown start */
  optionClick = (value) => {
    if (value.constructor === Array) {
      value = value.join(', ');
    }
    this.setState({ value: value });
  }

  onClick(e) {
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

  otherDropdownsClose() {
    let dropdowns = document.querySelectorAll('.dropdown-content');
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains('fadeIn')) {
        dropdowns[i].classList.remove('fadeIn');
      }
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.onClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }

  /* end select crew dropdown */


  render() {
    const modalStyle = { width: '100%' }
    return (
      <Container>
        <Button outline color="primary" onClick={this.toggle}>Edit Crew</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader className="blue-grey-text text-center" toggle={this.toggle}>Edit this Site</ModalHeader>
          <ModalBody className="blue-grey-text">
            {/* Select Crew Dropdown */}
            <Row>
              <Col size="12">
                Crew
                    <Select>
                  <SelectInput value={this.state.crewDDvalue}></SelectInput>
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
              </Col>
            </Row>
            <Row>
              <Col size="12">
                {/* Edit Employee List */}
                <Card className="mt-5">
                  <CardHeader>
                    Edit Crew Employees
                      </CardHeader>
                  <PerfectScrollbar className="scrollbar-primary">
                    <CardBody>
                      <Table striped bordered small>
                        <tbody>
                          <tr>
                            <td>Otto, Mark</td>
                          </tr>
                          <tr>
                            <td>Thornton, Jacob</td>
                          </tr>
                          <tr>
                            <td>the Bird, Larry</td>
                          </tr>
                          <tr>
                            <td>Shapiro, Terry</td>
                          </tr>
                          <tr>
                            <td>Duck, Chicken</td>
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </PerfectScrollbar>
                </Card>
                {/* <EditCrewEmployee style={modStyle}/> */}
                <hr />
              </Col>
            </Row>
            <Row>
              {/* <Col size="12">
                    <EditCrewCerts />
                  </Col> */}
            </Row>
            <Row>
              <Col size="12">
                <Select>
                  <SelectInput value={this.state.certDDvalue}></SelectInput>
                  <SelectOptions>
                    <SelectOption disabled>Select Certification</SelectOption>
                    {this.state.certs.map(cert => (
                      <DropdownOption
                        key={cert.id}
                        id={cert.id}
                        name={cert.name}
                        optionClick={this.optionClick}
                      />
                    ))}
                  </SelectOptions>
                </Select>
              </Col>
            </Row>

          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
};

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

