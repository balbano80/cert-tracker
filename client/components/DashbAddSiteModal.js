import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';



class DashbAddSiteModal extends React.Component  {
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
      <Container className="mt-3">
        <Row>
          <Col size="12" className="mb-1">
            <Button color="mdb-color" onClick={this.toggle}>
              <Fa icon="plus" className="mr-1"/>Add Site</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <form>
                <ModalHeader color="blue-grey" toggle={this.toggle}>Add New Site</ModalHeader>
                <ModalBody>
                  <Row>
                    <Col size="4" className="lg-4">
                        <label className="blue-grey-text" htmlFor="defaultFormCardNameEx">Site Name:</label>
                      </Col>
                      <Col size="8" className="lg-8">
                        <input type="text" id="defaultFormCardNameEx" className="form-control" />
                      </Col>
                  </Row>
                </ModalBody>
                <ModalFooter>
                  <Button color="mdb-color">Submit</Button>
                </ModalFooter>
              </form>
        </Modal>

          </Col>
        </Row>
      </Container>
    );
  }
};

export default DashbAddSiteModal;
