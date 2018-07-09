import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Fa, Button, Input } from 'mdbreact';

class ContactPage extends Component {
  render() {
    return(
      <Container>

        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
          <p className="text-center w-responsive mx-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          <Row>
            <Col lg="5" className="lg-0 mb-4">
              <Card>
                <CardBody>
                  <div className="form-header blue accent-1">
                    <h3 className="mt-2"><Fa icon="envelope" /> Write to us:</h3>
                  </div>
                  <p className="dark-grey-text">We'll write rarely, but only the best content.</p>
                  <div className="md-form">
                    <Input icon="user" label="Your name" iconClass="grey-text" type="text" id="form-name" />
                  </div>
                  <div className="md-form">
                    <Input icon="envelope" label="Your email" iconClass="grey-text" type="text" id="form-email" />
                  </div>
                  <div className="md-form">
                    <Input icon="tag" label="Subject" iconClass="grey-text" type="text" id="form-subject" />
                  </div>
                  <div className="md-form">
                    <Input icon="pencil" label="Icon Prefix" iconClass="grey-text" type="textarea" id="form-text" />
                  </div>
                  <div className="text-center">
                    <Button color="light-blue">Submit</Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="7">
              <div id="map-container" className="rounded z-depth-1-half map-container" style={{height: '400px'}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494" width="100%" height="100%" frameBorder="0" style={{border:0}}></iframe>
              </div>
              <br/>
              <Row className="text-center">
                <Col md="4">
                  <Button tag="a" floating color="blue" className="accent-1">
                    <Fa icon="map-marker"/>
                  </Button>
                  <p>New York, 94126</p>
                  <p className="mb-md-0">United States</p>
                </Col>
                <Col md="4">
                  <Button tag="a" floating color="blue" className="accent-1">
                    <Fa icon="phone"/>
                  </Button>
                  <p>+ 01 234 567 89</p>
                  <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
                </Col>
                <Col md="4">
                  <Button tag="a" floating color="blue" className="accent-1">
                    <Fa icon="envelope"/>
                  </Button>
                  <p>info@gmail.com</p>
                  <p className="mb-md-0">sale@gmail.com</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
          <p className="text-center w-responsive mx-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          <Row>
            <Col md="9" className="md-0 mb-5">
              <form>
                <Row>
                  <Col md="6">
                    <div className="md-form mb-0">
                      <Input type="text" id="contact-name" label="Your name" />
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="md-form mb-0">
                      <Input type="text" id="contact-email" label="Your email" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <div className="md-form mb-0">
                      <Input type="text" id="contact-subject" label="Subject" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <div className="md-form mb-0">
                      <Input type="textarea" id="contact-message" label="Your message" />
                    </div>
                  </Col>
                </Row>
              </form>
              <div className="text-center text-md-left">
                <Button color="primary" size="md">Send</Button>
              </div>
            </Col>
            <Col md="3" className="text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <Fa icon="map-marker" size="2x" className="blue-text"/>
                  <p>San Francisco, CA 94126, USA</p>
                </li>
                <li>
                  <Fa icon="phone" size="2x" className="blue-text mt-4"/>
                  <p>+ 01 234 567 89</p>
                </li>
                <li>
                  <Fa icon="envelope" size="2x" className="blue-text mt-4"/>
                  <p>contact@example.com</p>
                </li>
              </ul>
            </Col>              
          </Row>
        </section>

        <section className="contact-section my-5">
          <Card>
            <Row>
              <Col lg="8">
                <CardBody className="form">
                  <h3 className="mt-4">
                    <Fa icon="envelope" className="pr-2"/>Write to us:
                  </h3>
                  <Row>
                    <Col md="6">
                      <div className="md-form mb-0">
                        <Input type="text" id="form-contact-name" label="Your name"/>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="md-form mb-0">
                        <Input type="text" id="form-contact-email" label="Your email"/>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <div className="md-form mb-0">
                        <Input type="text" id="form-contact-phone" label="Your phone"/>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="md-form mb-0">
                        <Input type="text" id="form-contact-company" label="Your company"/>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <div className="md-form mb-0">
                        <Input type="textarea" id="form-contact-message" label="Your message"/>
                        <Button tag="a" floating color="blue" size="lg">
                          <Fa icon="send-o"/>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Col>
              <Col lg="4">
                <CardBody className="contact text-center h-100 white-text">
                  <h3 className="my-4 pb-2">Contact information</h3>
                  <ul className="text-lg-left list-unstyled ml-4">
                    <li>
                      <p><Fa icon="map-marker" className="pr-2"/>New York, 94126 USA</p>
                    </li>
                    <li>
                      <p><Fa icon="phone" className="pr-2"/>+ 01 234 567 89</p>
                    </li>
                    <li>
                      <p><Fa icon="envelope" className="pr-2"/>contact@example.com</p>
                    </li>
                  </ul>
                  <hr className="hr-light my-4"/>
                  <ul className="list-inline text-center list-unstyled">
                    <li className="list-inline-item">
                      <a className="p-2 fa-lg w-ic">
                        <Fa icon="twitter"/>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="p-2 fa-lg w-ic">
                        <Fa icon="linkedin"/>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="p-2 fa-lg w-ic">
                        <Fa icon="instagram"/>
                      </a>
                    </li>
                  </ul>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </section>

      </Container>
    );
  };
}

export default ContactPage;
