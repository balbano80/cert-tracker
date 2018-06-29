import React from 'react';
const NavLink = require('react-router-dom').NavLink;

import './HomePage.css';

import { EdgeHeader, FreeBird, Container, Col, CardImage, Row, CardBody, Fa, Button } from 'mdbreact';

class HomePage extends React.Component {
  render(){
    return(
      <div>
        
        <EdgeHeader color="unique-color darken-3" />
        <FreeBird>
          <Row>
            <Col lg="12" className="mx-auto float-none white z-depth-1 py-2 px-2">
            <CardImage top src="http://www.industrialtracker.com/wp-content/uploads/2016/07/hp-slide_01-2.jpg" overlay="white-slight" hover waves alt="Card image cap"/>
                <CardBody>
                <h2 className="h2-responsive text-center"><strong>Adapting in the age of ever changing technology</strong></h2>
                <p className="pb-4 text-center">Deploy solutions quickly, seamlessly and effectively</p>
              </CardBody>

            </Col>
          </Row>
        </FreeBird>
        <Container>
        <section className="my-5">

<h2 className="h1-responsive font-weight-bold text-center my-5">Why is it so great?</h2>
<p className="lead grey-text w-responsive text-center mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

<Row>
  <Col md="6" className="md-0 mb-5">
    <Row>
      <Col lg="2" md="3" size="2">
        <Fa icon="cogs" size="2x" className="blue-text"/>
      </Col>
      <Col lg="10" md="9" size="10">
        <h4 className="font-weight-bold">Our Products</h4>
        <p className="grey-text">Industrial Tracker has a team of full time experienced developers ready to build and deploy 
        applications made to suit your specifications. With our highly skilled team of engineers we can design, build and implement 
        scalable solutions to solve your data tracking headaches.</p>
        <p className="grey-text">We can customize our existing products if needed or work with 
        you one on one to design any application to suit your business needs. Talk to us today to find out more.</p>
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
        <p className="grey-text">Industrial Tracker was born from the potential benefits of streamlining many procesies through bridging current information technology and the oil and gas industry.</p>
        <p className="grey-text">Industrial Tracker draws from a background in information technology and data management combined with experience in the oil and gas industry. Industrial Trackers mission is to improve safety standards while streamlining and consolidating data tracking while also saving time and money for its clients.</p>
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
