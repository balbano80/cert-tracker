import React, { Component } from 'react';
import { Container, Row, Col, View, Mask, CardBody, Button, Fa, Card } from 'mdbreact';

class ProjectsPage extends Component {
  render() {
    return(
      <Container>

        <section className="text-center my-5">

          <h2 className="h1-responsive font-weight-bold my-5">Our best projects</h2>
          <p className="grey-text w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit est laborum.</p>

          
          <Row className="text-center">
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <View className="overlay rounded z-depth-1" waves>
                <img src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg" alt="sample photo" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <h4 className="font-weight-bold my-3">Title of the news</h4>
                <p className="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
                <Button color="indigo" size="sm"><Fa icon="clone" className="left"/> View project</Button>
              </CardBody>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <View className="overlay rounded z-depth-1" waves>
                <img src="https://mdbootstrap.com/img/Photos/Others/project4.jpg" alt="sample photo" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <h4 className="font-weight-bold my-3">Title of the news</h4>
                <p className="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
                <Button color="indigo" size="sm"><Fa icon="clone" className="left"/> View project</Button>
              </CardBody>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <View className="overlay rounded z-depth-1" waves>
                <img src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg" alt="sample photo" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <h4 className="font-weight-bold my-3">Title of the news</h4>
                <p className="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
                <Button color="indigo" size="sm"><Fa icon="clone" className="left"/> View project</Button>
              </CardBody>
            </Col>
          </Row>

        </section>


        <section className="text-center my-5">

          <h2 className="h1-responsive font-weight-bold my-5">Our best projects</h2>
          <p className="grey-text w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit est laborum.</p>

          
          <Row className="d-flex justify-content-center">
            <Col md="6" xl="5" className="mb-4">
              <View className="overlay rounded z-depth-2" waves>
                <img src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg" alt="sample photo" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <a href="" className="green-text"><h5 className="font-weight-bold mt-2 mb-3"><Fa icon="line-chart" className="pr-2"/>Marketing</h5></a>
                <h4 className="font-weight-bold mb-3">Title of the news</h4>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident voluptatem quia numquam.</p>
                <Button color="success" rounded>View more</Button>
              </CardBody>
            </Col>
            <Col md="6" xl="5" className="mb-4">
              <View className="overlay rounded z-depth-2" waves>
                <img src="https://mdbootstrap.com/img/Photos/Others/images/19.jpg" alt="sample photo" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <a href="" className="blue-text"><h5 className="font-weight-bold mt-2 mb-3"><Fa icon="eye" className="pr-2"/>Entertainment</h5></a>
                <h4 className="font-weight-bold mb-3">Title of the news</h4>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident voluptatem quia numquam.</p>
                <Button color="success" rounded>View more</Button>
              </CardBody>
            </Col>
            <Col md="6" xl="5" className="mb-4">
              <View className="overlay rounded z-depth-2" waves>
                <img src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" alt="sample photo" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <a href="" className="brown-text"><h5 className="font-weight-bold mt-2 mb-3"><Fa icon="camera" className="pr-2"/>Travel</h5></a>
                <h4 className="font-weight-bold mb-3">Title of the news</h4>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident voluptatem quia numquam.</p>
                <Button color="success" rounded>View more</Button>
              </CardBody>
            </Col>
            <Col md="6" xl="5" className="mb-4">
              <View className="overlay rounded z-depth-2" waves>
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg" alt="sample photo" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <a href="" className="cyan-text"><h5 className="font-weight-bold mt-2 mb-3"><Fa icon="phone" className="pr-2"/>Technology</h5></a>
                <h4 className="font-weight-bold mb-3">Title of the news</h4>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident voluptatem quia numquam.</p>
                <Button color="success" rounded>View more</Button>
              </CardBody>
            </Col>
          </Row>

        </section>

        <section className="my-5">

          <h2 className="h1-responsive font-weight-bold text-center my-5">Our best projects</h2>
          <p className="grey-text w-responsive text-center mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit est laborum.</p>

          <Row>
            <Col lg="5" className="mb-lg-0 mb-5">
              <img src="https://mdbootstrap.com/img/Photos/Others/images/83.jpg" alt="Sample project image" className="img-fluid rounded z-depth-1" />
            </Col>
            <Col lg="7">
              <Row className="mb-3">
                <Col md="1" size="2">
                  <Fa icon="bar-chart" size="2x" className="indigo-text"/>
                </Col>
                <Col md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Marketing</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores nam, aperiam minima elit assumenda voluptate velit.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md="1" size="2">
                  <Fa icon="music" size="2x" className="pink-text"/>
                </Col>
                <Col md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Entertainment</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores nam, aperiam minima elit assumenda voluptate velit.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md="1" size="2">
                  <Fa icon="smile-o" size="2x" className="blue-text"/>
                </Col>
                <Col md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Communication</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores nam, aperiam minima elit assumenda voluptate velit.</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr className="my-5"/>
          <Row>
            <Col lg="7">
              <Row className="mb-3">
                <Col md="1" size="2">
                  <Fa icon="book" size="2x" className="cyan-text"/>
                </Col>
                <Col md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Education</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores nam, aperiam minima elit assumenda voluptate velit.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md="1" size="2">
                  <Fa icon="code" size="2x" className="red-text"/>
                </Col>
                <Col md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Technology</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores nam, aperiam minima elit assumenda voluptate velit.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md="1" size="2">
                  <Fa icon="money" size="2x" className="deep-purple-text"/>
                </Col>
                <Col md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Finance</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores nam, aperiam minima elit assumenda voluptate velit.</p>
                </Col>
              </Row>
            </Col>
            <Col lg="5">
              <img src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg" alt="Sample project image" className="img-fluid rounded z-depth-1"/>
            </Col>             
          </Row>

        </section>

        <section className="text-center my-5">

          <h2 className="h1-responsive font-weight-bold my-5">Our best projects</h2>
          <p className="grey-text w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit est laborum.</p>

          <Row>
            <Col md="12" className="mb-4">
              <Card className="card-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg)'}}>
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                  <div>
                    <h6 className="purple-text">
                      <Fa icon="plane"></Fa><strong> Travel</strong>
                    </h6>
                    <h3 className="py-3 font-weight-bold">
                      <strong>This is card title</strong>
                    </h3>
                    <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!</p>
                    <Button color="secondary" rounded size="md"><Fa icon="clone" className="left"/> View project</Button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md="6" className="md-0 mb-4">
              <Card className="card-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)'}}>
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                  <div>
                    <h6 className="pink-text">
                      <Fa icon="pie-chart"></Fa><strong> Marketing</strong>
                    </h6>
                    <h3 className="py-3 font-weight-bold">
                      <strong>This is card title</strong>
                    </h3>
                    <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!</p>
                    <Button color="pink" rounded size="md"><Fa icon="clone" className="left"/> View project</Button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md="6" className="md-0 mb-4">
              <Card className="card-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)'}}>
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                  <div>
                    <h6 className="green-text">
                      <Fa icon="eye"></Fa><strong> Entertainment</strong>
                    </h6>
                    <h3 className="py-3 font-weight-bold">
                      <strong>This is card title</strong>
                    </h3>
                    <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!</p>
                    <Button color="success" rounded size="md"><Fa icon="clone" className="left"/> View project</Button>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>

        </section>

      </Container>
    );
  };
}

export default ProjectsPage;
