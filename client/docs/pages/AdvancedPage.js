import React from 'react';
import { Container, Row, Col, Jumbotron, Fa, Badge } from 'mdbreact';
const NavLink = require('react-router-dom').NavLink;

class AdvancedPage extends React.Component {
  render(){
    return(
      <Container>
        <Row>
          <Col md="8" className="mt-3 mx-auto">
            <Jumbotron>
              <h1><Fa icon="code" className="grey-text" /> Advanced</h1>
              <ul className="list-unstyled example-components-list">
                <h6 className="mt-3 grey-text">FREE </h6>
                <li>
                  <NavLink to="/advanced/carousel">Carousel <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/charts">Charts <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/collapse">Collapse <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/modal">Modal <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/videocarousel">Video Carousel <Fa icon="angle-right" /></NavLink>
                </li>
                <h6 className="mt-3 grey-text">PRO </h6>
                <li>
                  <NavLink to="/advanced/pro/charts">Charts <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/pro/collapse">Accordion <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/pro/datepicker">Date picker <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/pro/lightbox">Lightbox <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/pro/select">Material Select <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/pro/multicarousel">Multi-item Carousel <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/pro/scrollbar">ScrollBar <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/pro/scrollspy">ScrollSpy <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/pro/sidenav">SideNav <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/pro/sticky">Sticky Content <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/pro/timepicker">Time picker <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/pro/thumbnailscarousel">Thumbnails Carousel <Fa icon="angle-right" /></NavLink>
                </li>
              </ul>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AdvancedPage;
