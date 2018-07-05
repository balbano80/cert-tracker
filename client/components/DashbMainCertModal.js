import React from 'react';
import { Card, CardBody, Table, } from 'mdbreact';
import DashbAddCertificationModal from '../components/DashbAddCertificationModal';
import DashbEditCertificationModal from '../components/DashbEditCertificationModal';
import CertificationTable from '../components/CertificationTable';

class DashbMainCertModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            certNameArray:[]
        }
    }

    populate = (cert) => {
        let newArray= this.state.certNameArray
   
        newArray.push(cert)
        this.setState({
            certNameArray: newArray
    
        })
    };

    
    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <h4 className="h4-responsive text-center">Certifications</h4>
                        <DashbEditCertificationModal />
                        <DashbAddCertificationModal populate={this.populate} />
                        <Table striped bordered small>
                            
                            <CertificationTable cert={this.state.certNameArray}/>
                            
                        </Table>
                    </CardBody>
                </Card>
            </div>
        );
    }
};

export default DashbMainCertModal;