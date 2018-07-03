import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, Modal, ModalBody, ModalHeader, ModalFooter, Select, SelectInput, SelectOptions, SelectOption } from 'mdbreact';



class CrewDropdown extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      value: "Select a Certifcation to Add",  //select crew dropdown
    }

    // select crew dropdown
    this.optionClick = this.optionClick.bind(this);
    this.onClick = this.onClick.bind(this);
    this.otherDropdownsClose = this.otherDropdownsClose.bind(this);
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

                    <Select>
                      <SelectInput value={this.state.value}></SelectInput>
                      <SelectOptions>
                        <SelectOption disabled>Select Certification</SelectOption>
                        <SelectOption triggerOptionClick={this.optionClick}>Cert1</SelectOption>
                        <SelectOption triggerOptionClick={this.optionClick}>Cert2</SelectOption>
                        <SelectOption triggerOptionClick={this.optionClick}>Cert3</SelectOption>
                      </SelectOptions>
                    </Select>
    );
  }
};

export default CrewDropdown;
