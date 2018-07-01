import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

const modStyle = {
  'text': 'center',
  'background-color': '#b1bace',
  'color': 'white'
}

class DashbEditSiteModal extends React.Component  {
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
      <Container>
 <Row>
          <Col size="12" className="text-center mb-5">
            <Button outline color="primary" onClick={this.toggle}>Edit Site</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader className="blue-grey-text" toggle={this.toggle}>Edit this Site</ModalHeader>
                <ModalBody className="blue-grey-text">
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

export default DashbEditSiteModal;
