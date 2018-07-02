import React from 'react';
import { Container, Row, Col, Input, Button, Table, Fa, Card, CardBody, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import DashbDropdownReminder  from '../components/DashbDropdownReminder';

const modStyle = {
  'text': 'center',
  'background-color': '#b1bace',
  'color': 'white'
}

class DashbEditCertificationModal extends React.Component {
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
    return (
      <Container>
        <Row>
          <Col size="12" className="text-center mb-5">
            <Button outline color="primary" onClick={this.toggle}>Edit Certification</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} size="fluid">
              <ModalHeader className="blue-grey-text" toggle={this.toggle}>Edit Certification</ModalHeader>
              <ModalBody className="blue-grey-text">

                <Row>
                  <Col>
                    <Table>
                      <thead>
                        <tr>
                          <th>Certification</th>
                          <th>Valid For</th>
                          <th>Reminders At</th>
                          <th>Supervisor Email</th>
                          <th>Supervisor Phone</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                         <td><Input size="sm" label="Certification" icon="list-ul" group type="text" validate error="wrong" success="right"/></td>
                         <td><Input size="sm" label="Valid For" icon="exclamation" group type="text" validate error="wrong" success="right"/></td>
                         <td> <DashbDropdownReminder/></td>
                         <td><Input size="sm" label="Reminder At" icon="clock-o" group type="text" validate error="wrong" success="right"/></td>
                         <td><Input size="sm" label="Supervisor Email" icon="envelope" group type="text" validate error="wrong" success="right"/></td>
                         <td><Input size="sm" label="Supervisor Phone" icon="phone" group type="text" validate error="wrong" success="right"/></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
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
      
      export default DashbEditCertificationModal;
