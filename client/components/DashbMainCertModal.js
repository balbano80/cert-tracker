import React from 'react';
import { Card, CardBody, Table,  } from 'mdbreact';
import DashbAddCertificationModal from '../components/DashbAddCertificationModal';
import DashbEditCertificationModal from '../components/DashbEditCertificationModal';

class DashbMainCertModal extends React.Component  {
  

  render() {
    return(
        <div>
            <Card>
                <CardBody>
                <h4 className="h4-responsive text-center">Certifications</h4>
                <DashbEditCertificationModal />
                <DashbAddCertificationModal />
                <Table striped bordered small>
                    <tbody>
                    <tr>
                        <td>Fire Safety</td>
                    </tr>
                    <tr>
                        <td>Sexual Harrassment Training</td>
                    </tr>
                    <tr>
                        <td>Ladder Safety</td>
                    </tr>
                    </tbody>
                </Table>
                </CardBody>
            </Card>
        </div>

    );
  }
};

export default DashbMainCertModal;