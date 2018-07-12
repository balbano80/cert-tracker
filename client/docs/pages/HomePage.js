import React from 'react';
const NavLink = require('react-router-dom').NavLink;
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

import './HomePage.css';

import { Container, Col, Row, Fa, Button } from 'mdbreact';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        {/* <!--Carousel Wrapper--> */}
        <div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel">
          {/* <!--Indicators--> */}
          <ol class="carousel-indicators">
            <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-2" data-slide-to="1"></li>
            <li data-target="#carousel-example-2" data-slide-to="2"></li>
          </ol>
          {/* <!--/.Indicators--> */}
          {/* <!--Slides--> */}
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <div class="view">
                <img class="d-block w-100" src="https://image.ibb.co/e2ixE8/hp_slide_01_2.jpg" alt="First slide" />
                <div class="mask rgba-black-light"></div>
              </div>
              <div class="carousel-caption caption1">
                <h1 class="carousel-title">Certification Tracking made simple</h1>
                <h5 class="carousel-subtitle">Deploy employees quickly, seamlessly and effectively with all certifications in place to do their jobs!</h5>
              </div>
            </div>
            <div class="carousel-item">
              {/* <!--Mask color--> */}
              <div class="view">
                <img class="d-block w-100" src="https://image.ibb.co/bBBTMo/medical.jpg" alt="Second slide" />
                <div class="mask rgba-black-slight"></div>
              </div>
              <div class="carousel-caption caption2">
                <h1>Certification Tracking made simple</h1>
                <h5 class="caption2-text">Deploy employees quickly, seamlessly and effectively with all certifications in place to do their jobs!</h5>
              </div>
            </div>
            <div class="carousel-item">
              {/* <!--Mask color--> */}
              <div class="view">
                <img class="d-block w-100" src="https://image.ibb.co/cNBju8/hp_slide_03_1.jpg" alt="Third slide" />
                <div class="mask rgba-black-slight"></div>
              </div>
              <div class="carousel-caption caption3">
                <h1 class="carousel-title">Certification Tracking made simple</h1>
                <h5 class="carousel-subtitle">Deploy employees quickly, seamlessly and effectively with all certifications in place to do their jobs!</h5>
              </div>
            </div>
          </div>
          {/* <!--/.Slides--> */}
          {/* <!--Controls--> */}
          <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
          {/* <!--/.Controls--> */}
        </div>
        {/* <!--/.Carousel Wrapper--> */}

        <Container>
          <section className="my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">Why is it so great?</h2>
            <p className="lead grey-text w-responsive text-center mx-auto mb-5">CERT Tracker certification tracking software offers a reliable solution that enables companies to assess their risk exposure and certification obligations. Manage, track and report on employee licenses and professional development required by employees in their jobs.</p>

            <Row>
              <Col md="6" className="md-0 mb-5">
                <Row>
                  <Col lg="2" md="3" size="2">
                    <Fa icon="cogs" size="2x" className="blue-text" />
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
                    <Fa icon="dashboard" size="2x" className="blue-text" />
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
