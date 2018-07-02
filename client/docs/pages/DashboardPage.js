import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Line, Chart } from 'react-chartjs-2';
import { Container, Row, Col, Card, CardBody, TabPane, TabContent, Table, SideNavCat, SideNav, SideNavNav } from 'mdbreact';
import classnames from 'classnames';
import DashbAddSiteModal from '../../components/DashbAddSiteModal';
import DashbEditSiteModal from '../../components/DashbEditSiteModal';
import DashbMainCertModal from '../../components/DashbMainCertModal';
import DashSideNav from '../components/DashSideNav/DashSideNav.css';

// Line chart
// We have to link database to this object?
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

  componentDidMount() {
    // Bar chart
    var ctxB = document.getElementById("barChart").getContext('2d');
    new Chart(ctxB, {
      type: 'bar',
      data: {
        labels: ["30 days", "60 days", "90 days"],
        datasets: [{
          label: ["certification expiry dates"],
          // Change data to reflect database
          data: [12, 19, 10, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
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
    // Pie chart
    var ctxP = document.getElementById("pieChart").getContext('2d');
    new Chart(ctxP, {
      type: 'pie',
      data: {
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
        datasets: [
          {
            // Content data to database
            data: [300, 50, 100, 40, 120],
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
          }
        ]
      },
      options: {
        responsive: true
      }
    });
    //doughnut
    var ctxD = document.getElementById("doughnutChart").getContext('2d');
    new Chart(ctxD, {
      type: 'doughnut',
      data: {
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
        datasets: [
          {
            data: [300, 50, 100, 40, 120],
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
          }
        ]
      },
      options: {
        responsive: true
      }
    });
  }


  constructor(props) {
    super(props);


    this.state = {
      activeItem: '1',
      activeItemPills: '1',
      activeItemVerticalPills: '1',
      activeItemOuterTabs: '1',
      activeItemInnerPills: '1',
      activeItemClassicTabs1: '1',
      activeItemClassicTabs2: '1',
      modal: false
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
  toggleInnerPills(tab) {
    if (this.state.activeItemInnerPills !== tab) {
      this.setState({
        activeItemInnerPills: tab
      });
    }
  }

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
                      <SideNavCat to="#" className={classnames({ active: this.state.activeItemInnerPills === '1' })} onClick={() => { this.toggleInnerPills('1'); }} name="Main" icon="bar-chart"></SideNavCat>
                      <SideNavCat to="#" className={classnames({ active: this.state.activeItemInnerPills === '2' })} id="sidenav-site" onClick={() => { this.toggleInnerPills('2'); }} name="Site 1" icon="building-o"></SideNavCat>
                      <SideNavCat to="#" className={classnames({ active: this.state.activeItemInnerPills === '3' })} id="sidenav-site" onClick={() => { this.toggleInnerPills('3'); }} name="Site 2" icon="building-o"></SideNavCat>
                      <SideNavCat to="#" className={classnames({ active: this.state.activeItemInnerPills === '4' })} id="sidenav-site" onClick={() => { this.toggleInnerPills('4'); }} name="Site 3" icon="building-o"></SideNavCat>
                      <DashbAddSiteModal />
                    </SideNavNav>
                  </SideNav>
                </div>
              </Col>
              <Col lg="11">
                <Row>
                  <Col lg="12">
                    <h2 className="mt-5 text-center">Dashboard</h2>
                    <TabContent className="card" activeItem={this.state.activeItemOuterTabs}>
                      <TabPane tabId="1" role="tabpanel">
                        <Row>
                          <Col lg="12">
                            <TabContent activeItem={this.state.activeItemInnerPills}>
                              <TabPane tabId="1">
                                <Row className="pb-3">
                                  <div style={{ marginTop: '10px' }}>
                                    <h2 className="grey-text">Company Overview</h2>
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
                              <TabPane tabId="2">
                                <Row className="pb-3">
                                  <Col md="12">
                                    <Card>
                                      <CardBody>
                                        <Row>
                                          <Col>
                                            <h4 className="h4-responsive">Benicia Crews</h4>
                                          </Col>
                                          <Col>
                                            <DashbEditSiteModal />
                                          </Col>
                                        </Row>
                                        <Table striped bordered small>
                                          <thead>
                                            <tr>
                                              <th>#</th>
                                              <th>Crew Names</th>
                                              <th>Crew Type</th>
                                              <th>Number of members</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <th scope="row">1</th>
                                              <td>RT</td>
                                              <td>Radiography</td>
                                              <td>24</td>
                                            </tr>
                                            <tr>
                                              <th scope="row">2</th>
                                              <td>Ropes</td>
                                              <td>Rope Access</td>
                                              <td>12</td>
                                            </tr>
                                            <tr>
                                              <th scope="row">3</th>
                                              <td>Ground</td>
                                              <td>Ground Inspection</td>
                                              <td>56</td>
                                            </tr>
                                          </tbody>
                                        </Table>
                                      </CardBody>
                                    </Card>
                                    <br /><br />
                                      <DashbMainCertModal />

                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId="3">
                                <Row className="pb-3">
                                  <Col md="12">
                                    <Card>
                                      <CardBody>
                                        <Row>
                                          <Col>
                                            <h4 className="h4-responsive">Tesoro Crews</h4>
                                          </Col>
                                          <Col>
                                            <DashbEditSiteModal />
                                          </Col>
                                        </Row>
                                        <Table striped bordered small>
                                          <thead>
                                            <tr>
                                              <th>#</th>
                                              <th>Crew Names</th>
                                              <th>Crew Type</th>
                                              <th>Number of members</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <th scope="row">1</th>
                                              <td>RT</td>
                                              <td>Radiography</td>
                                              <td>24</td>
                                            </tr>
                                            <tr>
                                              <th scope="row">2</th>
                                              <td>Ropes</td>
                                              <td>Rope Access</td>
                                              <td>12</td>
                                            </tr>
                                            <tr>
                                              <th scope="row">3</th>
                                              <td>Ground</td>
                                              <td>Ground Inspection</td>
                                              <td>56</td>
                                            </tr>
                                          </tbody>
                                        </Table>
                                      </CardBody>
                                    </Card>
                                    <br /><br />
                                      <DashbMainCertModal />

                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId="4">
                                <Row className="pb-3">
                                  <Col md="12">
                                    <Card>
                                      <CardBody>
                                        <Row>
                                          <Col>
                                            <h4 className="h4-responsive">Richmond Crews</h4>
                                          </Col>
                                          <Col>
                                            <DashbEditSiteModal />
                                          </Col>
                                        </Row>
                                        <Table striped bordered small>
                                          <thead>
                                            <tr>
                                              <th>#</th>
                                              <th>Crew Names</th>
                                              <th>Crew Type</th>
                                              <th>Number of members</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <th scope="row">1</th>
                                              <td>RT</td>
                                              <td>Radiography</td>
                                              <td>24</td>
                                            </tr>
                                            <tr>
                                              <th scope="row">2</th>
                                              <td>Ropes</td>
                                              <td>Rope Access</td>
                                              <td>12</td>
                                            </tr>
                                            <tr>
                                              <th scope="row">3</th>
                                              <td>Ground</td>
                                              <td>Ground Inspection</td>
                                              <td>56</td>
                                            </tr>
                                          </tbody>
                                        </Table>
                                      </CardBody>
                                    </Card>

                                      <br /><br />
                                      <DashbMainCertModal />

                                  </Col>
                                </Row>
                              </TabPane>
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