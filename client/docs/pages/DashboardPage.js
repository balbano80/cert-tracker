import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Line, Chart } from 'react-chartjs-2';
import { Container, Row, Col, Card, CardBody, TabPane, TabContent, Table, SideNavCat, SideNav, SideNavNav } from 'mdbreact';
import classnames from 'classnames';
import DashbAddSiteModal from '../../components/DashbAddSiteModal';
import DashbEditSiteModal from '../../components/DashbEditSiteModal';
import DashbMainCertModal from '../../components/DashbMainCertModal';
import DashSideNav from '../components/DashSideNav/DashSideNav.css';
import API from '../../utils/API';
import axios from "axios";

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Number of expired certifications',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#848484',
      borderColor: '#848484',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#848484',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#848484',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      siteArray: [],
      crewArray: [],
      certArray: [],
      reminderArray: [],
      selectedSites: "",
      activeItem: '1',
      activeItemPills: '1',
      activeItemVerticalPills: '1',
      activeItemOuterTabs: '1',
      activeItemInnerPills: "0",
      activeItemClassicTabs1: '1',
      activeItemClassicTabs2: '1',
      modal: false,
      user: {}
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  toggle(tab) {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  }
  togglePills(tab) {
    if (this.state.activePills !== tab) {
      this.setState({
        activeItemPills: tab
      });
    }
  }
  toggleVerticalPills(tab) {
    if (this.state.activeItem3 !== tab) {
      this.setState({
        activeItemVerticalPills: tab
      });
    }
  }
  toggleClassicTabs1(tab) {
    if (this.state.activeItemClassicTabs1 !== tab) {
      this.setState({
        activeItemClassicTabs1: tab
      });
    }
  }
  toggleClassicTabs2(tab) {
    if (this.state.activeItemClassicTabs2 !== tab) {
      this.setState({
        activeItemClassicTabs2: tab
      });
    }
  }
  toggleOuterTabs(tab) {
    if (this.state.activeItemOuterTabs2 !== tab) {
      this.setState({
        activeItemOuterTabs: tab
      });
    }
  }
  toggleInnerPills(siteId) {
    let siteObj = this.state.siteArray.find(siteObj => siteObj.id.toString() === siteId)
    if (siteId === "0") {
      this.setState({
        activeItemInnerPills: siteId,
        selectedSites: this.state.user.companyName + " Dashboard"
      });
    } else if (this.state.activeItemInnerPills !== siteId) {
      this.setState({
        activeItemInnerPills: siteId,
        selectedSites: "Site: " + siteObj.name
      });
    }
  }
  testing(id) {
    var crewCerts = this.state.crewCertsArr
    for (var i = 0; i < crewCerts.length; i++) {
      if (crewCerts[i].SiteId === id) {
        console.log("match: " + crewCerts[i].SideId)
      }
    }
  }

  componentDidMount() {
    axios.get("/api/user_data").then(res => {
      if (res.data.email) {
        this.setState({
          user: res.data,
          selectedSites: res.data.companyName + " Dashboard"
        });
      } else if (this.state.siteArray.length === 0) {
        this.setState({
          user: res.data,
          selectedSites: "You are not logged in. Please log in to see your company data."
        });
      }

      API.getSites()
        .then(res => {
          const sitesArr = []
          for (let i = 0; i < res.data.length; i++) {
            if (this.state.user.CompanyId === res.data[i].CompanyId) {
              sitesArr.push(res.data[i]);
            }
          }
          this.setState({ siteArray: sitesArr });
          // console.log("User Sites", this.state.siteArray);
          API.getCrews()
            .then(result => {
              const crewArr = [];
              for (let k = 0; k < this.state.siteArray.length; k++) {
                for (let j = 0; j < result.data.length; j++) {
                  if (this.state.siteArray[k].id === result.data[j].SiteId) {
                    crewArr.push(result.data[j])
                  }
                }
              }
              this.setState({ crewArray: crewArr })
              // console.log("CrewsArr", this.state.crewArray);

              API.getEmployees()
                .then(empResult => {
                  const employeeArr = [];
                  for (let n = 0; n < this.state.crewArray.length; n++) {
                    for (let o = 0; o < empResult.data.length; o++) {
                      if (this.state.crewArray[n].id === empResult.data[o].CrewId) {
                        employeeArr.push(empResult.data[o])
                      }
                    }
                  }
                  this.setState({ employeesArr: employeeArr })

                  API.getEmployeeCerts()
                    .then(result => {
                      const employeeCrts = [];
                      // console.log("employeeCerts", result.data);
                      for (let p = 0; p < this.state.employeesArr.length; p++) {
                        for (let q = 0; q < result.data.length; q++) {
                          if (this.state.employeesArr[p].id === result.data[q].EmployeeId) {
                            employeeCrts.push(result.data[q])
                          }
                        }
                      }
                      this.setState({ employeeCerts: employeeCrts })
                      var crewCerts = [];
                      for (let l = 0; l < this.state.crewArray.length; l++) {
                        // console.log("sending api call for crew with id: ", this .state.crewArray[l].id)
                        API.getCertificate(this.state.crewArray[l].id)
                          .then(cert => {
                            crewCerts.push(cert.data);
                          })
                      }

                      this.setState({ crewCertsArr: crewCerts });
                      console.log("State info", this.state);

                      // API.getReminder()
                      // .then(res => {
                      //   const reminderArr =[];
                      //   console.log("reminders data ::::::", res.data)
                      //   for (let i = 0; i < res.data.length; i++) {
                      //     reminderArr.push(res.data[i]);
                      //   }
                      //   this.setState({reminderArray: reminderArr})
                      //   console.log("reminders :::::::", this.state.reminderArray)
                      // });
                      // var crewCertifs = this.state.crewCertsArr
                      // console.log("test:", this.state.crewCertsArr[0][0].Certificates[0].CrewCert.CertificateId)
                      // console.log("test:" + this.state.crewCerts[0].Certificates)
                      // console.log(typeof this.state.crewCertsArr)
                      // for (var i = 0; i < crewCertifs.length; i++) {
                      //   if (crewCerts[i][0].SiteId === 1) {
                      //     console.log("match: " + crewCertifs[i][0].SiteId)
                      //   }
                      // }

                      API.getReminder()
                        .then(results => {
                          const reminderArr = [];
                          console.log("reminders data ::::::", results.data)
                          for (let i = 0; i < results.data.length; i++) {
                            reminderArr.push(results.data[i]);
                          }
                          this.setState({ reminderArray: reminderArr })
                          console.log("reminders :::::::", this.state.reminderArray)
                          if (this.state.siteArray.length === 0) {
                            var baseData = [];
                          }
                          else {
                            baseData = [5, 19, 12, this.state.reminderArray.length];
                          }
                          //Bar chart
                          var ctxB = document.getElementById("barChart").getContext('2d');
                          new Chart(ctxB, {
                            type: 'bar',
                            data: {
                              labels: ["30 days", "60 days", "90 days", "over 90 days"],
                              datasets: [{
                                label: ["Certification Expiry Dates"],
                                // Change data to reflect database
                                data: baseData,
                                backgroundColor: [
                                  'rgba(255, 99, 132, 0.2)',
                                  'rgba(255,152,0,0.2)',
                                  'rgba(255, 238, 88, 0.2)',
                                  'rgba(75, 192, 192, 0.2)',
                                  'rgba(153, 102, 255, 0.2)',
                                  'rgba(255, 159, 64, 0.2)'
                                  // rgba(255,152,0,1)
                                ],
                                borderColor: [
                                  'rgba(255,99,132,1)',
                                  'rgba(54, 162, 235, 1)',
                                  'rgba(75, 192, 192, 1)',
                                  'rgba(75, 192, 192, 1)',
                                  'rgba(153, 102, 255, 1)',
                                  'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                              }]
                            },
                            optionss: {
                              scales: {
                                yAxes: [{
                                  ticks: {
                                    beginAtZero: true
                                  }
                                }]
                              }
                            }
                          });
                        });
                      //doughnut chart
                      var ctxD = document.getElementById("doughnutChart").getContext('2d');
                      console.log("site array length", this.state.siteArray.length);
                      if (this.state.siteArray.length === 0) {
                        var baseData2 = [];
                      }
                      else {
                        baseData2 = [300, 50, 100, 40, 120];
                      }
                      new Chart(ctxD, {
                        type: 'doughnut',
                        data: {
                          labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
                          datasets: [
                            {
                              data: baseData2,
                              backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                              hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
                            }
                          ]
                        },
                        options: {
                          responsive: true
                        }
                      });
                      //doughnut chart 2
                      var ctxP = document.getElementById("pieChart").getContext('2d');
                      if (this.state.siteArray.length === 0) {
                        var baseData3 = [];
                      }
                      else {
                        baseData3 = [300, 50, 100, 40, 120];
                      }
                      new Chart(ctxP, {
                        type: 'pie',
                        data: {
                          labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
                          datasets: [
                            {
                              // Content data to database
                              data: baseData3,
                              backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                              hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
                            }
                          ]
                        },
                        options: {
                          responsive: true
                        }
                      });

                    });
                });
            });
        });
    });

  };

  render() {
    return (
      <div>
        <Router>
          <Container className="mt-4">
            <Row>
              <Col lg="1">
                <div className="container" style={{ height: "10px" }}>
                  <SideNav fixed breakWidth={1300} className="stylish-color-dark">
                    <SideNavNav>
                      <SideNavCat to="#" className={classnames({ active: this.state.activeItemInnerPills === "0" })} onClick={() => { this.toggleInnerPills("0"); }} name="Main" icon="bar-chart"></SideNavCat>
                      {this.state.siteArray.length > 0 &&
                        this.state.siteArray.map(
                          (siteObj, i) => {
                            return (
                              <SideNavCat to="#" key={i} className={classnames({ active: this.state.activeItemInnerPills === `${siteObj.id}` })} id="sidenav-site" onClick={() => { this.toggleInnerPills(`${siteObj.id}`); }} name={siteObj.name} companyid={siteObj.CompanyId} icon="building-o"></SideNavCat>
                            )
                          }
                        )
                      }
                      <DashbAddSiteModal />
                    </SideNavNav>
                  </SideNav>
                </div>
              </Col>
              <Col lg="11">
                <Row>
                  <Col lg="12">
                    <h2 className="mt-5 text-center">{this.state.selectedSites}</h2>
                    <TabContent className="card" activeItem={this.state.activeItemOuterTabs}>
                      <TabPane tabId="1" role="tabpanel">
                        <Row>
                          <Col lg="12">
                            <TabContent activeItem={this.state.activeItemInnerPills}>
                              <TabPane tabId="0">
                                <Row className="pb-3">
                                  <div style={{ marginTop: '10px' }}>
                                    <h2 className="grey-text">{this.state.user.companyName} Overview</h2>
                                    <Container>

                                      <Row className="text-center grey-text mb-5 border-bottom">
                                        <h3 className="text-center grey-text">Bar chart</h3>
                                        <canvas id="barChart"></canvas>
                                      </Row>
                                      <Row className="mb-5 border-bottom">
                                        <Col lg="6" className="md-0 mb-2">
                                          <h3 className="text-center">Doughnut Chart</h3>
                                          <canvas id="doughnutChart"></canvas>
                                        </Col>
                                        <Col lg="6" className="md-0 mb-2">
                                          <h3 className="text-center">Pie Chart</h3>
                                          <canvas id="pieChart"></canvas>
                                        </Col>
                                      </Row>
                                      <Row className="border-bottom">
                                        <h3 className="grey-text text-center">Line chart</h3>
                                        <Line data={data} />
                                      </Row>
                                    </Container>
                                  </div>
                                </Row>
                              </TabPane>

                              {/* {this.state.crewCertsArr.map((crewInfo) => {
                                console.log("crewInfo", crewInfo);

                              })} */}
                              {this.state.siteArray.length > 0 &&
                                this.state.siteArray.map((siteObj, i) => {
                                  let id = siteObj.id;
                                  let siteCrews = [];
                                  let crewArr = this.state.crewArray;

                                  for (let i = 0; i < crewArr.length; i++) {
                                    if (id === crewArr[i].SiteId) {
                                      siteCrews.push(crewArr[i])
                                    }
                                  }

                                  return (
                                    <TabPane key={i} tabId={siteObj.id.toString()} >
                                      <Row className="pb-3">
                                        <Col md="12">
                                          <Card>
                                            <CardBody>
                                              <Row>
                                                <Col>
                                                  <h4 className="h4-responsive">{siteObj.name}</h4>
                                                </Col>
                                                <Col>
                                                  <div className="float-right">
                                                    <DashbEditSiteModal
                                                      site={siteObj}
                                                      crews={siteCrews}
                                                    />
                                                  </div>
                                                </Col>
                                              </Row>
                                              <br />
                                              <Table striped bordered small>
                                                <thead>
                                                  <tr>
                                                    <th>Crew Names</th>
                                                    <th>Site Id</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  {this.state.crewArray.length > 0 &&
                                                    this.state.crewArray.map((crewObj, i) => {
                                                      if (crewObj.SiteId === siteObj.id) {
                                                        return (
                                                          <tr key={i}>
                                                            <td>{crewObj.crew_type}</td>
                                                            <td>{crewObj.SiteId}</td>
                                                          </tr>
                                                        )
                                                      }
                                                    }
                                                    )}
                                                </tbody>
                                              </Table>
                                            </CardBody>
                                          </Card>
                                          <br /><br />
                                          <DashbMainCertModal />
                                        </Col>
                                      </Row>
                                    </TabPane>
                                  )
                                }
                                )}
                            </TabContent>
                          </Col>
                        </Row>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Router>
      </div>

    );
  }
}

export default DashboardPage;