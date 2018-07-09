import React, { Component } from 'react';
import { Container, Row, Col, Card, CardUp, Avatar, CardBody, Fa, Carousel, CarouselInner, CarouselItem, CarouselControl, Testimonial, TestimonialControl } from 'mdbreact';

class TestimonialsPage extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      maxLength: 3
    };
  }

  next() {
    let nextItem = this.state.activeItem + 1;
    if(nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    let prevItem = this.state.activeItem - 1;
    if(prevItem < 1) {
      this.setState({ activeItem: this.state.maxLength });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  render() {
    const { activeItem } = this.state;

    return(
      <Container>
        <section className="text-center my-5">

          <h2 className="h1-responsive font-weight-bold my-5">Testimonials v.1</h2>
          <p className="dark-grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>

          <Row>

            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card testimonial>
                <CardUp color="info"></CardUp>
                <Avatar className="mx-auto white">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" className="rounded-circle img-fluid"/>
                </Avatar>
                <CardBody>
                  <h4 className="font-weight-bold mb-4">John Doe</h4>
                  <hr/>
                  <p className="dark-grey-text mt-4"><Fa icon="quote-left" className="pr-2"></Fa>Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.</p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6" className="mb-lg-0 mb-4">
              <Card testimonial>
                <CardUp gradient="blue"></CardUp>
                <Avatar className="mx-auto white">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" className="rounded-circle img-fluid"/>
                </Avatar>
                <CardBody>
                  <h4 className="font-weight-bold mb-4">Anna Aston</h4>
                  <hr/>
                  <p className="dark-grey-text mt-4"><i className="fa fa-quote-left pr-2"></i>Neque cupiditate assumenda in maiores repudiandae mollitia architecto.</p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6" className="mb-lg-0 mb-4">
              <Card testimonial>
                <CardUp className="indigo"></CardUp>
                <Avatar className="mx-auto white">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle img-fluid"/>
                </Avatar>
                <CardBody>
                  <h4 className="font-weight-bold mb-4">Maria Kate</h4>
                  <hr/>
                  <p className="dark-grey-text mt-4"><i className="fa fa-quote-left pr-2"></i>Delectus impedit saepe officiis ab aliquam repellat rem unde ducimus.</p>
                </CardBody>
              </Card>
            </Col>

          </Row>

        </section>


        <section className="text-center my-5">

          <h2 className="h1-responsive font-weight-bold my-5">Testimonials v.2</h2>

          <Carousel testimonial interval={false} activeItem={this.state.activeItem} next={this.next} className="no-flex">
            <CarouselInner>
              <CarouselItem itemId="1">
                <Testimonial>
                  <Avatar className="mx-auto mb-4">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" className="rounded-circle img-fluid" alt="First sample avatar image"/>
                  </Avatar>
                  <p>
                    <Fa icon="quote-left"></Fa> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus eveniet molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste impedit quidem dolor veniam.
                  </p>
                  <h4 className="font-weight-bold">Anna Deynah</h4>
                  <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
                  <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star-half-full" className="blue-text"> </Fa>
                </Testimonial>
              </CarouselItem>
              <CarouselItem itemId="2">
                <Testimonial>
                  <Avatar className="mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" className="rounded-circle img-fluid" alt="Second sample avatar image"/>
                  </Avatar>
                  <p>
                    <Fa icon="quote-left"></Fa> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore. 
                  </p>
                  <h4 className="font-weight-bold">Maria Kate</h4>
                  <h6 className="font-weight-bold my-3">Photographer at Studio LA</h6>
                  <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star" className="blue-text"> </Fa>
                </Testimonial>
              </CarouselItem>
              <CarouselItem itemId="3">
                <Testimonial>
                  <Avatar className="mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" className="rounded-circle img-fluid" alt="Third sample avatar image"/>
                  </Avatar>
                  <p>
                    <Fa icon="quote-left"></Fa> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                  </p>
                  <h4 className="font-weight-bold">John Doe</h4>
                  <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>
                  <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star-o" className="blue-text"> </Fa>
                </Testimonial>
              </CarouselItem>
            </CarouselInner>
            <TestimonialControl direction="prev" role="button" onClick={() => { this.prev(); }} />
            <TestimonialControl direction="next" role="button" onClick={() => { this.next(); }} />
          </Carousel>

        </section>

        <section className="team-section text-center my-5">

          <h2 className="h1-responsive font-weight-bold my-5">Testimonials v.3</h2>
          <p className="dark-grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>

          <Row className="text-center">
            <Col md="4" className="mb-md-0 mb-5">
              <Testimonial>
                <Avatar className="mx-auto">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" className="rounded-circle z-depth-1 img-fluid"/>
                </Avatar>
                <h4 className="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
                <h6 className="font-weight-bold blue-text my-3">Web Designer</h6>
                <p className="font-weight-normal dark-grey-text">
                  <Fa className="fa fa-quote-left pr-2"></Fa>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                <div className="orange-text">
                  <Fa icon="star"> </Fa>
                  <Fa icon="star"> </Fa>
                  <Fa icon="star"> </Fa>
                  <Fa icon="star"> </Fa>
                  <Fa icon="star-half-full"> </Fa>
                </div>
              </Testimonial>
            </Col>
            <Col md="4" className="mb-md-0 mb-5">
              <Testimonial>
                <Avatar className="mx-auto">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" className="rounded-circle z-depth-1 img-fluid"/>
                </Avatar>
                <h4 className="font-weight-bold dark-grey-text mt-4">John Doe</h4>
                <h6 className="font-weight-bold blue-text my-3">Web Developer</h6>
                <p className="font-weight-normal dark-grey-text">
                  <Fa className="fa fa-quote-left pr-2"></Fa>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
                <div className="orange-text">
                  <Fa icon="star"> </Fa>
                  <Fa icon="star"> </Fa>
                  <Fa icon="star"> </Fa>
                  <Fa icon="star"> </Fa>
                  <Fa icon="star"> </Fa>
                </div>
              </Testimonial>
            </Col>
            <Col md="4">
              <Testimonial>
                <Avatar className="mx-auto">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle z-depth-1 img-fluid"/>
                </Avatar>
                <h4 className="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
                <h6 className="font-weight-bold blue-text my-3">Photographer</h6>
                <p className="font-weight-normal dark-grey-text">
                  <Fa className="fa fa-quote-left pr-2"></Fa>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>
                <div className="orange-text">
                  <Fa icon="star"> </Fa>
                  <Fa icon="star"> </Fa>
                  <Fa icon="star"> </Fa>
                  <Fa icon="star"> </Fa>
                  <Fa icon="star-o"> </Fa>
                </div>
              </Testimonial>
            </Col>
          </Row>

        </section>


      </Container>
    );
  };
}

export default TestimonialsPage;
