import React, { Component } from 'react';
import { Container, Row, Col, Fa, Button } from 'mdbreact';

class FeaturesPage extends Component {
  render() {
    return(
      <Container>

        <section className="text-center my-5">

          <h2 className="h1-responsive font-weight-bold my-5">Why is it so great?</h2>
          <p className="lead grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

          <Row>
            <Col md="4">
              <Fa icon="area-chart" size="3x" className="red-text"/>
              <h5 className="font-weight-bold my-4">Analytics</h5>
              <p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
            </Col>
            <Col md="4">
              <Fa icon="book" size="3x" className="cyan-text"/>
              <h5 className="font-weight-bold my-4">Tutorials</h5>
              <p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
            </Col>
            <Col md="4">
              <Fa icon="comments-o" size="3x" className="orange-text"/>
              <h5 className="font-weight-bold my-4">Support</h5>
              <p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
            </Col>
          </Row>


        </section>

        <section className="my-5">

          <h2 className="h1-responsive font-weight-bold text-center my-5">Why is it so great?</h2>
          <p className="lead grey-text w-responsive text-center mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

          <Row>
            <Col md="4" className="md-0 mb-5">
              <Row>
                <Col lg="2" md="3" size="2">
                  <Fa icon="bullhorn" size="2x" className="blue-text"/>
                </Col>
                <Col lg="10" md="9" size="10">
                  <h4 className="font-weight-bold">Marketing</h4>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  <Button color="primary" size="sm">Learn more</Button>
                </Col>
              </Row>
            </Col>
            <Col md="4" className="md-0 mb-5">
              <Row>
                <Col lg="2" md="3" size="2">
                  <Fa icon="cogs" size="2x" className="pink-text"/>
                </Col>
                <Col lg="10" md="9" size="10">
                  <h4 className="font-weight-bold">Customization</h4>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  <Button color="pink" size="sm">Learn more</Button>
                </Col>
              </Row>
            </Col>
            <Col md="4" className="md-0 mb-5">
              <Row>
                <Col lg="2" md="3" size="2">
                  <Fa icon="dashboard" size="2x" className="purple-text"/>
                </Col>
                <Col lg="10" md="9" size="10">
                  <h4 className="font-weight-bold">Support</h4>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  <Button color="purple" size="sm">Learn more</Button>
                </Col>
              </Row>
            </Col>
          </Row>

        </section>


        <section className="my-5">

          <h2 className="h1-responsive font-weight-bold text-center my-5">Why is it so great?</h2>
          <p className="lead grey-text w-responsive text-center mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

          <Row>
            <Col lg="5" className="text-center text-lg-left">
              <img  className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg" alt="Sample image" />
            </Col>
            <Col lg="7">
              <Row className="mb-3">
                <Col size="1">
                  <Fa icon="mail-forward" size="lg" className="indigo-text"/>
                </Col>
                <Col xl="10" md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Safety</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam assumenda deleniti hic.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="1">
                  <Fa icon="mail-forward" size="lg" className="indigo-text"/>
                </Col>
                <Col xl="10" md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Technology</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam assumenda deleniti hic.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="1">
                  <Fa icon="mail-forward" size="lg" className="indigo-text"/>
                </Col>
                <Col xl="10" md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Finance</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam assumenda deleniti hic.</p>
                </Col>
              </Row>
            </Col>
          </Row>

        </section>

        <section className="my-5">

          <h2 className="h1-responsive font-weight-bold text-center my-5">Why is it so great?</h2>
          <p className="lead grey-text w-responsive text-center mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

          <Row>
            <Col md="4">
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="flag-checkered" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">International</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="flask" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">Experimental</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="glass" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">Relaxing</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                </Col>
              </Row>
            </Col>
            <Col md="4" className="text-name">
              <img className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png" alt="Sample image" />
            </Col>
            <Col md="4">
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="heart" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">Beloved</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="flash" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">Rapid</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="magic" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">Magical</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                </Col>
              </Row>
            </Col>
          </Row>


        </section>

      </Container>
    );
  };
}

export default FeaturesPage;
