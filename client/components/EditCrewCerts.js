import React from 'react';
import { Container, Row, Col, Card, CardBody, Table, PerfectScrollbar, CardHeader } from 'mdbreact';


class EditCrewCerts extends React.Component {
    render() {
        const outerContainerStyle = { width: '100%', height: '200px' }
        return (
            <Card style={outerContainerStyle} className="mt-5">
                <CardHeader> Delete Crew Certifications </CardHeader>
                <PerfectScrollbar className="scrollbar-primary">
                    <CardBody>
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
                                <tr>
                                    <td>Chicken</td>
                                </tr>
                                <tr>
                                    <td>Duck</td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </PerfectScrollbar>
            </Card>
        );
    }
}


export default EditCrewCerts;