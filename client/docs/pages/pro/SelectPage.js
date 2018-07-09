import React from 'react';
import { Select, SelectInput, SelectOptions, SelectOption } from 'mdbreact';

class SelectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Choose your option",
      value2: "Choose your option",
      value3: "Choose your option",
      value4: "Choose your option",
      value5: "Choose your option"
    }
    this.optionClick = this.optionClick.bind(this);
    this.optionClick2 = this.optionClick2.bind(this);
    this.optionClick3 = this.optionClick3.bind(this);
    this.optionClick4 = this.optionClick4.bind(this);
    this.optionClick5 = this.optionClick5.bind(this);

    this.onClick = this.onClick.bind(this);
    this.otherDropdownsClose = this.otherDropdownsClose.bind(this);
  }

  optionClick(value) {
    if (value.constructor === Array) {
      value = value.join(', ');
    }
    this.setState({value: value});
  }
  optionClick2(value) {
    if (value.constructor === Array) {
      value = value.join(', ');
    }
    this.setState({value2: value});
  }
  optionClick3(value) {
    if (value.constructor === Array) {
      value = value.join(', ');
    }
    this.setState({value3: value});
  }
  optionClick4(value) {
    if (value.constructor === Array) {
      value = value.join(', ');
    }
    this.setState({value4: value});
  }
  optionClick5(value) {
    if (value.constructor === Array) {
      value = value.join(', ');
    }
    this.setState({value5: value});
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

  render() {
    return(
      <div className="container mt-5 primary-text">
        <h4 className="my-4 indigo-text"><strong>Basic example</strong></h4>
        <div className="row">
          <div className="col-md-6">

            <Select>
              <SelectInput value={this.state.value}></SelectInput>
              <SelectOptions>
                <SelectOption disabled>Choose your option</SelectOption>
                <SelectOption triggerOptionClick={this.optionClick}>Option nr 1</SelectOption>
                <SelectOption triggerOptionClick={this.optionClick}>Option nr 2</SelectOption>
                <SelectOption triggerOptionClick={this.optionClick}>Option nr 3</SelectOption>
                <SelectOption triggerOptionClick={this.optionClick}>Option nr 4</SelectOption>
                <SelectOption triggerOptionClick={this.optionClick}>Option nr 5</SelectOption>
              </SelectOptions>
            </Select>
            <label>Example label</label>

          </div>
        </div>
        <h4 className="my-4 teal-text"><strong>Multiple select</strong></h4>
        <div className="row">
          <div className="col-md-6">

            <Select multiple>
              <SelectInput value={this.state.value2}></SelectInput>
              <SelectOptions>
                <SelectOption disabled>Choose your option</SelectOption>
                <SelectOption triggerOptionClick={this.optionClick2}>Option nr 1</SelectOption>
                <SelectOption triggerOptionClick={this.optionClick2}>Option nr 2</SelectOption>
                <SelectOption triggerOptionClick={this.optionClick2}>Option nr 3</SelectOption>
                <SelectOption triggerOptionClick={this.optionClick2}>Option nr 4</SelectOption>
                <SelectOption triggerOptionClick={this.optionClick2}>Option nr 5</SelectOption>
              </SelectOptions>
            </Select>
            <label>Example label</label>

          </div>
        </div>
        <h4 className="my-4 deep-orange-text"><strong>Colorful select</strong></h4>
        <div className="row">
          <div className="col-md-6">

            <Select color="primary">
              <SelectInput value={this.state.value3}></SelectInput>
              <SelectOptions>
                <SelectOption disabled>Choose your option</SelectOption>
                <SelectOption triggerOptionClick={this.optionClick3}>Option nr 1</SelectOption>
                <SelectOption triggerOptionClick={this.optionClick3}>Option nr 2</SelectOption>
                <SelectOption triggerOptionClick={this.optionClick3}>Option nr 3</SelectOption>
                <SelectOption triggerOptionClick={this.optionClick3}>Option nr 4</SelectOption>
                <SelectOption triggerOptionClick={this.optionClick3}>Option nr 5</SelectOption>
              </SelectOptions>
            </Select>
            <label>Blue select</label>

          </div>
        </div>
        <h4 className="my-4 blue-grey-text"><strong>Select with icons</strong></h4>
        <div className="row">
          <div className="col-md-6">

            <Select>
              <SelectInput value={this.state.value4}></SelectInput>
              <SelectOptions>
                <SelectOption disabled>Choose your option</SelectOption>
                <SelectOption icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" triggerOptionClick={this.optionClick4}>Option nr 1</SelectOption>
                <SelectOption icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" triggerOptionClick={this.optionClick4}>Option nr 2</SelectOption>
                <SelectOption icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg" triggerOptionClick={this.optionClick4}>Option nr 3</SelectOption>
              </SelectOptions>
            </Select>
            <label>Example label</label>

          </div>
        </div>
        <h4 className="my-4 deep-purple-text"><strong>Options groups</strong></h4>
        <div className="row">
          <div className="col-md-6">

            <Select>
              <SelectInput value={this.state.value5}></SelectInput>
              <SelectOptions>
                  <SelectOption disabled>team 1</SelectOption>
                  <SelectOption triggerOptionClick={this.optionClick5}>Option nr 1</SelectOption>
                  <SelectOption triggerOptionClick={this.optionClick5}>Option nr 2</SelectOption>
                  <SelectOption disabled>team 2</SelectOption>
                  <SelectOption triggerOptionClick={this.optionClick5}>Option nr 3</SelectOption>
                  <SelectOption triggerOptionClick={this.optionClick5}>Option nr 4</SelectOption>
              </SelectOptions>
            </Select>
            <label>Example label</label>

          </div>
        </div>
        <br/><br/><br/><br/><br/>
      </div>
    );
  }
};

export default SelectPage;
