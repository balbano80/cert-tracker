import React from 'react';
import { Container, Row, Col, Input, Button, Table, Fa, Card, CardBody, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
// import DashbDropdownReminder from '../components/DashbDropdownReminder';
// import DashbDropdownValidfor from '../components/DashbDropdownValidfor';
import API from '../utils/API';

const modStyle = {
  'text': 'center',
  'background-color': '#b1bace',
  'color': 'white'
}

class DashbAddCertificationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false, 
      name: "",
      reminder: "",
      validFor:"",
      supervisorEmail:"",
      supervisorPhone:""
    }
    this.toggle = this.toggle.bind(this);
  }

    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      const { name, value} = event.target;

      // Updating the input's state
      this.setState({
        [name]: value
      });
    };

    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
      if (!this.state.certification ||!this.state.validFor) {
        alert("Fill out all fields");
      } else {
        this.props.populate(<div>{this.state.certification}</div>),
      
      API.createCertificates({
        name: this.state.certification,
        valid_for: this.state.validFor
      })
      .then(res => {
        console.log("Create cert:" , res)
        this.setState({name: res.data.name, validFor: res.data.validFor})
        this.toggle()
      })
    }
  };

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
            <Button outline color="primary" onClick={this.toggle}>Add Certification</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} size="fluid">
              <ModalHeader className="blue-grey-text" toggle={this.toggle}>Add Certification</ModalHeader>
              <ModalBody className="blue-grey-text">
                <Row>
                  <Col>
                    <Table>
                      <thead>
                        <tr>
                          <th className="text-center">Certification</th>
                          <th className="text-center">Valid For</th>
                          <th className="text-center">Reminders At</th>
                          <th className="text-center">Supervisor Email</th>
                          <th className="text-center">Supervisor Phone</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><Input name ="certification" value={this.state.certification} onChange={this.handleInputChange} size="sm" label="Certification" icon="list-ul" group type="text" validate error="wrong" success="right" /></td>
                          <td><Input name ="validFor" value={this.state.validFor} onChange={this.handleInputChange} size="sm" label="Valid For (enter # of days)" icon="exclamation" group type="text" validate error="wrong" success="right" /></td>
                          <td><Input name ="reminder" value={this.state.reminder} onChange={this.handleInputChange} size="sm" label="Reminder (enter 30, 60, or 90 days)" icon="clock-o" group type="text" validate error="wrong" success="right" /></td>
                          <td><Input name = "supervisorEmail" value={this.state.supervisorEmail} onChange={this.handleInputChange} size="sm" label="Supervisor Email" icon="envelope" group type="text" validate error="wrong" success="right" /></td>
                          <td><Input name = "supervisorPhone" value={this.state.supervisorPhone} onChange={this.handleInputChange} size="sm" label="Supervisor Phone" icon="phone" group type="text" validate error="wrong" success="right" /></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                <Button color="primary" onClick={this.handleFormSubmit}>Save changes</Button>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
};


// const modal ={
//   constructor(props) {
//       super(props);
//       props.state = {
//         modal: false,  
//       }
//     props.toggle = props.toggle.bind(props);

//     toggle() {
//       props.setState({
//         modal: !props.state.modal

//       });
//     }
//   }
// };

// const DashbAddCertificationModal = props => (

// <Container>
//     <Row>
//       <Col size="12" className="text-center mb-5">
//         <Button outline color="primary" onClick={props.toggle}>Add Certification</Button>
//         <Modal isOpen={props.state.modal} toggle={props.toggle} size="fluid">
//           <ModalHeader className="blue-grey-text" toggle={props.toggle}>Add Certification</ModalHeader>
//           <ModalBody className="blue-grey-text">
//             <Row>
//               <Col>
//                 <Table>
//                   <thead>
//                     <tr>
//                       <th className="text-center">Certification</th>
//                       <th className="text-center">Valid For</th>
//                       <th className="text-center">Reminders At</th>
//                       <th className="text-center">Supervisor Email</th>
//                       <th className="text-center">Supervisor Phone</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td><Input name ="certification" value={props.state.certification} onChange={props.handleInputChange} size="sm" label="Certification" icon="list-ul" group type="text" validate error="wrong" success="right" /></td>
//                       <td><DashbDropdownValidfor /></td>
//                       <td><DashbDropdownReminder /></td>
//                       <td><Input name = "supervisorEmail" value={props.state.supervisorEmail} onChange={props.handleInputChange} size="sm" label="Supervisor Email" icon="envelope" group type="text" validate error="wrong" success="right" /></td>
//                       <td><Input name = "supervisorPhone" value={props.state.supervisorPhone} onChange={props.handleInputChange} size="sm" label="Supervisor Phone" icon="phone" group type="text" validate error="wrong" success="right" /></td>
//                     </tr>
//                   </tbody>
//                 </Table>
//               </Col>
//             </Row>
//           </ModalBody>
//           <ModalFooter>
//             <Button color="secondary" onClick={props.toggle}>Close</Button>{' '}
//             <Button color="primary" onClick={props.handleFormSubmit}>Save changes</Button>
//           </ModalFooter>
//         </Modal>
//       </Col>
//     </Row>
//   </Container>
// );

export default DashbAddCertificationModal;
