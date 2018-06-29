import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

class FormsPage extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return(
      <Container className="mt-5">
        <h2 className="mb-5">Employee Form</h2>
        <Row>
          <Col md="6">
            <Card>
              <CardBody>
                <form>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
                    <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                    <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                    <Input label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong" success="right"/>
                    <Input label="Your password" icon="lock" group type="password" validate/>
                  </div>
                  <div className="text-center py-4 mt-3">
                    <Button color="cyan" type="submit">Register</Button>
                  </div>
                </form>
              </CardBody>
            </Card>                    
          </Col>
          <Col md="6">
            <div className="card mx-xl-5">
              <div className="card-body">
                <form>
                  <p className="h4 text-center py-4">Subscribe</p>
                  <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light">Your name</label>
                  <input type="text" id="defaultFormCardNameEx" className="form-control" />
                  <br />
                  <label htmlFor="defaultFormCardEmailEx" className="grey-text font-weight-light">Your email</label>
                  <input type="email" id="defaultFormCardEmailEx" className="form-control" />
                  <div className="text-center py-4 mt-3">
                    <button className="btn btn-outline-purple" type="submit">Send<i className="fa fa-paper-plane-o ml-2"></i></button>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
        <hr className="my-5" />
        <h2 className="mb-5">A form within a modal</h2>
        <Row>
          <Col size="12" className="text-center mb-5">
            <Button color="info" onClick={this.toggle}>Launch modal contact form</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal">
              <div className="modal-header primary-color white-text">
                <h4 className="title">
                  <Fa className="fa fa-pencil" /> Contact form</h4>
                <button type="button" className="close" onClick={this.toggle}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <ModalBody className="grey-text">
                <Input size="sm" label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                <Input size="sm" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input size="sm" label="Subject" icon="tag" group type="text" validate error="wrong" success="right"/>
                <Input size="sm" type="textarea" rows="2" label="Your message" icon="pencil"/>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                <Button color="primary">Save changes</Button>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default FormsPage;
