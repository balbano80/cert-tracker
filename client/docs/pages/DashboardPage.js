import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Line, Chart } from 'react-chartjs-2';
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardText, TabPane, TabContent, Table, Nav, NavItem, NavLink, Fa, SideNavCat, SideNav, SideNavNav } from 'mdbreact';
import classnames from 'classnames';
import DashbAddSiteModal from '../../components/DashbAddSiteModal'; 
import DashbEditSiteModal from '../../components/DashbEditSiteModal'; 
import DashSideNav from '../components/DashSideNav/DashSideNav.css';


// Line chart
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
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
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
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
                      beginAtZero:true
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

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeItem: '1',
      activeItemPills: '1',
      activeItemVerticalPills: '1',
      activeItemOuterTabs: '1',
      activeItemInnerPills: '1',
      activeItemClassicTabs1: '1',
      activeItemClassicTabs2: '1'
    };
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
          <Col md="2">
            <div className="container" style={{height: "10px"}}>
              <SideNav fixed breakWidth={1300} className="stylish-color-dark">
                <SideNavNav>
                  <SideNavCat to="#" className={classnames({ active: this.state.activeItemInnerPills === '1' })} onClick={() => { this.toggleInnerPills('1'); }} name="Main" icon="bar-chart"></SideNavCat>
                  <SideNavCat to="#" className={classnames({ active: this.state.activeItemInnerPills === '2' })} id="sidenav-site" onClick={() => { this.toggleInnerPills('2'); }} name="Site 1" icon="building-o"></SideNavCat>
                  <SideNavCat to="#" className={classnames({ active: this.state.activeItemInnerPills === '3' })} id="sidenav-site" onClick={() => { this.toggleInnerPills('3'); }} name="Site 2" icon="building-o"></SideNavCat>
                  <SideNavCat name="Add Site" href="#" className="add-site" icon="plus" ></SideNavCat>
                </SideNavNav>
              </SideNav>
            </div>
          </Col>
          <Col>
          <Row>
            <Col md="12">
            <h2 className="mt-5"></h2>

              <TabContent className="card" activeItem={this.state.activeItemOuterTabs}>
                <TabPane tabId="1" role="tabpanel">
                  <Row>

                  <Col md="9">
                    <TabContent activeItem={this.state.activeItemInnerPills}>
                      <TabPane tabId="1">
                        <Row className="pb-3">
                          <Col md="12">
                            <Card>
                              <CardBody>
                              <Row>
                              <Col><p className="h4-responsive">Richmond Crews</p> 
                              </Col>
                              <Col>
                              <DashbEditSiteModal/>
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
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="2">
                      <Row className="pb-3">
                          <Col md="12">
                            <Card>
                              <CardBody>
                                <h4 className="h4-responsive">Benicia Crews</h4>
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
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="3">
                      <Row className="pb-3">
                          <Col md="12">
                            <Card>
                              <CardBody>
                                <h4 className="h4-responsive">Tesoro Crews</h4>
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
                          </Col>
                        </Row>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
                </TabPane>
                <TabPane tabId="2" role="tabpanel">
                  <Row>
                    <Col md="6">
                      <CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                      </CardBody>
                    </Col>
                    <Col md="6">
                      <CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                      </CardBody>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
          <Row>
            <div style={{marginTop: '100px'}}>
              <Container>
                <Row>
                  <Col md="7" className="md-0 mb-1">
                    <h3>Line chart</h3>
                    <Line data={data} />
                  </Col>
                  <Col md="5" className="md-0 mb-5">
                  <h3 className="mt-5">Doughnut Chart</h3>
                    <canvas id="doughnutChart"></canvas>
                  </Col>
                  <Col md="7" className="md-0 mb-5">
                    <h3>Bar chart</h3>
                    <canvas id="barChart"></canvas>
                  </Col>
                  <Col md="5" className="md-0 mb-5">
                  <h3 className="mt-5">Pie Chart</h3>
                    <canvas id="pieChart"></canvas>
                  </Col>
              </Row>
            </Container>
          </div>
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
