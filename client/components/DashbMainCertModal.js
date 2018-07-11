import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Card, CardBody, Row, Col, Table, } from 'mdbreact';
import DashbAddCertificationModal from '../components/DashbAddCertificationModal';
import DashbEditCertificationModal from '../components/DashbEditCertificationModal';
import CertificationTable from '../components/CertificationTable';
import API from '../utils/API';
import axios from "axios";

class DashbMainCertModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            crewArray:[],
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
        axios.get("/api/user_data").then(res => {
            this.setState({
              user: res.data
            })
            // console.log("UserInfo ", this.state.user);
          });
        API.getCertificates().then(res => {
            const certArr = []
            for (let i = 0; i < res.data.length; i++) {
                certArr.push(res.data[i]);
            }
            this.setState({ certArray: certArr });
            // console.log("Certificates", this.state.certArray);
        })
        API.getSites().then(res => {
            const sitesArr = []
            for (let i = 0; i < res.data.length; i++) {
              if (this.state.user.CompanyId === res.data[i].CompanyId) {
                sitesArr.push(res.data[i]);
              }
            }
            this.setState({ siteArray: sitesArr });
            // console.log("User Sites", this.state.siteArray);
          })

          API.getCrews()
          .then(result => {
            const crewArr = [];
            for (let i = 0; i < this.state.siteArray.length; i++) {
              for (let j = 0; j < result.data.length; j++) {
                if (this.state.siteArray[i].id === result.data[j].SiteId) {
                  crewArr.push(result.data[j])
                }
              }
            }
          this.setState({crewArray: crewArr})
          // console.log("CrewsArr", this.state.crewArray);
    
          let crewCerts = [];
          for (let i = 0; i < this.state.crewArray.length; i++){
            // console.log("sending api call for crew with id: ", this .state.crewArray[i].id)
            API.getCertificate(this.state.crewArray[i].id)
            .then( cert => {
                crewCerts.push(cert.data);
            })
          }
          this.setState({crewCertsArr: crewCerts});
        //   console.log("Site state:", this.state);
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
                                        this.state.certArray.map((certObj, i) => {
                                            return (
                                                <tr key={i}>
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