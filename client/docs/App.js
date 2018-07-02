import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, Footer, NavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.png';
import './index.css';

import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      collapsed: false,
      dropdownOpen: false
    };
    this.handleTogglerClick = this.handleTogglerClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleTogglerClick(){
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleNavbarClick(){
    this.setState({
      collapsed: false
    });
  }

  toggle() {
    this.setState({
        dropdownOpen: !this.state.dropdownOpen
    });
}

  render() {
    const collapsed = this.state.collapsed;
    const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent'}} onClick={this.handleNavbarClick}/>
    return (
      <Router>
        <div className="flyout">
          <Navbar color="blue-grey lighten-5" light expand="md" fixed="top" scrolling>
            <NavbarBrand href="/">
              <img src={logo} alt="" height="50" className="mt-1" />
            </NavbarBrand>
            <NavbarToggler onClick={this.handleTogglerClick}/>
            <Collapse isOpen={this.state.collapsed} navbar>
              <NavbarNav right>
                <NavItem>
                  <NavLink to="/" onClick={this.handleNavbarClick}>Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.handleNavbarClick} to="/signup">Signup</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.handleNavbarClick} to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.handleNavbarClick} to="/employeeform">Employee Form</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.handleNavbarClick} to="/dashboard">Dashboard</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.handleNavbarClick} to="/aboutus">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.handleNavbarClick} to="/css">CSS</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.handleNavbarClick} to="/components">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.handleNavbarClick} to="/advanced">Advanced</NavLink>
                </NavItem>
                {/* PRO */}
                <NavItem>
                  <NavLink onClick={this.handleNavbarClick} to="/sections">Sections</NavLink>
                </NavItem>
                <NavItem>
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={()=>"baba"} onMouseEnter={this.toggle} onMouseLeave={this.toggle}>
                    <DropdownToggle nav caret> <div className="d-none d-md-inline">Dropdown</div></DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem href="#!">Action</DropdownItem>
                      <DropdownItem href="#!">Another Action</DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                      <DropdownItem href="/sections">Sections</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
            { collapsed && overlay}
          <main style={{marginTop: '4rem'}}>
            <Routes />
          </main>

          <Footer color="blue-grey">
            <p className="footer-copyright mb-0 py-3 text-center">
              &copy; {(new Date().getFullYear())} Copyright: <a href=""> Certificate Tracker</a>
            </p>
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
