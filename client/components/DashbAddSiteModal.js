import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import axios from "axios";
import API from "../utils/API";


class DashbAddSiteModal extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      site: ""
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
    axios.get("/api/user_data").then(res => {
      this.setState({
        user: res.data
      })
      // console.log("UserInfo ", this.state.user);
    });
  }

  render() {
    return(
      <div>
      <Button color="stylish-color-dark" className="stylish-color-dark addsite-btn" onClick={this.toggle}>
      <Fa icon="plus" className="mr-1"/>Add Site</Button>
      
      <Container className="mt-3">
        <Row>
          <Col size="12" className="mb-1">
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <form>
                <ModalHeader color="blue-grey" toggle={this.toggle}>Add New Site</ModalHeader>
                <ModalBody>
                  <Row>
                    <Col size="4" className="lg-4">
                        <label className="blue-grey-text" htmlFor="defaultFormCardNameEx">Site Name:</label>
                      </Col>
                      <Col size="8" className="lg-8">
                        <input type="text" id="defaultFormCardNameEx" className="form-control"
                        value={this.state.site} name="site" onChange={this.handleInputChange} />
                      </Col>
                  </Row>
                </ModalBody>
                <ModalFooter>
                  <Button color="stylish" className="stylish-color-dark" onClick={this.handleFormSubmit}>Submit</Button>
                </ModalFooter>
              </form>
            </Modal>

          </Col>
        </Row>
      </Container>
      </div>
    );
  }
};

export default DashbAddSiteModal;
