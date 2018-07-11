import React from 'react';
const NavLink = require('react-router-dom').NavLink;

import './HomePage.css';

import { EdgeHeader, FreeBird, Container, Col, CardImage, Row, CardBody, Fa, Button,} from 'mdbreact';

class HomePage extends React.Component {
  render(){
    return(
      <div>
        
        <EdgeHeader color="unique-color darken-3" />
        <FreeBird>
          <Row>
            <Col lg="12" className="mx-auto float-none white z-depth-1 py-2 px-2 jumbo-img-container">
            <CardImage top src="https://image.ibb.co/eiiGNT/shutterstock_111119858_2.jpg" overlay="white-slight" hover waves alt="Card image cap" className="img-holder"/>
                <CardBody>
                <h2 className="h2-responsive text-center"><strong>Certification Tracking made simple</strong></h2>
                <p className="pb-4 text-center">Deploy employees quickly, seamlessly and effectively with all certifications in place to do their jobs!</p>
              </CardBody>

            </Col>
          </Row>
        </FreeBird>
        <Container>
        <section className="my-5">
        

<h2 className="h1-responsive font-weight-bold text-center my-5">Why is it so great?</h2>
<p className="lead grey-text w-responsive text-center mx-auto mb-5">CERT Tracker certification tracking software offers a reliable solution that enables companies to assess their risk exposure and certification obligations. Manage, track and report on employee licenses and professional development required by employees in their jobs.</p>

<Row>
  <Col md="6" className="md-0 mb-5">
    <Row>
      <Col lg="2" md="3" size="2">
        <Fa icon="cogs" size="2x" className="blue-text"/>
      </Col>
      <Col lg="10" md="9" size="10">
        <h4 className="font-weight-bold">Our Products</h4>
        <p className="grey-text">CERT Tracker facilitate compliance with regulations and contractual obligations required by core business activities and quickly and accurately provide and verify evidence of certification to vendors, suppliers and government agencies. </p>
        <p className="grey-text">CERT Tracker communicate status of certifications to all interested parties including employees, managers, legal and human resources.Talk to us today to find out more!</p>
        <Button color="blue" size="sm">Learn more</Button>
      </Col>
    </Row>
  </Col>
  <Col md="6" className="md-0 mb-5">
    <Row>
      <Col lg="2" md="3" size="2">
        <Fa icon="dashboard" size="2x" className="blue-text"/>
      </Col>
      <Col lg="10" md="9" size="10">
        <h4 className="font-weight-bold">Our Mission</h4>
        <p className="grey-text">CERT Tracker was born from the potential benefits of streamlining many processies through bridging current information technology and industry certifications.</p>
        <p className="grey-text">CERT Tracker draws from a background in information technology and data management. Our mission is to improve safety standards while streamlining and consolidating data tracking of required industry certifications. </p>
        <Button color="blue" size="sm">Learn more</Button>
      </Col>
    </Row>
  </Col>
</Row>

</section>
        </Container>
      </div>
    );
  }
}

export default HomePage;
