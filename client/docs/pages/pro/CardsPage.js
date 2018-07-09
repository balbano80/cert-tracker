import React from 'react';
import { Container, Col, Row, Card, CardUp, CardBody, CardImage, CardTitle, CardText, Avatar, FlippingCard, Fa } from 'mdbreact';

class FlippingCardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {flipped: false};
    this.handleFlipping = this.handleFlipping.bind(this);
  }

  handleFlipping() {
    this.setState({flipped: !this.state.flipped})
  }
  render() {

    const colStyle = { maxWidth: '22rem' };

    return (
        <Container>
          <h2 className="my-5">Stylish cards</h2>
          <Row className="mt-2">
            <Col style={colStyle}>

              <Card>
                <CardImage top src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg" overlay="white-slight" hover waves alt="Card image cap"/>
                <CardBody>
                <a className="activator waves-effect waves-light mr-4"><Fa icon="share-alt"></Fa></a>
                <CardTitle>Card Title</CardTitle>
                <hr />
                <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                <a href="#!" className="black-text d-flex justify-content-end"><h5>Read more <Fa icon="angle-double-right"></Fa></h5></a>
                </CardBody>
              </Card>

            </Col>
            <Col style={colStyle}>

              <Card>
                <CardImage top src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg" overlay="white-slight" hover waves alt="Card image cap"/>
                <CardBody className="elegant-color white-text rounded-bottom">
                <a className="activator waves-effect waves-light mr-4"><Fa icon="share-alt"></Fa></a>
                <CardTitle>Card Title</CardTitle>
                <hr className="hr-light" />
                <CardText className="white-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                <a href="#!" className="black-text d-flex justify-content-end"><h5 className="white-text">Read more <Fa icon="angle-double-right"></Fa></h5></a>
                </CardBody>
              </Card>

            </Col>
          </Row>

          <h2 className="my-5">Testimonial cards</h2>

          <Row className="mt-2">
            <Col style={colStyle}>

              <Card testimonial>
                <CardUp className="indigo lighten-1" />
                <Avatar className="mx-auto white">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" />
                </Avatar>
                <CardBody>
                  <h4 className="card-title">Anna Doe</h4>
                  <hr />
                  <p><Fa icon="quote-left"></Fa> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>
                </CardBody>
              </Card>

            </Col>
            <Col style={colStyle}>

              <Card testimonial>
                <CardUp gradient="aqua" />
                <Avatar className="mx-auto white">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg" />
                </Avatar>
                <CardBody>
                  <h4 className="card-title">Martha Smith</h4>
                  <hr />
                  <p><Fa icon="quote-left"></Fa> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>
                </CardBody>
              </Card>

            </Col>
          </Row>

          <h2 className="my-5">Flipping card</h2>

          <Row>
            <Col>
              <FlippingCard flipped={this.state.flipped} className="text-center h-100 w-100" style={colStyle}>
                <Card className="face front">
                  <CardUp>
                    <img  className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg" alt="a photo of a house facade" />
                  </CardUp>
                  <Avatar className="mx-auto white" circle >
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" className="rounded-circle"/>
                </Avatar>
                  <CardBody>
                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                    <p className="font-weight-bold blue-text">Web developer</p>
                    <a className="rotate-btn" data-card="card-1" onClick={this.handleFlipping}><Fa icon="repeat"/> Click here to rotate</a>
                  </CardBody>
              </Card>
              <Card className="face back">
                <CardBody>
                  <h4 className="font-weight-bold">About me</h4>
                  <hr/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quae, dolores dicta. Blanditiis rem amet repellat, dolores nihil quae in mollitia asperiores ut rerum repellendus, voluptatum eum, officia laudantium quaerat?
                  </p>
                  <hr/>
                  <ul className="list-inline py-2">
                    <li className="list-inline-item"><a className="p-2 fa-lg fb-ic"><Fa icon="facebook"/></a></li>
                    <li className="list-inline-item"><a className="p-2 fa-lg tw-ic"><Fa icon="twitter"/></a></li>
                    <li className="list-inline-item"><a className="p-2 fa-lg gplus-ic"><Fa icon="google-plus"/></a></li>
                    <li className="list-inline-item"><a className="p-2 fa-lg li-ic"><Fa icon="linkedin"/></a></li>
                  </ul>
                  <a className="rotate-btn" data-card="card-1" onClick={this.handleFlipping}><Fa icon="undo"/> Click here to rotate back</a>
                </CardBody>
              </Card>
            </FlippingCard>
          </Col>
        </Row>
      </Container>
    );
  }

};

export default FlippingCardPage;
