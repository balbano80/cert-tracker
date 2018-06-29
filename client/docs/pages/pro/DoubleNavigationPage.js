import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, NavbarNav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Fa, SideNavItem, SideNavCat, SideNavNav, SideNav } from 'mdbreact';


class TestPage extends React.Component  {
constructor(props) {
    super(props);
    this.state = {
        collapse: false,
        isWideEnough: false,
        dropdownOpen: false,
        toggleStateA: false,
        accordion: false,
        collapsed: false,
    };
this.onClick = this.onClick.bind(this);
this.toggle = this.toggle.bind(this);
this.onClick0 = this.onClick0.bind(this);
this.onClick1 = this.onClick1.bind(this);
this.onClick2 = this.onClick2.bind(this);
this.onClick3 = this.onClick3.bind(this);
this.handleToggleClickA = this.handleToggleClickA.bind(this);
}

onClick0(){
  let state = '';

  if (this.state.accordion !== 0) {
    state = 0;
  } else {
    state = false;
  }

  this.setState({
    collapse: !this.state.collapse,
    accordion: state});
}

onClick1(){
  let state = '';

  if (this.state.accordion !== 1) {
    state = 1;
  } else {
    state = false;
  }

  this.setState({
    collapse: !this.state.collapse,
    accordion: state});
}

onClick2(){
  let state = '';

  if (this.state.accordion !== 2) {
    state = 2;
  } else {
    state = false;
  }

  this.setState({
    collapse: !this.state.collapse,
    accordion: state});
}

onClick3(){
  let state = '';

  if (this.state.accordion !== 3) {
    state = 3;
  } else {
    state = false;
  }

  this.setState({
    collapse: !this.state.collapse,
    accordion: state});
}

onClick4(){
  let state = '';

  if (this.state.accordion !== 4) {
    state = 4;
  } else {
    state = false;
  }

  this.setState({
    collapse: !this.state.collapse,
    accordion: state});
}


// Slide out buttons event handlers
handleToggleClickA(){
  this.setState({
    toggleStateA: !this.state.toggleStateA
  })
}
onClick(){
    this.setState({
        collapse: !this.state.collapse,
    });
}

toggle() {
    this.setState({
        dropdownOpen: !this.state.dropdownOpen
    });
}

render() {
  const isOpenWithButtonA = this.state.toggleStateA;
  const divstyle = {width: "50%", display: "inline-block"}
  const button1 = <div href="#!" onClick={this.handleToggleClickA} key="sideNavToggleA"><Fa icon="bars" color="white" size="2x"></Fa></div>
  const specialCaseNavbarStyles = {WebkitBoxOrient: 'horizontal', flexDirection: 'row'};
    return (
        <Router>
          <div className="mt-5">
            <SideNav logo="https://mdbootstrap.com/img/logo/mdb-transparent.png" isOpenWithButton={isOpenWithButtonA} breakWidth={1300} className="deep-purple darken-2" hidden>
              <li>
                <ul className="social">
                  <li><a href="#!"><Fa icon="facebook"></Fa></a></li>
                  <li><a href="#!"><Fa icon="pinterest"></Fa></a></li>
                  <li><a href="#!"><Fa icon="google-plus"></Fa></a></li>
                  <li><a href="#!"><Fa icon="twitter"></Fa></a></li>
                </ul>
              </li>
              <SideNavNav>
                <SideNavCat name="Submit blog" onClick={this.onClick0} isOpen={this.state.accordion === 0 } icon="chevron-right">
                    <SideNavItem>Submit listing</SideNavItem>
                    <SideNavItem>Registration form</SideNavItem>
                </SideNavCat>
                <SideNavCat name="Instruction" onClick={this.onClick1} isOpen={this.state.accordion === 1 } icon="hand-pointer-o">
                  <SideNavItem>For bloggers</SideNavItem>
                  <SideNavItem>For authors</SideNavItem>
                </SideNavCat>
                <SideNavCat name="About" onClick={this.onClick2} isOpen={this.state.accordion === 2 } icon="eye">
                  <SideNavItem>Instruction</SideNavItem>
                  <SideNavItem>Monthly meetings</SideNavItem>
                </SideNavCat>
                <SideNavCat name="Contact me" onClick={this.onClick3} isOpen={this.state.accordion === 3 } icon="envelope-o">
                  <SideNavItem>FAQ</SideNavItem>
                  <SideNavItem>Write a message</SideNavItem>
                </SideNavCat>
              </SideNavNav>
            </SideNav>
            <Navbar color="deep-purple darken-3" dark expand="md">
              <NavbarNav left>
                <NavItem>
                  <div className="text-white" style={divstyle}>
                    {button1}
                  </div>
                </NavItem>
              </NavbarNav>
              <NavbarNav right style={specialCaseNavbarStyles}>
                <NavItem active>
                    <NavLink to="#!"><Fa icon="envelope" className="d-inline-inline"/>  <div className="d-none d-md-inline">Contact</div></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="#!"><Fa icon="comments-o" className="d-inline-inline"/> <div className="d-none d-md-inline">Support</div></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="#!"><Fa icon="user" className="d-inline-inline"/>  <div className="d-none d-md-inline">Account</div></NavLink>
                </NavItem>
                <NavItem>
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={()=>"baba"} onMouseEnter={this.toggle} onMouseLeave={this.toggle}>
                    <DropdownToggle nav caret> <div className="d-none d-md-inline">Dropdown</div></DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem href="#!">Action</DropdownItem>
                      <DropdownItem href="#!">Another Action</DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              </NavbarNav>
            </Navbar>
          </div>
        </Router>
    );
  }
};

export default TestPage;
