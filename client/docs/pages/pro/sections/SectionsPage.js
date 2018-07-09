import React from 'react';
import { Container, Row, Col, Jumbotron, Fa } from 'mdbreact';
const NavLink = require('react-router-dom').NavLink;

class SectionsPage extends React.Component {
  render(){
    return(
      <Container>
        <Row>
          <Col md="8" className="mt-3 mx-auto">
            <Jumbotron>
              <h1><Fa icon="code" className="grey-text" /> Sections</h1>
              <ul className="list-unstyled example-components-list">
                <h5 className="grey-text">Intros </h5>
                <li>
                  <NavLink to="/pro/sections/app">App intro <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/pro/sections/contactform">Contact Form intro <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/pro/sections/classicform">Classic Register Form intro <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/pro/sections/videobackground">Video Background intro <Fa icon="angle-right" /></NavLink>
                </li>
                <br/>
                <li>
                  <NavLink to="/pro/sections/contact">Contact <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/pro/sections/blog">Blog <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/pro/sections/ecommerce">E-commerce <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/pro/sections/features">Features <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/pro/sections/magazine">Magazine <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/pro/sections/projects">Projects <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/pro/sections/social">Social <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/pro/sections/team">Team <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/pro/sections/testimonials">Testimonials <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/pro/sections/testimonialsMulti">Testimonials Multi Item <Fa icon="angle-right" /></NavLink>
                </li>
              </ul>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SectionsPage;
