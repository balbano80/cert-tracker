import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, Modal, ModalBody, ModalHeader, ModalFooter, Select, SelectInput, SelectOptions, SelectOption } from 'mdbreact';
import EditCrewEmployee from "./EditCrewEmployee"
import EditCrewCerts from "./EditCrewCerts"
import "./styles/DashEditSiteModal.css";

const modStyle = {
  margin: 0
}


class DashbEditSiteModal extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      value: "Select a Crew",  //select crew dropdown
    }
    this.toggle = this.toggle.bind(this);

    // select crew dropdown
    this.optionClick = this.optionClick.bind(this);
    this.onClick = this.onClick.bind(this);
    this.otherDropdownsClose = this.otherDropdownsClose.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  /* select crew dropdown start */
  optionClick(value) {
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
                    <Select>
                      <SelectInput value={this.state.value}></SelectInput>
                      <SelectOptions>
                        <SelectOption disabled>Select Crew</SelectOption>
                        <SelectOption triggerOptionClick={this.optionClick}>Crew 1</SelectOption>
                        <SelectOption triggerOptionClick={this.optionClick}>Crew 2</SelectOption>
                        <SelectOption triggerOptionClick={this.optionClick}>Crew 3</SelectOption>
                      </SelectOptions>
                    </Select>
                  </Col>
                </Row>
                <Row>
                  <Col size="12">
                    {/* Edit Employee List */}
                    <EditCrewEmployee style={modStyle}/>
                    <hr />
                  </Col>
                </Row>
                <Row>
                  <Col size="12">
                    <EditCrewCerts />
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
