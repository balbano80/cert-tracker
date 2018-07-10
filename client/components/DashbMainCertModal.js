import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Card, CardBody, Row, Col, Table, } from 'mdbreact';
import DashbAddCertificationModal from '../components/DashbAddCertificationModal';
import DashbEditCertificationModal from '../components/DashbEditCertificationModal';
import CertificationTable from '../components/CertificationTable';
import API from '../utils/API';

class DashbMainCertModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            certArray: [],
            certNameArray: []
        }
    }

    populate = (cert) => {
        let newArray = this.state.certNameArray

        newArray.push(cert)
        this.setState({
            certNameArray: newArray

        })
    };

    componentDidMount() {
        API.getCertificates().then(res => {
            const certArr = []
            for (let i = 0; i < res.data.length; i++) {
                certArr.push(res.data[i]);
            }
            this.setState({ certArray: certArr });
            console.log("Certificates", this.state.certArray);
        })
    }

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
                                <thead>
                                    <tr>
                                        <th>Certifications</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.certArray.length > 0 &&
                                        this.state.certArray.map((certObj) => {
                                            return (
                                                <tr>
                                                    <td>{certObj.name}</td>
                                                </tr>
                                            )
                                        }
                                    )}
                                    
                                <CertificationTable cert={this.state.certNameArray} />
                                </tbody>

                            </Table>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        );
    }
};

export default DashbMainCertModal;