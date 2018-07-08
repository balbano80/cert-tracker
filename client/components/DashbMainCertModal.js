import React from 'react';
import { Card, CardBody, Row, Col, Table, } from 'mdbreact';
import DashbAddCertificationModal from '../components/DashbAddCertificationModal';
import DashbEditCertificationModal from '../components/DashbEditCertificationModal';
import CertificationTable from '../components/CertificationTable';

class DashbMainCertModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            certNameArray:[],
            reminderArray:[],
            validForArray:[]
        }
    }

    populate = (cert) => {
        let newArray= this.state.certNameArray;
        // let newRemindArray=this.state.reminderArray;
        // let newValidForArray=this.state.validForArray;
        newArray.push(cert)
        this.setState({
            certNameArray: newArray,
            // reminderArray: newRemindArray,
            // validForArray: newValidForArray
        })
    };

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                    <Row>
                        <Col>
                            <h4 className="h4-responsive text-center">Certifications</h4>
                        </Col>
                        <Col>
                            <DashbEditCertificationModal />
                        </Col>
                        <Col>
                        <DashbAddCertificationModal populate={this.populate} />
                        </Col>
                    </Row>
                    <Row>
                    <Table striped bordered small>
                            
                            <CertificationTable cert={this.state.certNameArray}/>
 
                        </Table>
                    </Row>
                    </CardBody>
                </Card>
            </div>
        );
    }
};

export default DashbMainCertModal;