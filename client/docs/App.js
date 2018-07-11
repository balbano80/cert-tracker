import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, Footer, NavLink, Fa, Row, Col, Container } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.png';
import './index.css';
import axios from "axios"

import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      collapsed: false,
      dropdownOpen: false,
      isLoggedIn: false
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
componentDidMount(){
  axios.get("/api/user_data")
  .then(res => {
    // console.log("user?", res);
    if (res.data.email){
      this.setState({isLoggedIn : true});
      // console.log(this.state.isLoggedIn);
    }
    else{
      // console.log(this.state.isLoggedIn);
    }
  })

}

handleLogOut(){
  console.log("in handleLogout block");
  axios.get("/logout")
    .then(res =>{
      this.setState({isLoggedIn: false});
      // console.log(this.state.isLoggedIn);
    })
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
                  {this.state.isLoggedIn ? 
                    <NavLink onClick={(event) => {this.handleLogOut(); this.handleNavbarClick;}} to="/">Logout</NavLink>
                  :
                    <NavLink onClick={this.handleNavbarClick} to="/login">Login</NavLink>
                  }
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
                    <NavLink to="#!"><Fa icon="user" className="d-inline-inline"/>  <div className="d-none d-md-inline">My Account</div></NavLink>
                </NavItem>
                
              </NavbarNav>
            </Collapse>
          </Navbar>
            { collapsed && overlay}
          <main style={{marginTop: '4rem'}}>
            <Routes />
          </main>

          <Footer color="mdb-color" className="font-small lighten-3 pt-4 mt-4">
          <Container className="text-center text-md-left">
            <Row className="my-4">
              <Col md="4" lg="4">
                <h5 className="text-uppercase mb-4 font-weight-bold">CERTIFICATION TRACKER</h5>
                <p>Tracker certification tracking software offers a reliable solution that enables companies to assess their risk exposure and certification obligations. </p>
                <p>Manage, track and report on employee licenses and professional development required by employees in their jobs. </p>
              </Col>
              <hr className="clearfix w-100 d-md-none"/>
              <Col md="2" lg="2" className="ml-auto">
                <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
                <ul className="list-unstyled">
                  <p><a href="#!">PROJECTS</a></p>
                  <p><a href="#!">ABOUT US</a></p>
                  <p><a href="#!">BLOG</a></p>
                  <p><a href="#!">AWARDS</a></p>
                </ul>
              </Col>
              <hr className="clearfix w-100 d-md-none"/>
              <Col md="5" lg="3">
                <h5 className="text-uppercase mb-4 font-weight-bold">ADDRESS</h5>
                <p><i className="fa fa-home mr-3"></i> 1995 University Ave</p>
                <p><i className="fa fa-home mr-3"></i> Berkeley, CA 94704, US</p>
                <p><i className="fa fa-envelope mr-3"></i> info@certtracker.com</p>
                <p><i className="fa fa-phone mr-3"></i> 510-642-4111</p>
              </Col>
              <hr className="clearfix w-100 d-md-none"/>
              <Col md="2" lg="2" className="text-center">
                <h5 className="text-uppercase mb-4 font-weight-bold">CONTACT</h5>
                <div className="mt-2 ">
                  <a type="button" className="btn-floating btn-small btn-fb"><i className="fa fa-facebook"></i></a>
                  <a type="button" className="btn-floating btn-small btn-tw"><i className="fa fa-twitter"></i></a>
                  <a type="button" className="btn-floating btn-small btn-gplus"><i className="fa fa-google-plus"></i></a>
                  <a type="button" className="btn-floating btn-small btn-dribbble"><i className="fa fa-dribbble"></i></a>
                </div>
              </Col>
              <hr className="clearfix w-100 d-md-none"/>
            </Row>
          </Container>
          <div className="footer-copyright text-center py-3">
            <Container fluid>
                &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> CertTracker.com </a>
            </Container>
          </div>
        </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
