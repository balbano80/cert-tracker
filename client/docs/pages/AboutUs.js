import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Avatar, Mask, Fa, View, Button} from 'mdbreact';

const AboutUs = () =>  {
  return(
    <Container>
      <h2 className="title text-center text-md-left pt-4 mt-5">
        <strong>Team v.1 </strong>
      </h2>
      <Card className="my-5 px-5 pb-5 text-center">
        <CardBody>
          <h2 className="h1-responsive font-weight-bold my-5">Our amazing team</h2>
          <p className="grey-text w-responsive mx-auto mb-5"></p>
          <Row>
            <Col lg="4" md="6"  className="mb-lg-0 mb-5">
              <Avatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" className="rounded-circle z-depth-1 img-fluid" alt="Sample avatar"/>
              <h5 className="font-weight-bold mt-4 mb-3">Mike White</h5>
              <p className="text-uppercase blue-text">Lead Full Stack Web Developer</p>
              <p className="grey-text"></p>
              <ul className="list-unstyled mb-0">

                <a className="p-2 fa-lg">
                  <Fa icon="facebook" className="blue-text"/>
                </a>
                <a className="p-2 fa-lg">
                  <Fa icon="twitter" className="blue-text"/>
                </a>
                <a className="p-2 fa-lg">
                  <Fa icon="instagram" className="blue-text"/>
                </a>
              </ul>
            </Col>

            <Col lg="4" md="6"  className="mb-lg-0 mb-5">
              <Avatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" className="rounded-circle z-depth-1 img-fluid" alt="Sample avatar"/>
              <h5 className="font-weight-bold mt-4 mb-3">Rishi Mehta</h5>
              <p className="text-uppercase blue-text">Project Manager/Full Stack Web Developer</p>
              <p className="grey-text"></p>
              <ul className="list-unstyled mb-0">

                <a className="p-2 fa-lg">
                  <Fa icon="facebook" className="blue-text"/>
                </a>
                <a className="p-2 fa-lg">
                  <Fa icon="instagram" className="blue-text"/>
                </a>
              </ul>
            </Col>

            <Col lg="4" md="12"  className="mb-lg-0 mb-5">
              <Avatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" className="rounded-circle z-depth-1 img-fluid" alt="Sample avatar"/>
              <h5 className="font-weight-bold mt-4 mb-3">Bryan Albano</h5>
              <p className="text-uppercase blue-text">Full Stack Web Developer</p>
              <p className="grey-text"></p>
              <ul className="list-unstyled mb-0">

                <a className="p-2 fa-lg">
                  <Fa icon="facebook" className="blue-text"/>
                </a>
                <a className="p-2 fa-lg">
                  <Fa icon="instagram" className="blue-text"/>
                </a>
                <a className="p-2 fa-lg">
                  <Fa icon="dribbble" className="blue-text"/>
                </a>
              </ul>
            </Col>

            <Col lg="2" className="mb-lg-0 mb-5">
            </Col>

            <Col lg="4" md="6"  className="mb-lg-0 mb-5">
              <Avatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" className="rounded-circle z-depth-1 img-fluid" alt="Sample avatar"/>
              <h5 className="font-weight-bold mt-4 mb-3">Sophie Obayashi</h5>
              <p className="text-uppercase blue-text">Full Stack Web Developer</p>
              <p className="grey-text"></p>
              <ul className="list-unstyled mb-0">

                <a className="p-2 fa-lg">
                  <Fa icon="facebook" className="blue-text"/>
                </a>
                <a className="p-2 fa-lg">
                  <Fa icon="github" className="blue-text"/>
                </a>
              </ul>
            </Col>


             <Col lg="4" md="6"  className="mb-lg-0 mb-5">
              <Avatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" className="rounded-circle z-depth-1 img-fluid" alt="Sample avatar"/>
              <h5 className="font-weight-bold mt-4 mb-3">Byron Sosa</h5>
              <p className="text-uppercase blue-text">Full Stack Web Developer</p>
              <p className="grey-text"></p>
              <ul className="list-unstyled mb-0">

                <a className="p-2 fa-lg">
                  <Fa icon="facebook" className="blue-text"/>
                </a>
                <a className="p-2 fa-lg">
                  <Fa icon="github" className="blue-text"/>
                </a>
              </ul>
            </Col>

          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}

export default AboutUs;