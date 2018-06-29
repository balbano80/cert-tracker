import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col, Button, CardBody, CardTitle, CardText, TabPane, TabContent, Nav, NavItem, NavLink, Fa } from 'mdbreact';
import classnames from 'classnames';


class TabsPage extends React.Component {
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
      <Router>
        <Container className="mt-4">
          <Row>
            <Col md="12">
            <h2>Basic</h2>
              <Nav tabs className="nav-justified">
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItem === '1' })} onClick={() => { this.toggle('1'); }} role="tab">
                    <Fa icon="user"/> Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItem === '2' })} onClick={() => { this.toggle('2'); }} role="tab">
                    Follow
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItem === '3' })} onClick={() => { this.toggle('3'); }} role="tab">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent className="card" activeItem={this.state.activeItem}>
                <TabPane tabId="1" role="tabpanel">
                  <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                  reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                  porro voluptate odit minima.</p>
                </TabPane>
                <TabPane tabId="2" role="tabpanel">
                <p className="mt-2">Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias.</p>
                <p>Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias.</p>
                </TabPane>
                <TabPane tabId="3" role="tabpanel">
                <p className="mt-2">Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias.</p>
                </TabPane>
              </TabContent>

              <h2 className="mt-5">Pills</h2>
              <Nav pills color="secondary" className="nav-justified ">
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemPills === '1' })} onClick={() => { this.togglePills('1'); }}>
                    Active
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemPills === '2' })} onClick={() => { this.togglePills('2'); }}>
                    Link
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemPills === '3' })} onClick={() => { this.togglePills('3'); }}>
                    Link
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemPills === '4' })} onClick={() => { this.togglePills('4'); }}>
                    Help
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeItem={this.state.activeItemPills}>
                <TabPane tabId="1">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>
                </TabPane>
                <TabPane tabId="2">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>
                </TabPane>
                <TabPane tabId="3">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>
                </TabPane>
                <TabPane tabId="4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>
                </TabPane>
              </TabContent>

              <h2 className="mt-5">Vertical Pills</h2>
              <Row>
              <Col md="3">
                <Nav pills color="primary" className="flex-column">
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemVerticalPills === '1' })} onClick={() => { this.toggleVerticalPills('1'); }}>Downloads <Fa icon="download" className="ml-2"/></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemVerticalPills === '2' })} onClick={() => { this.toggleVerticalPills('2'); }}>Orders & invoices<Fa icon="file-text" className="ml-2"/></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemVerticalPills === '3' })} onClick={() => { this.toggleVerticalPills('3'); }}>Billing Details<Fa icon="address-card" className="ml-2"/></NavLink>
                </NavItem>
                </Nav>
              </Col>
              <Col md="9">
                <TabContent activeItem={this.state.activeItemVerticalPills}>
                  <TabPane tabId="1">
                    <CardBody>
                      <CardTitle>Downloads</CardTitle>
                      <CardText>Completely legal</CardText>
                    </CardBody>
                  </TabPane>
                  <TabPane tabId="2">
                    <CardBody>
                      <CardTitle>Orders & Invoices</CardTitle>
                      <CardText>"Hello? Is it me you're looking for?"</CardText>
                    </CardBody>
                  </TabPane>
                  <TabPane tabId="3">
                    <CardBody>
                      <CardTitle>Billing Details</CardTitle>
                      <CardText>Time to pay <Button className="ml-3" color="primary">pay</Button></CardText>
                    </CardBody>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>

            <h2 className="mt-5">Pills within the tabs</h2>
            <Nav tabs className="nav-justified" color="indigo">
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemOuterTabs === '1' })} onClick={() => { this.toggleOuterTabs('1'); }} role="tab">
                  <Fa icon="user"/> Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemOuterTabs === '2' })} onClick={() => { this.toggleOuterTabs('2'); }} role="tab">
                  <Fa icon="heart"/> Follow
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent className="card" activeItem={this.state.activeItemOuterTabs}>
                <TabPane tabId="1" role="tabpanel">
                  <Row>
                  <Col md="3">
                    <Nav pills color="primary" className="flex-column">
                    <NavItem>
                      <NavLink to="#" className={classnames({ active: this.state.activeItemInnerPills === '1' })} onClick={() => { this.toggleInnerPills('1'); }}>Downloads <Fa icon="download" className="ml-2"/></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#" className={classnames({ active: this.state.activeItemInnerPills === '2' })} onClick={() => { this.toggleInnerPills('2'); }}>Orders & invoices<Fa icon="file-text" className="ml-2"/></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#" className={classnames({ active: this.state.activeItemInnerPills === '3' })} onClick={() => { this.toggleInnerPills('3'); }}>Billing Details<Fa icon="address-card" className="ml-2"/></NavLink>
                    </NavItem>
                    </Nav>
                  </Col>
                  <Col md="9">
                    <TabContent activeItem={this.state.activeItemInnerPills}>
                      <TabPane tabId="1">
                        <CardBody>
                          <CardTitle>Downloads</CardTitle>
                          <CardText>Completely legal</CardText>
                        </CardBody>
                      </TabPane>
                      <TabPane tabId="2">
                        <CardBody>
                          <CardTitle>Orders & Invoices</CardTitle>
                          <CardText>"Hello? Is it me you're looking for?"</CardText>
                        </CardBody>
                      </TabPane>
                      <TabPane tabId="3">
                        <CardBody>
                          <CardTitle>Billing Details</CardTitle>
                          <CardText>Time to pay <Button className="ml-3" color="secondary">pay</Button></CardText>
                        </CardBody>
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

              <h2 className="mt-5">Classic tabs</h2>

              <Nav classicTabs color="cyan">
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemClassicTabs1 === '1' })} onClick={() => { this.toggleClassicTabs1('1'); }}>
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemClassicTabs1 === '2' })} onClick={() => { this.toggleClassicTabs1('2'); }}>
                  Follow
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemClassicTabs1 === '3' })} onClick={() => { this.toggleClassicTabs1('3'); }}>
                        Contact
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemClassicTabs1 === '4' })} onClick={() => { this.toggleClassicTabs1('4'); }}>
                    Be Awesome
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent className="card" activeItem={this.state.activeItemClassicTabs1}>
                <TabPane tabId="1">
                <p>Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias.</p>
                </TabPane>
                <TabPane tabId="2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>
                </TabPane>
                <TabPane tabId="3">
                <p>Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias.</p>
                </TabPane>
                <TabPane tabId="4">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>
                </TabPane>
              </TabContent>

              <Nav classicTabs color="orange" className="mt-5">
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemClassicTabs2 === '1' })} onClick={() => { this.toggleClassicTabs2('1'); }}>
                  <Fa icon="user" size="2x"/><br/>
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemClassicTabs2 === '2' })} onClick={() => { this.toggleClassicTabs2('2'); }}>
                  <Fa icon="heart" size="2x"/><br/>
                  Follow
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemClassicTabs2 === '3' })} onClick={() => { this.toggleClassicTabs2('3'); }}>
                  <Fa icon="envelope" size="2x"/><br/>
                        Contact
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemClassicTabs2 === '4' })} onClick={() => { this.toggleClassicTabs2('4'); }}>
                  <Fa icon="star" size="2x"/><br/>
                    Be Awesome
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent className="card mb-5" activeItem={this.state.activeItemClassicTabs2}>
                <TabPane tabId="1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>
                </TabPane>
                <TabPane tabId="2">
                <p>Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias.</p>
                </TabPane>
                <TabPane tabId="3">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>
                </TabPane>
                <TabPane tabId="4">
                <p>Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias.</p>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default TabsPage;
