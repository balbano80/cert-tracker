import React from 'react';
import { Container, Row, Col, Card, CardBody, Table, PerfectScrollbar, CardHeader } from 'mdbreact';


class EditCrewEmployee extends React.Component {
  render() {
    const outerContainerStyle = {width: '100%', height: '200px'}
    return (
          <Card  style={outerContainerStyle} className="mt-5">
          <CardHeader> 
            Edit Crew Employees 
          </CardHeader>
          <PerfectScrollbar className="scrollbar-primary">
            <CardBody>
              <Table striped bordered small>
                <tbody>
                  <tr>
                    <td>Otto, Mark</td>
                  </tr>
                  <tr>
                    <td>Thornton, Jacob</td>
                  </tr>
                  <tr>
                    <td>the Bird, Larry</td>
                  </tr>
                  <tr>
                    <td>Shapiro, Terry</td>
                  </tr>
                  <tr>
                    <td>Duck, Chicken</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
            </PerfectScrollbar>
          </Card>
    );
  }
}


export default EditCrewEmployee;