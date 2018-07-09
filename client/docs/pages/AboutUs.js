import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Avatar, Mask, Fa, View, Button} from 'mdbreact';

const AboutUs = () =>  {
  return(
    <Container>
      <h2 className="title text-center text-md-left pt-4 mt-5">
        <strong>Team Climba </strong>
      </h2>
      <Card className="my-5 px-5 pb-5 text-center">
        <CardBody>
          <h2 className="h1-responsive font-weight-bold my-5">Our amazing team</h2>
          <p className="grey-text w-responsive mx-auto mb-5"></p>
          <Row>
            <Col lg="4" md="6"  className="mb-lg-0 mb-5">
              <Avatar tag="img" src="https://avatars0.githubusercontent.com/u/13720778?s=460&v=4" className="rounded-circle z-depth-1 img-fluid" alt="Sample avatar"/>
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
              <Avatar tag="img" src="https://media.licdn.com/dms/image/C4E03AQGFqdIWqnhrRg/profile-displayphoto-shrink_200_200/0?e=1536796800&v=beta&t=jjNblhRh2v8OPHX5lwJKZuRYk-WepFBB1tVeZZOhcn4" className="rounded-circle z-depth-1 img-fluid" alt="Sample avatar"/>
              <h5 className="font-weight-bold mt-4 mb-3">Rishi Mehta</h5>
              <p className="text-uppercase blue-text">Project Manager/Front-End Web Developer</p>
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
              <Avatar tag="img" src="https://media.licdn.com/dms/image/C4E03AQEOPGEZyFazwA/profile-displayphoto-shrink_800_800/0?e=1536796800&v=beta&t=n4-NnlXXkrCtzLWudiZa1qw-k6IbQva9tXMCv4iYtJg" className="rounded-circle z-depth-1 img-fluid" alt="Sample avatar"/>
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
              <Avatar tag="img" src="https://media.licdn.com/dms/image/C4E03AQGnHZpp6iGCzQ/profile-displayphoto-shrink_800_800/0?e=1536796800&v=beta&t=Tfui8dW2i8ZTj_s46cCRSCLpnNwT0tQyMoVYaI4CS_M" className="rounded-circle z-depth-1 img-fluid" alt="Sample avatar"/>
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
              <Avatar tag="img" src="https://media.licdn.com/dms/image/C5603AQEudTckWdji5g/profile-displayphoto-shrink_800_800/0?e=1536796800&v=beta&t=jwmh0nW7dCbbEc_CkjBN3_g6sz3XxJ4KlRPBHu40z04" className="rounded-circle z-depth-1 img-fluid" alt="Sample avatar"/>
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