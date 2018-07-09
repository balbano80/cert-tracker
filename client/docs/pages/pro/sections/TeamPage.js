import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Avatar, Mask, Fa, View, Button} from 'mdbreact';

const TeamPage = () =>  {

  return(
    <Container>
      <h2 className="title text-center text-md-left pt-4 mt-5">
        <strong>Team v.1 </strong>
      </h2>
      <Card className="my-5 px-5 pb-5 text-center">
        <CardBody>
          <h2 className="h1-responsive font-weight-bold my-5">Our amazing team</h2>
          <p className="grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          <Row>
            <Col lg="3" md="6"  className="mb-lg-0 mb-5">
              <Avatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" className="rounded-circle z-depth-1 img-fluid" alt="Sample avatar"/>
              <h5 className="font-weight-bold mt-4 mb-3">Anna Williams</h5>
              <p className="text-uppercase blue-text">Graphic designer</p>
              <p className="grey-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci  sed quia non numquam modi tempora eius.</p>
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

            <Col lg="3" md="6"  className="mb-lg-0 mb-5">
              <Avatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" className="rounded-circle z-depth-1 img-fluid" alt="Sample avatar"/>
              <h5 className="font-weight-bold mt-4 mb-3">John Doe</h5>
              <p className="text-uppercase blue-text">Web Developer</p>
              <p className="grey-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem ipsa accusantium doloremque rem laudantium totam aperiam.</p>
              <ul className="list-unstyled mb-0">

                <a className="p-2 fa-lg">
                  <Fa icon="facebook" className="blue-text"/>
                </a>
                <a className="p-2 fa-lg">
                  <Fa icon="instagram" className="blue-text"/>
                </a>
              </ul>
            </Col>

            <Col lg="3" md="6"  className="mb-lg-0 mb-5">
              <Avatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" className="rounded-circle z-depth-1 img-fluid" alt="Sample avatar"/>
              <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
              <p className="text-uppercase blue-text">Photographer</p>
              <p className="grey-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim est fugiat nulla id eu laborum.</p>
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

            <Col lg="3" md="6"  className="mb-lg-0 mb-5">
              <Avatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" className="rounded-circle z-depth-1 img-fluid" alt="Sample avatar"/>
              <h5 className="font-weight-bold mt-4 mb-3">Tom Adams</h5>
              <p className="text-uppercase blue-text">Backend Developer</p>
              <p className="grey-text">Perspiciatis repellendus ad odit consequuntur, eveniet earum nisi qui consectetur totam officia voluptates perferendis voluptatibus aut.</p>
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

      <h2 className="title text-center text-md-left pt-4 mt-5">
        <strong>Team v.2 </strong>
      </h2>
      <Card className="my-5 px-1 pb-5 text-center">
        <CardBody>
          <h2 className="h1-responsive font-weight-bold my-5">Our amazing team</h2>
          <p className="grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          <Row>
            <Col md="4" className="mb-md-0 mb-5">
              <Avatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded z-depth-1-half img-fluid" alt="Sample avatar"/>
              <h4 className="font-weight-bold dark-grey-text my-4">Maria Kate</h4>
              <h6 className="text-uppercase grey-text mb-3">Photographer</h6>
              <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                <Fa icon="facebook"/>
              </Button>
              <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-dribbble">
                <Fa icon="dribbble"/>
              </Button>
              <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
                <Fa icon="twitter"/>
              </Button>
            </Col>

            <Col md="4" className="mb-md-0 mb-5">
              <Avatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" className="rounded z-depth-1-half img-fluid" alt="Sample avatar"/>
              <h4 className="font-weight-bold dark-grey-text my-4">John Doe</h4>
              <h6 className="text-uppercase grey-text mb-3">Front-end Developer</h6>
              <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-email">
                <Fa icon="envelope"/>
              </Button>
              <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                <Fa icon="facebook"/>
              </Button>
              <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-git">
                <Fa icon="github"/>
              </Button>
            </Col>

            <Col md="4" className="mb-md-0 mb-5">
              <Avatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" className="rounded z-depth-1-half img-fluid" alt="Sample avatar"/>
              <h4 className="font-weight-bold dark-grey-text my-4">Sarah Melyah</h4>
              <h6 className="text-uppercase grey-text mb-3">Web Developer</h6>
              <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-li">
                <Fa icon="linkedin"/>
              </Button>
              <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
                <Fa icon="twitter"/>
              </Button>
              <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-pin">
                <Fa icon="pinterest"/>
              </Button>
            </Col>

          </Row>
        </CardBody>
      </Card>

      <h2 className="title text-center text-md-left pt-4 mt-5">
        <strong>Team v.3 </strong>
      </h2>
      <Card className="my-5 px-5 pb-1 text-center">
        <CardBody>
          <h2 className="h1-responsive font-weight-bold my-5">Our amazing team</h2>
          <p className="grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          <Row className="text-md-left">
            <Col lg="6" md="12" className="mb-5">
              <Col md="4" lg="6" className="float-left">
                <Avatar src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid" tag="img" alt="Sample avatar"/>
              </Col>
              <Col md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">John Doe</h4>
                <h6 className="font-weight-bold grey-text mb-3">Web Designer</h6>
                <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p>
                <a className="p-2 fa-lg fb-ic">
                  <Fa icon="facebook"/>
                </a>
                <a className="p-2 fa-lg tw-ic">
                  <Fa icon="twitter"/>
                </a>
                <a className="p-2 fa-lg dribbble-ic">
                  <Fa icon="dribbble"/>
                </a>
              </Col>
            </Col>

            <Col lg="6" md="12" className="mb-5">
              <Col md="4" lg="6" className="float-left">
                <Avatar src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid" tag="img" alt="Sample avatar"/>
              </Col>
              <Col md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Maria Kate</h4>
                <h6 className="font-weight-bold grey-text mb-3">Photographer</h6>
                <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p>
                <a className="p-2 fa-lg fb-ic">
                  <Fa icon="facebook"/>
                </a>
                <a className="p-2 fa-lg yt-ic">
                  <Fa icon="youtube"/>
                </a>
                <a className="p-2 fa-lg ins-ic">
                  <Fa icon="instagram"/>
                </a>
              </Col>
            </Col>

            <Col lg="6" md="12" className="mb-5">
              <Col md="4" lg="6" className="float-left">
                <Avatar src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg" className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid" tag="img" alt="Sample avatar"/>
              </Col>
              <Col md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Anna Deynah</h4>
                <h6 className="font-weight-bold grey-text mb-3">Web Developer</h6>
                <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p>
                <a className="p-2 fa-lg fb-ic">
                  <Fa icon="facebook"/>
                </a>
                <a className="p-2 fa-lg tw-ic">
                  <Fa icon="twitter"/>
                </a>
                <a className="p-2 fa-lg github-ic">
                  <Fa icon="github"/>
                </a>
              </Col>
            </Col>

            <Col lg="6" md="12" className="mb-5">
              <Col md="4" lg="6" className="float-left">
                <Avatar src="https://mdbootstrap.com/img/Photos/Avatars/img%20(29).jpg" className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid" tag="img" alt="Sample avatar"/>
              </Col>
              <Col md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Sarah Melyah</h4>
                <h6 className="font-weight-bold grey-text mb-3">Front-end Developer</h6>
                <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p>
                <a className="p-2 fa-lg gplus-ic">
                  <Fa icon="google-plus"/>
                </a>
                <a className="p-2 fa-lg li-ic">
                  <Fa icon="linkedin"/>
                </a>
                <a className="p-2 fa-lg email-ic">
                  <Fa icon="envelope"/>
                </a>
              </Col>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}

export default TeamPage;
