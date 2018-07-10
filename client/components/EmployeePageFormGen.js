/* DEPENDENCIES */

// React
import React, { Component } from "react";
import API from '../utils/API';
import axios from "axios";

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
      crewsValue: '',
      sitesValue: '',
      siteContainer: [],
      crewContainer: []
    }

  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }


    // Select Sites to Add Values
    optionClickSites = (value) => {

      console.log("optionClickSites: " + value)
      this.setState({ sitesValue: value });
      // this.handleSelectSites();
    }

    // Select Crew Dropdown Value
    optionClickCrews = (value) => {

      console.log("optionClickCrews: " + value)
      this.setState({ crewsValue: value });
      // this.handleSelectCrew();
  
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

  // this.handleGetSites();

  handleSelectCrew = () => {
    this.handleGetCrews();
  }

 

  componentDidMount() {
    axios.get("/api/user_data").then(res => {
      this.setState({
        user: res.data
      })
      console.log("UserInfo ", this.state.user);
      this.state.user.sites.map(site => {
        this.state.siteContainer.push(site);
      })
      this.state.user.crews.map(crew => {
        this.state.crewContainer.push(crew);
      })
    });
    API.getSites().then(res => {
      // console.log(res.data[0].name)
    });

    document.addEventListener('click', this.onClick);

  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }



  render() {
    const modalStyle = { width: '50%' }
    const outerContainerStyle = { width: '55%', height: '200px' }
    return (
      <Container>
        <Button outline color="primary" onClick={this.toggle}>Configure your Form</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} style={modalStyle}>
          <ModalHeader className="blue-grey-text text-center" toggle={this.toggle}>Edit your Form</ModalHeader>
          <ModalBody className="blue-grey-text">
            <Row>
            <Col size="6">
                {/* Select Crew Dropdown */}
                <h5>Select the Site</h5>
                <Select>
                    <SelectInput value={this.state.value}></SelectInput>
                        <SelectOptions>
                            <SelectOption disabled>Select Site</SelectOption>
                            {/* {console.log("Sites state: ", this.state.user)} */}
                            {this.state.siteContainer.map(site => {
                              return(
                                <SelectOption triggerOptionClick={() => props.optionClick(site.name)}> 
                                  {site.name}
                                </SelectOption>
                                )}
                            )}    
                           
                        </SelectOptions>
                    </Select>
                    {/* Select Crew Dropdown */}
                </Col>
              <Col size="6">
                {/* Select Crew Dropdown */}
                <h5>Select the Crew</h5>
                <Select>
                    <SelectInput value={this.state.value}></SelectInput>
                        <SelectOptions>
                            <SelectOption disabled>Select a Crew</SelectOption>
                            {/* {console.log("Sites state: ", this.state.user)} */}
                            {this.state.crewContainer.map(crew => {
                              return(
                                <SelectOption triggerOptionClick={() => props.optionClick(crew.crew_type)}> 
                                  {crew.crew_type}
                                </SelectOption>
                                )}
                            )}    
                           
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

