import React, { Component } from 'react';
import { Carousel, CarouselControl, CarouselInner, CarouselItem, CarouselIndicators, CarouselIndicator, Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText, Button, Testimonial, Avatar, Fa } from 'mdbreact';

class TestimonialsMultiPage extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      length: 3,
      slide: true
    };
  }

  next() {
    let nextItem = this.state.activeItem + 1;
    if(nextItem > this.state.length) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    let prevItem = this.state.activeItem - 1;
    if(prevItem < 1) {
      this.setState({ activeItem: this.state.length });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  }

  render(){
    const { activeItem, length, slide } = this.state;
    return(
      <Container>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">Testimonials v.4</h2>
          <Row>
            <Carousel 
              testimonial
              multiItem
              slide={this.state.slide}
              activeItem={this.state.activeItem}
              next={this.next}>
              <div className="controls-top">
                <CarouselControl iconLeft className="btn-floating light-blue darken-4" direction="prev" role="button" onClick={() => { this.prev(); }} />
                <CarouselControl iconRight className="btn-floating light-blue darken-4" direction="next" role="button" onClick={() => { this.next(); }} />
              </div>
              <CarouselIndicators>
                <CarouselIndicator className="light-blue darken-4" active={activeItem === 1 ? true : false} onClick={() => { this.goToIndex(1); }}></CarouselIndicator>
                <CarouselIndicator className="light-blue darken-4" active={activeItem === 2 ? true : false} onClick={() => { this.goToIndex(2); }}></CarouselIndicator>
                <CarouselIndicator className="light-blue darken-4" active={activeItem === 3 ? true : false} onClick={() => { this.goToIndex(3); }}></CarouselIndicator>
              </CarouselIndicators>
              <CarouselInner>
                <Row>
                  <CarouselItem itemId="1">
                    <Col md="4">
                      <Testimonial>
                        <Avatar className="mx-auto">
                          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg" className="rounded-circle img-fluid"/>
                        </Avatar>
                        <h4 className="font-weight-bold mt-4">Anna Deynah</h4>
                        <h6 className="blue-text font-weight-bold my-3">Web Designer</h6>
                        <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p>
                        <div className="grey-text">
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star-half-full"> </Fa>
                        </div>
                      </Testimonial>
                    </Col>
                    <Col md="4" className="clearfix d-none d-md-block">
                      <Testimonial>
                        <Avatar className="mx-auto">
                          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" className="rounded-circle img-fluid"/>
                        </Avatar>
                        <h4 className="font-weight-bold mt-4">John Doe</h4>
                        <h6 className="blue-text font-weight-bold my-3">Web Developer</h6>
                        <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis laboriosam.</p>
                        <div className="grey-text">
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                        </div>
                      </Testimonial>
                    </Col>
                    <Col md="4" className="clearfix d-none d-md-block">
                      <Testimonial>
                        <Avatar className="mx-auto">
                          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" className="rounded-circle img-fluid"/>
                        </Avatar>
                        <h4 className="font-weight-bold mt-4">Abbey Clark</h4>
                        <h6 className="blue-text font-weight-bold my-3">Photographer</h6>
                        <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</p>
                        <div className="grey-text">
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star-o"> </Fa>
                        </div>
                      </Testimonial>
                    </Col>
                  </CarouselItem>
                  <CarouselItem itemId="2">
                    <Col md="4">
                      <Testimonial>
                        <Avatar className="mx-auto">
                          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg" className="rounded-circle img-fluid"/>
                        </Avatar>
                        <h4 className="font-weight-bold mt-4">Blake Dabney</h4>
                        <h6 className="blue-text font-weight-bold my-3">Web Designer</h6>
                        <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis laboriosam.</p>
                        <div className="grey-text">
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star-half-full"> </Fa>
                        </div>
                      </Testimonial>
                    </Col>
                    <Col md="4" className="clearfix d-none d-md-block">
                      <Testimonial>
                        <Avatar className="mx-auto">
                          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg" className="rounded-circle img-fluid"/>
                        </Avatar>
                        <h4 className="font-weight-bold mt-4">Andrea Clay</h4>
                        <h6 className="blue-text font-weight-bold my-3">Front-end developer</h6>
                        <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae.</p>
                        <div className="grey-text">
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                        </div>
                      </Testimonial>
                    </Col>
                    <Col md="4" className="clearfix d-none d-md-block">
                      <Testimonial>
                        <Avatar className="mx-auto">
                          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(7).jpg" className="rounded-circle img-fluid"/>
                        </Avatar>
                        <h4 className="font-weight-bold mt-4">Cami Gosse</h4>
                        <h6 className="blue-text font-weight-bold my-3">Phtographer</h6>
                        <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                        <div className="grey-text">
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star-o"> </Fa>
                        </div>
                      </Testimonial>
                    </Col>
                  </CarouselItem>
                  <CarouselItem itemId="3">
                    <Col md="4">
                      <Testimonial>
                        <Avatar className="mx-auto">
                          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" className="rounded-circle img-fluid"/>
                        </Avatar>
                        <h4 className="font-weight-bold mt-4">Bobby Haley</h4>
                        <h6 className="blue-text font-weight-bold my-3">Web Developer</h6>
                        <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae.</p>
                        <div className="grey-text">
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                        </div>
                      </Testimonial>
                    </Col>
                    <Col md="4" className="clearfix d-none d-md-block">
                      <Testimonial>
                        <Avatar className="mx-auto">
                          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle img-fluid"/>
                        </Avatar>
                        <h4 className="font-weight-bold mt-4">Elisa Janson</h4>
                        <h6 className="blue-text font-weight-bold my-3">Marketer</h6>
                        <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                        <div className="grey-text">
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star-half-full"> </Fa>
                        </div>
                      </Testimonial>
                    </Col>
                    <Col md="4" className="clearfix d-none d-md-block">
                      <Testimonial>
                        <Avatar className="mx-auto">
                          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" className="rounded-circle img-fluid"/>
                        </Avatar>
                        <h4 className="font-weight-bold mt-4">Rob Jacobs</h4>
                        <h6 className="blue-text font-weight-bold my-3">Front-end developer</h6>
                        <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis laboriosam.</p>
                        <div className="grey-text">
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star"> </Fa>
                          <Fa icon="star-o"> </Fa>
                        </div>
                      </Testimonial>
                    </Col>
                  </CarouselItem>
                </Row>
              </CarouselInner>
            </Carousel>
          </Row>
        </section>
      </Container>
    );
  }
}

export default TestimonialsMultiPage;