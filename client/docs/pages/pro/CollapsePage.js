import React, { Component } from 'react';
import { Container, Collapse, Card, CardBody, CollapseHeader } from 'mdbreact';

class CollapsePage extends Component {
  constructor(props) {
    super(props);
    this.onClick1 = this.onClick1.bind(this);
    this.onClick2 = this.onClick2.bind(this);
    this.onClick3 = this.onClick3.bind(this);

    this.state = {
      accordion: false
    };
  }
  onClick1() {
    let state = '';

    if(this.state.accordion !== 1) {
      state = 1;
    } else {
      state = false;
    }

    this.setState({
      accordion: state});
  }

  onClick2() {
    let state = '';

    if(this.state.accordion !== 2) {
      state = 2;
    } else {
      state = false;
    }

    this.setState({
      accordion: state});
  }

  onClick3() {
    let state = '';

    if(this.state.accordion !== 3) {
      state = 3;
    } else {
      state = false;
    }

    this.setState({
      accordion: state});
  }

  render() {
    return (
      <Container className="accordion mt-5">
        <h1>Accordion PRO</h1>
        <Card className="mt-3">
          <CollapseHeader onClick={this.onClick1}>Collapsible Group Item #1
            <i className={this.state.accordion === 1 ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i>
          </CollapseHeader>
          <Collapse isOpen={this.state.accordion === 1}>
            <CardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
              non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
              moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
              et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
              Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
              synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CollapseHeader onClick={this.onClick2}>Collapsible Group Item #2
            <i className={this.state.accordion === 2 ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i>
          </CollapseHeader>
            <Collapse isOpen={this.state.accordion === 2}>
              <CardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
              </CardBody>
            </Collapse>
        </Card>

        <Card>
          <CollapseHeader onClick={this.onClick3}>Collapsible Group Item #3
            <i className={this.state.accordion === 3 ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i>
          </CollapseHeader>
            <Collapse isOpen={this.state.accordion === 3}>
              <CardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
              </CardBody>
            </Collapse>
        </Card>

      </Container>
    );
  }
}

export default CollapsePage;
