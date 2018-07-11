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
      sitesValue: '',
      siteContainer: [],
      crewContainer: [],
      siteValue: '',
      crewValue: '',
      crewId: null
    }

  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }


    // Select Sites to Add Values
    optionClickSites = (id, value) => {
      var siteIdArr = this.state.crews.filter(ele => ele.SiteId === id)
      console.log("Site ID Array is: ", siteIdArr)

      // console.log("optionClickSites: " + value)
      this.setState({ sitesValue: value, crewContainer: siteIdArr, siteValue: value });
      // console.log("This State", this.state)
      console.log("siteIdArr is: ", siteIdArr)
    }

    // Select Crew Dropdown Value
    optionClickCrews = (id, value) => {

      console.log("optionClickCrews: " + id + value)
      this.setState({ crewId: id, crewValue: value });
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
    API.getCrewCerts(this.state.crewId).then(response => {
      // setState to array that you map to
      // console.log("getCrewCerts: ", response)
      this.setState({certIds: response.data}, function(){
        console.log("certIs are: ", this.state.certIds)
        this.props.handleCertIds(this.state.certIds)
      })
    })
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
    API.getCrews().then(response => {
      if (response.status >= 400) {
          throw new Error("Bad response from server");
      }
    else {
      console.log("Response.data for handleGetCrews is: ", response.data)
      this.setState({crews: response.data}, function(){
        // console.log("GetCrews this.state.crews: " + this.state.crews)
      });
    }

  })


    document.addEventListener('click', this.onClick);

  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }



  render() {
    const modalStyle = { width: '50%' }
    const outerContainerStyle = { width: '55%', height: '250px' }
    return (
      <Container className="text-center">
        <Button outline color="primary" onClick={this.toggle}>Configure your Form</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} style={modalStyle}>
          <ModalHeader className="blue-grey-text text-center" toggle={this.toggle}>Edit your Form</ModalHeader>
          <ModalBody className="blue-grey-text">
            <Row>
            <Col size="6">
                {/* Select Crew Dropdown */}
                <h5>Select the Site</h5>
                <Select>
                    <SelectInput value={this.state.siteValue}></SelectInput>
                        <SelectOptions>
                            <SelectOption disabled>Select Site</SelectOption>
                            {/* {console.log("Sites state: ", this.state.user)} */}
                            {this.state.siteContainer.map(site => {
                              return(
                                <SelectOption id={site.id} triggerOptionClick={() => this.optionClickSites(site.id, site.name)}> 
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
                    <SelectInput value={this.state.crewValue}></SelectInput>
                        <SelectOptions>
                            <SelectOption disabled>Select a Crew</SelectOption>
                            {/* {console.log("Sites state: ", this.state.user)} */}
                            {this.state.crewContainer.map(crew => {
                              return(
                                <SelectOption triggerOptionClick={() => this.optionClickCrews(crew.id, crew.crew_type)}> 
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