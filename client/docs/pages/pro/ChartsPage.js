import React from 'react';
import { CirclePie } from 'salad-ui.chart';
import { Container, Row, Col, Fa } from 'mdbreact';

class ChartsPagePro extends React.Component {
  render() {
    return (
      <div style={{marginTop: '100px'}}>
        <Container>
          <h3 className="mt-5">Minimalist charts</h3>
          <Row className="text-center">
            <Col sm="4">
              <CirclePie width={100} height={100} strokeWidth={3} percent={56} strokeColor="#4FB64E" />
              <h6 className="mt-2"><span className="label green p-1 white-text">Sales <Fa icon="arrow-circle-up" /></span></h6>
            </Col>
            <Col sm="4">
              <CirclePie width={100} height={100} strokeWidth={3} percent={76} strokeColor="#EA3C3B" />
              <h6 className="mt-2"><span className="label red p-1 white-text">ROI <Fa icon="arrow-circle-down" /></span></h6>
            </Col>
            <Col sm="4">
              <CirclePie width={100} height={100} strokeWidth={3} percent={100} strokeColor="#9D9D9D" />
              <h6 className="mt-2"><span className="label grey p-1 white-text">Conversion <Fa icon="minus-square" /></span></h6>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
 
};

export default ChartsPagePro;
