import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import './Forms.css';

class FormsPage extends React.Component  {
  render() {
    return(
      <Container className="mt-5">
        <section className="form-elegant">
          <h2 className="mb-5">Form elegant</h2>
          <Row>
            <Col md="5">
              <Card>
                <CardBody className="mx-4">
                  <div className="text-center">
                    <h3 className="dark-grey-text mb-5"><strong>Sign in</strong></h3>
                  </div>
                  <Input label="Your email" group type="email" validate error="wrong" success="right"/>
                  <Input label="Your password" group type="password" validate containerClass="mb-0"/>
                  <p className="font-small blue-text d-flex justify-content-end pb-3">Forgot <a href="#" className="blue-text ml-1"> Password?</a></p>
                  <div className="text-center mb-3">
                    <Button type="button" gradient="blue" rounded className="btn-block z-depth-1a">Sign in</Button>
                  </div>
                  <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in with:</p>
                  <div className="row my-3 d-flex justify-content-center">
                    <Button type="button" color="white" rounded className="mr-md-3 z-depth-1a"><Fa icon="facebook" className="blue-text text-center" /></Button>
                    <Button type="button" color="white" rounded className="mr-md-3 z-depth-1a"><Fa icon="twitter" className="blue-text" /></Button>
                    <Button type="button" color="white" rounded className="z-depth-1a"><Fa icon="google-plus" className="blue-text" /></Button>
                  </div>
                </CardBody>
                <ModalFooter className="mx-5 pt-3 mb-1">
                  <p className="font-small grey-text d-flex justify-content-end">Not a member? <a href="#" className="blue-text ml-1"> Sign Up</a></p>
                </ModalFooter>
              </Card>
            </Col>
          </Row>
        </section>
        <hr className="my-5" />
        <section className="form-gradient">
          <h2 className="mb-5">Form gradient</h2>
          <Row>
            <Col md="5">
              <Card>
                <div className="header pt-3 peach-gradient">
                  <Row className="d-flex justify-content-center">
                    <h3 className="white-text mb-3 pt-3 font-weight-bold">Log in</h3>
                  </Row>
                  <Row className="mt-2 mb-3 d-flex justify-content-center">
                    <a className="fa-lg p-2 m-2 fb-ic"><Fa className="fa fa-facebook white-text fa-lg" /></a>
                    <a className="fa-lg p-2 m-2 tw-ic"><Fa className="fa fa-twitter white-text fa-lg" /></a>
                    <a className="fa-lg p-2 m-2 gplus-ic"><Fa className="fa fa-google-plus white-text fa-lg" /></a>
                  </Row>
                </div>
                <CardBody className="mx-4 mt-4">
                  <Input label="Your email" group type="text" validate />
                  <Input label="Your password" group type="password" validate containerClass="mb-0"/>
                  <p className="font-small grey-text d-flex justify-content-end">Forgot <a href="#" className="dark-grey-text ml-1 font-weight-bold"> Password?</a></p>
                  <Row className="d-flex align-items-center mb-4 mt-5">
                    <Col md="5" className="d-flex align-items-start">
                      <div className="text-center">
                        <Button color="grey" rounded type="button" className="z-depth-1a">Log in</Button>
                      </div>
                    </Col>
                    <Col md="7" className="d-flex justify-content-end">
                      <p className="font-small grey-text mt-3">Don't have an account? <a href="#" className="dark-grey-text ml-1 font-weight-bold"> Sign up</a></p>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>
        <hr className="my-5" />
        <section className="form-light">
          <h2 className="mb-5">Form light</h2>
          <Row>
            <Col md="5">
              <Card>
                <CardBody className="mx-4">
                  <div className="text-center">
                    <h3 className="pink-text mb-5"><strong>Sign up</strong></h3>
                  </div>
                  <Input label="Your email" group type="text" validate />
                  <Input label="Your password" group type="password" validate/>
                  <div className="md-form pb-3">
                    <div className="form-check my-4">
                      <input className="form-check-input" type="checkbox" id="defaultCheck12" />
                      <label htmlFor="defaultCheck12" className="grey-text">Accept the<a href="#" className="blue-text"> Terms and Conditions</a></label>
                    </div>
                  </div>
                  <Row className="d-flex align-items-center mb-4">
                    <Col md="6" className="text-center">
                      <button type="button" className="btn btn-pink btn-block btn-rounded z-depth-1">Sign up</button>
                    </Col>
                    <Col md="6">
                      <p className="font-small grey-text d-flex justify-content-end">Have an account? <a href="#" className="blue-text ml-1"> Log in</a></p>
                    </Col>
                  </Row>
                </CardBody>
                <div className="footer pt-3 mdb-color lighten-3">
                  <Row className="d-flex justify-content-center">
                    <p className="font-small white-text mb-2 pt-3">or Sign up with:</p>
                  </Row>
                  <Row className="mt-2 mb-3 d-flex justify-content-center">
                    <a className="fa-lg p-2 m-2 fb-ic"><Fa className="fa fa-facebook white-text fa-lg"> </Fa></a>
                    <a className="fa-lg p-2 m-2 tw-ic"><Fa className="fa fa-twitter white-text fa-lg"> </Fa></a>
                    <a className="fa-lg p-2 m-2 gplus-ic"><Fa className="fa fa-google-plus white-text fa-lg"> </Fa></a>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </section>
        <hr className="my-5" />
        <section className="form-dark">
          <h2 className="mb-5">Form dark</h2>
          <Row>
            <Col md="5">
              <Card className="card-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)', width: '28rem'}}>
                <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                  <div className="text-center">
                    <h3 className="white-text mb-5 mt-4 font-weight-bold"><strong>SIGN</strong> <a className="green-text font-weight-bold"><strong> UP</strong></a></h3>
                  </div>
                  <Input label="Your email" group type="text" validate />
                  <Input label="Your password" group type="password" validate/>
                  <div className="md-form pb-3">
                    <div className="form-check my-4">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck17" />
                      <label className="form-check-label white-text" htmlFor="defaultCheck17">Accept the<a href="#" className="green-text font-weight-bold"> Terms and Conditions</a></label>
                    </div>
                  </div>
                  <Row className="d-flex align-items-center mb-4">
                    <div className="text-center mb-3 col-md-12">
                      <Button color="success" rounded type="button" className="btn-block z-depth-1">Sign in</Button>
                    </div>
                  </Row>
                  <Col md="12">
                    <p className="font-small white-text d-flex justify-content-end">Have an account? <a href="#" className="green-text ml-1 font-weight-bold"> Log in</a></p>
                  </Col>
                </div>
              </Card>
            </Col>
          </Row>
        </section>
        <hr className="my-5" />
        <section className="form-simple">
          <h2 className="mb-5">Form simple</h2>
          <Row>
            <Col md="5">
              <Card>
                <div className="header pt-3 grey lighten-2">
                  <Row className="d-flex justify-content-start">
                    <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">Log in</h3>
                  </Row>
                </div>
                <CardBody className="mx-4 mt-4">
                  <Input label="Your email" group type="text" validate />
                  <Input label="Your password" group type="password" validate containerClass="mb-0"/>
                  <p className="font-small grey-text d-flex justify-content-end">Forgot <a href="#" className="dark-grey-text font-weight-bold ml-1"> Password?</a></p>
                  <div className="text-center mb-4 mt-5">
                    <Button color="danger" type="button" className="btn-block z-depth-2">Log in</Button>
                  </div>
                  <p className="font-small grey-text d-flex justify-content-center">Don't have an account? <a href="#" className="dark-grey-text font-weight-bold ml-1"> Sign up</a></p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    );
  }
};

export default FormsPage;
