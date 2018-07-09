import React from 'react';
import { Container, Input, FormInline, InputSwitch, InputFile, InputRange } from 'mdbreact';

class InputPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radio: false,
      radio2: false,
      radio3: false,
      checkbox: true,
      switch: true
    }
    this.onClick1 = this.onClick1.bind(this);
    this.onClick2 = this.onClick2.bind(this);
    this.onClick3 = this.onClick3.bind(this);
    this.onClick4 = this.onClick4.bind(this);
    this.onClick5 = this.onClick5.bind(this);
    this.onClick6 = this.onClick6.bind(this);
    this.onClick7 = this.onClick7.bind(this);
    this.onClick8 = this.onClick8.bind(this);
    this.onClick9 = this.onClick9.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSwitchChange = this.handleSwitchChange.bind(this);
  }

  onClick1() {
    this.setState({radio: 1});
  }

  onClick2() {
    this.setState({radio: 2});
  }

  onClick3() {
    this.setState({radio: 3});
  }

  onClick4() {
    this.setState({radio2: 4});
  }

  onClick5() {
    this.setState({radio2: 5});
  }

  onClick6() {
    this.setState({radio2: 6});
  }

  onClick7() {
    this.setState({radio3: 7});
  }

  onClick8() {
    this.setState({radio3: 8});
  }

  onClick9() {
    this.setState({radio3: 9});
  }

  handleCheckboxChange() {
    this.setState({checkbox: !this.state.checkbox});
  }

  handleSwitchChange() {
    this.setState({switch: !this.state.switch});
  }

  render () {
    return (
      <Container className="mt-5">
        <h2 className="title mb-5"><strong>Checkboxes</strong></h2>
        <h4 className="mt-5 mb-3">Basic examples</h4>
        <Input label="Classic checkbox" checked={this.state.checkbox} onChange={this.handleCheckboxChange} type="checkbox" id="checkbox" />
        <Input label="Filled-in checkbox" filled type="checkbox" id="checkbox2" />

        <h4 className="mt-5 mb-3">Disabled checkboxes</h4>
        <Input label="Classic checkbox" disabled type="checkbox" id="checkbox3" />
        <Input label="Filled-in checkbox" filled disabled type="checkbox" id="checkbox4" />

        <h4 className="mt-5 mb-3">Inline checkboxes</h4>
          <FormInline>
            <Input label="Classic checkbox" type="checkbox" id="checkbox5" />
            <Input label="Filled-in checkbox" filled type="checkbox" id="checkbox6" />
            <Input label="Classic checkbox" type="checkbox" id="checkbox7" />
          </FormInline>

        <hr className="my-5" />

        <h2 className="title mb-5"><strong>Radio buttons</strong></h2>
        <h4 className="mt-5 mb-3">Basic examples</h4>
        <Input onClick={this.onClick1} checked={this.state.radio === 1 ? true : false} label="Option 1" type="radio" id="radio1" />
        <Input onClick={this.onClick2} checked={this.state.radio === 2 ? true : false} label="Option 2" type="radio" id="radio2" />
        <Input onClick={this.onClick3} checked={this.state.radio === 3 ? true : false} label="Option 3" type="radio" id="radio3" />

        <h4 className="mt-5 mb-3">Radio buttons with gap</h4>
        <Input gap onClick={this.onClick4} checked={this.state.radio2 === 4 ? true : false} label="Option 1" type="radio" id="radio4" />
        <Input gap onClick={this.onClick5} checked={this.state.radio2 === 5 ? true : false} label="Option 2" type="radio" id="radio5" />
        <Input gap onClick={this.onClick6} checked={this.state.radio2 === 6 ? true : false} label="Option 3" type="radio" id="radio6" />

        <h4 className="mt-5 mb-3">Inline radio buttons</h4>
        <FormInline>
          <Input onClick={this.onClick7} checked={this.state.radio3 === 7 ? true : false} label="Option 1" type="radio" id="radio7" />
          <Input onClick={this.onClick8} checked={this.state.radio3 === 8 ? true : false} label="Option 2" type="radio" id="radio8" />
          <Input onClick={this.onClick9} checked={this.state.radio3 === 9 ? true : false} label="Option 3" type="radio" id="radio9" />
        </FormInline>

        <hr className="my-5" />

        <h2 className="title mb-5"><strong>Switch</strong></h2>
        <InputSwitch checked={this.state.switch} onChange={this.handleSwitchChange}></InputSwitch>
        <h4 className="mt-5 mb-3">Disabled</h4>
        <InputSwitch disabled></InputSwitch>

        <hr className="my-5" />

        <h2 className="title mb-5"><strong>File input</strong></h2>
        <h4 className="mt-5 mb-3">Basic example</h4>
        <InputFile></InputFile>

        <h4 className="mt-5 mb-3">Multiple files</h4>
        <InputFile multiple btnColor="info" btn-size="sm"></InputFile>

        <hr className="my-5" />
        
        <h2 className="title mb-5"><strong>Range</strong></h2>
        <InputRange min={0} max={100} value={50}></InputRange>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </Container>
    );
  }
}

export default InputPage;
