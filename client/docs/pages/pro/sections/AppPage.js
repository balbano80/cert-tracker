import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Mask, Row, Col, Fa, Button, View, Container, FormInline } from 'mdbreact';
import './AppPage.css'


class AppPage extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      collapse : false
    }
    this.onClick = this.onClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);
  }

  onClick(){
    this.setState({
        collapse: !this.state.collapse,
    });
  }

  handleNavbarClick(){
    this.setState({
      collapse: false
    });
  }
  render(){
  const navStyle = { marginTop: '4rem'}
  const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent'}} onClick={this.handleNavbarClick}/>
    return (
      <div id="apppage">
        <Router>
          <div>
          <Navbar style={navStyle} dark expand="md" fixed="top">
            <Container>
              <NavbarBrand>
                <strong className="white-text">MDB</strong>
              </NavbarBrand>
              <NavbarToggler onClick = { this.onClick } />
              <Collapse isOpen = {this.state.collapse} navbar>
                <NavbarNav left>
                  <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink to="#!">Link</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                  </NavItem>
                </NavbarNav>
                <NavbarNav right >
                  <NavItem>
                    <FormInline waves>
                      <div className="md-form my-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                      </div>
                    </FormInline>
                  </NavItem>
                </NavbarNav>
              </Collapse>
            </Container>
          </Navbar>
          { this.state.collapse && overlay}
          </div>
        </Router>
          <View>
            <Mask className="d-flex justify-content-center align-items-center gradient">
            <Container>
              <Row>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">Make purchases with our app </h1>
                  <hr className="hr-light"/>
                  <h6 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
                  dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                  iste.</h6>
                  <Button color="white">Download</Button>
                  <Button outline color="white">Learn More</Button>
                </div>
                <Col md="6" xl="5" className="mt-xl-5">
                  <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" className="img-fluid"/>
                </Col>
                </Row>
              </Container>
            </Mask>
          </View>

          <Container>
            <Row className="py-5">
              <Col md="12" className="text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Col>
            </Row>
          </Container>
          </div>
    );
  }
  };

export default AppPage;
