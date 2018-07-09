import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText, CardFooter, Fa, Tooltip, Badge, Carousel, CarouselControl, CarouselInner, CarouselItem, CarouselIndicators, CarouselIndicator, Button } from 'mdbreact';

class EcommercePage extends Component {
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

  render() {
    const { activeItem, length, slide } = this.state;
    return(
      <Container>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Our bestsellers</h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          <Row>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <Card cascade narrow ecommerce>
                <CardImage src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg" top alt="sample photo" overlay="white-slight" />
                <CardBody className="text-center">
                  <a href="" className="grey-text">
                    <h5>Denim</h5>
                  </a>
                  <CardTitle>
                    <strong>
                      <a href="">Denim trousers</a>
                    </strong>
                  </CardTitle>
                  <ul className="rating">
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star-o"></Fa>
                    </li>
                  </ul>
                  <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</CardText>
                  <CardFooter className="px-1">
                    <span className="float-left font-weight-bold">
                      <strong>49$</strong>
                    </span>
                    <span className="float-right">
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-shopping-cart grey-text ml-3" tooltipContent="Add to cart"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-share-alt grey-text ml-3" tooltipContent="Share"/>
                      <Tooltip placement="top" tag="a" component="i" className="active" componentClass="fa fa-heart ml-3" tooltipContent="Added to watchlist"/>
                    </span>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <Card cascade narrow ecommerce>
                <CardImage src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/2.jpg" top alt="sample photo" overlay="white-slight" />
                <CardBody className="text-center">
                  <a href="" className="grey-text">
                    <h5>Shoes</h5>
                  </a>
                  <CardTitle>
                    <strong>
                      <a href="">High heels</a>
                    </strong>
                  </CardTitle>
                  <ul className="rating">
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                  </ul>
                  <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</CardText>
                  <CardFooter className="px-1">
                    <span className="float-left font-weight-bold">
                      <strong>89$</strong>
                    </span>
                    <span className="float-right">
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-shopping-cart grey-text ml-3" tooltipContent="Add to cart"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-share-alt grey-text ml-3" tooltipContent="Share"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                    </span>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <Card cascade narrow ecommerce>
                <CardImage src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/4.jpg" top alt="sample photo" overlay="white-slight" />
                <CardBody className="text-center">
                  <a href="" className="grey-text">
                    <h5>Outwear</h5>
                  </a>
                  <CardTitle>
                    <strong>
                      <a href="">Brown coat</a>
                    </strong>
                  </CardTitle>
                  <ul className="rating">
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star-half-full"></Fa>
                    </li>
                  </ul>
                  <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</CardText>
                  <CardFooter className="px-1">
                    <span className="float-left font-weight-bold">
                      <strong>59$</strong>
                    </span>
                    <span className="float-right">
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-shopping-cart grey-text ml-3" tooltipContent="Add to cart"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-share-alt grey-text ml-3" tooltipContent="Share"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                    </span>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <Card cascade narrow ecommerce>
                <CardImage src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/3.jpg" top alt="sample photo" overlay="white-slight" />
                <CardBody className="text-center">
                  <a href="" className="grey-text">
                    <h5>Blouses</h5>
                  </a>
                  <CardTitle>
                    <strong>
                      <a href="">Shirt</a>
                    </strong>
                  </CardTitle>
                  <ul className="rating">
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star-o"></Fa>
                    </li>
                  </ul>
                  <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</CardText>
                  <CardFooter className="px-1">
                    <span className="float-left font-weight-bold">
                      <strong>119$</strong>
                    </span>
                    <span className="float-right">
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-shopping-cart grey-text ml-3" tooltipContent="Add to cart"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-share-alt grey-text ml-3" tooltipContent="Share"/>
                      <Tooltip placement="top" tag="a" component="i" className="active" componentClass="fa fa-heart ml-3" tooltipContent="Added to watchlist"/>
                    </span>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Our bestsellers</h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          <Row>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card wide ecommerce>
                <CardImage src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg" top alt="sample photo" />
                <CardBody className="text-center">
                  <a href="" className="text-muted">
                    <h5>Camera</h5>
                  </a>
                  <CardTitle>
                    <strong><a href="">GoPro</a></strong>
                  </CardTitle>
                  <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</CardText>
                  <CardFooter className="px-1">
                    <span className="float-left font-weight-bold">
                      <strong>1439$</strong>
                    </span>
                    <span className="float-right">
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                    </span>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card wide ecommerce>
                <CardImage src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (49).jpg" top alt="sample photo" />
                <CardBody className="text-center">
                  <a href="" className="text-muted">
                    <h5>Photography</h5>
                  </a>
                  <CardTitle>
                    <strong><a href="">Camera</a></strong>
                  </CardTitle>
                  <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</CardText>
                  <CardFooter className="px-1">
                    <span className="float-left font-weight-bold">
                      <strong>1160$</strong>
                    </span>
                    <span className="float-right">
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                    </span>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card wide ecommerce>
                <CardImage src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg" top alt="sample photo" />
                <CardBody className="text-center">
                  <a href="" className="text-muted">
                    <h5>Smartphone</h5>
                  </a>
                  <CardTitle>
                    <strong><a href="">iPhone 6S</a></strong>
                  </CardTitle>
                  <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</CardText>
                  <CardFooter className="px-1">
                    <span className="float-left font-weight-bold">
                      <strong>2160$</strong>
                    </span>
                    <span className="float-right">
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                    </span>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Our bestsellers</h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          <Row>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <Card className="align-items-center">
                <CardImage src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" top alt="sample photo" overlay="white-slight" />
                <CardBody className="text-center">
                  <a href="" className="grey-text">
                    <h5>Shirt</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="" className="dark-grey-text">Denim shirt <Badge pill color="danger">NEW</Badge></a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold blue-text">
                    <strong>120$</strong>
                  </h4>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <Card className="align-items-center">
                <CardImage src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg" top alt="sample photo" overlay="white-slight" />
                <CardBody className="text-center">
                  <a href="" className="grey-text">
                    <h5>Sport wear</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="" className="dark-grey-text">Sweatshirt</a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold blue-text">
                    <strong>139$</strong>
                  </h4>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <Card className="align-items-center">
                <CardImage src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg" top alt="sample photo" overlay="white-slight" />
                <CardBody className="text-center">
                  <a href="" className="grey-text">
                    <h5>Sport wear</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="" className="dark-grey-text">Grey blouse <Badge pill color="primary">BEST</Badge></a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold blue-text">
                    <strong>99$</strong>
                  </h4>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <Card className="align-items-center">
                <CardImage src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg" top alt="sample photo" overlay="white-slight" />
                <CardBody className="text-center">
                  <a href="" className="grey-text">
                    <h5>Outwear</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="" className="dark-grey-text">Black jacket</a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold blue-text">
                    <strong>219$</strong>
                  </h4>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Our bestsellers</h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          <Row>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <Card collection className="z-depth-1-half">
                <div className="view zoom">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.jpg" className="img-fluid" alt=""/>
                  <div className="stripe dark">
                    <a>
                      <p>Red trousers <Fa icon="angle-right"></Fa></p>
                    </a>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <Card collection className="z-depth-1-half">
                <div className="view zoom">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg" className="img-fluid" alt=""/>
                  <div className="stripe dark">
                    <a>
                      <p>Sweatshirt <Fa icon="angle-right"></Fa></p>
                    </a>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <Card collection className="z-depth-1-half">
                <div className="view zoom">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/9.jpg" className="img-fluid" alt=""/>
                  <div className="stripe dark">
                    <a>
                      <p>Accessories <Fa icon="angle-right"></Fa></p>
                    </a>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <Card collection className="z-depth-1-half">
                <div className="view zoom">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg" className="img-fluid" alt=""/>
                  <div className="stripe dark">
                    <a>
                      <p>Sweatshirt <Fa icon="angle-right"></Fa></p>
                    </a>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </section>     

        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Our bestsellers</h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          <Carousel
            multiItem
            slide={this.state.slide}
            activeItem={this.state.activeItem}
            next={this.next}>
            <div className="controls-top">
              <CarouselControl iconLeft className="btn-floating" direction="prev" role="button" onClick={() => { this.prev(); }} />
              <CarouselControl iconRight className="btn-floating" direction="next" role="button" onClick={() => { this.next(); }} />
            </div>
            <CarouselIndicators>
              <CarouselIndicator active={activeItem === 1 ? true : false} onClick={() => { this.goToIndex(1); }}></CarouselIndicator>
              <CarouselIndicator active={activeItem === 2 ? true : false} onClick={() => { this.goToIndex(2); }}></CarouselIndicator>
              <CarouselIndicator active={activeItem === 3 ? true : false} onClick={() => { this.goToIndex(3); }}></CarouselIndicator>
            </CarouselIndicators>
            <CarouselInner>
              <Row>
                <CarouselItem itemId="1">
                  <Col md="4">
                    <Card narrow ecommerce className="mb-2">
                      <CardImage top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(39).jpg" alt="sample photo"/>
                      <CardBody>
                        <a href="" className="text-muted">
                          <h5>Shoes</h5>
                        </a>
                        <CardTitle><strong><a href="">Leather boots</a></strong></CardTitle>
                        <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</CardText>
                        <CardFooter className="px-1">
                          <span className="float-left">69$</span>
                          <span className="float-right">
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                          </span>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4" className="clearfix d-none d-md-block">
                    <Card narrow ecommerce className="mb-2">
                      <CardImage top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(22).jpg" alt="sample photo"/>
                      <CardBody>
                        <a href="" className="text-muted">
                          <h5>Jeans</h5>
                        </a>
                        <CardTitle><strong><a href="">Slim jeans</a></strong></CardTitle>
                        <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</CardText>
                        <CardFooter className="px-1">
                          <span className="float-left">99$</span>
                          <span className="float-right">
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                          </span>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4" className="clearfix d-none d-md-block">
                    <Card narrow ecommerce className="mb-2">
                      <CardImage top src="https://mdbootstrap.com/img/Photos/Others/img%20(31).jpg" alt="sample photo"/>
                      <CardBody>
                        <a href="" className="text-muted">
                          <h5>Shorts</h5>
                        </a>
                        <CardTitle><strong><a href="">Denim shorts</a></strong></CardTitle>
                        <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</CardText>
                        <CardFooter className="px-1">
                          <span className="float-left">49$</span>
                          <span className="float-right">
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                          </span>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                </CarouselItem>
                <CarouselItem itemId="2">
                  <Col md="4">
                    <Card narrow ecommerce className="mb-2">
                      <CardImage top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg" alt="sample photo"/>
                      <CardBody>
                        <a href="" className="text-muted">
                          <h5>Shoes</h5>
                        </a>
                        <CardTitle><strong><a href="">Leather boots</a></strong></CardTitle>
                        <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</CardText>
                        <CardFooter className="px-1">
                          <span className="float-left">69$</span>
                          <span className="float-right">
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                          </span>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4" className="clearfix d-none d-md-block">
                    <Card narrow ecommerce className="mb-2">
                      <CardImage top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(37).jpg" alt="sample photo"/>
                      <CardBody>
                        <a href="" className="text-muted">
                          <h5>Jeans</h5>
                        </a>
                        <CardTitle><strong><a href="">Slim jeans</a></strong></CardTitle>
                        <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</CardText>
                        <CardFooter className="px-1">
                          <span className="float-left">99$</span>
                          <span className="float-right">
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                          </span>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4" className="clearfix d-none d-md-block">
                    <Card narrow ecommerce className="mb-2">
                      <CardImage top src="https://mdbootstrap.com/img/Photos/Others/img%20(35).jpg" alt="sample photo"/>
                      <CardBody>
                        <a href="" className="text-muted">
                          <h5>Shorts</h5>
                        </a>
                        <CardTitle><strong><a href="">Denim shorts</a></strong></CardTitle>
                        <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</CardText>
                        <CardFooter className="px-1">
                          <span className="float-left">49$</span>
                          <span className="float-right">
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                          </span>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                </CarouselItem>
                <CarouselItem itemId="3">
                  <Col md="4">
                    <Card narrow ecommerce className="mb-2">
                      <CardImage top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(32).jpg" alt="sample photo"/>
                      <CardBody>
                        <a href="" className="text-muted">
                          <h5>Shoes</h5>
                        </a>
                        <CardTitle><strong><a href="">Leather boots</a></strong></CardTitle>
                        <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</CardText>
                        <CardFooter className="px-1">
                          <span className="float-left">69$</span>
                          <span className="float-right">
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                          </span>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4" className="clearfix d-none d-md-block">
                    <Card narrow ecommerce className="mb-2">
                      <CardImage top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(33).jpg" alt="sample photo"/>
                      <CardBody>
                        <a href="" className="text-muted">
                          <h5>Jeans</h5>
                        </a>
                        <CardTitle><strong><a href="">Slim jeans</a></strong></CardTitle>
                        <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</CardText>
                        <CardFooter className="px-1">
                          <span className="float-left">99$</span>
                          <span className="float-right">
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                          </span>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4" className="clearfix d-none d-md-block">
                    <Card narrow ecommerce className="mb-2">
                      <CardImage top src="https://mdbootstrap.com/img/Photos/Others/img%20(38).jpg" alt="sample photo"/>
                      <CardBody>
                        <a href="" className="text-muted">
                          <h5>Shorts</h5>
                        </a>
                        <CardTitle><strong><a href="">Denim shorts</a></strong></CardTitle>
                        <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</CardText>
                        <CardFooter className="px-1">
                          <span className="float-left">49$</span>
                          <span className="float-right">
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                          </span>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                </CarouselItem>
              </Row>
            </CarouselInner>
          </Carousel>
        </section>   

        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Our pricing plans</h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          <Row>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card pricing>
                <div className="price header white-text blue rounded-top">
                  <h2 className="number">10</h2>
                  <div className="version">
                    <h5 className="mb-0">Basic</h5>
                  </div>
                </div>
                <CardBody className="striped mb-1">
                  <ul>
                    <li>
                      <p className="mt-2"><Fa icon="check" className="green-text pr-2"></Fa>20 GB Of Storage</p>
                    </li>
                    <li>
                      <p><Fa icon="check" className="green-text pr-2"></Fa>2 Email Accounts</p>
                    </li>
                    <li>
                      <p><Fa icon="times" className="red-text pr-2"></Fa>24h Tech Support</p>
                    </li>
                    <li>
                      <p><Fa icon="times" className="red-text pr-2"></Fa>300 GB Bandwidth</p>
                    </li>
                    <li>
                      <p><Fa icon="times" className="red-text pr-2"></Fa>User Management </p>
                    </li>
                  </ul>
                  <Button color="blue">Buy now</Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card pricing>
                <div className="price header white-text indigo rounded-top">
                  <h2 className="number">20</h2>
                  <div className="version">
                    <h5 className="mb-0">Pro</h5>
                  </div>
                </div>
                <CardBody className="striped mb-1">
                  <ul>
                    <li>
                      <p className="mt-2"><Fa icon="check" className="green-text pr-2"></Fa>20 GB Of Storage</p>
                    </li>
                    <li>
                      <p><Fa icon="check" className="green-text pr-2"></Fa>4 Email Accounts</p>
                    </li>
                    <li>
                      <p><Fa icon="check" className="green-text pr-2"></Fa>24h Tech Support</p>
                    </li>
                    <li>
                      <p><Fa icon="times" className="red-text pr-2"></Fa>300 GB Bandwidth</p>
                    </li>
                    <li>
                      <p><Fa icon="times" className="red-text pr-2"></Fa>User Management </p>
                    </li>
                  </ul>
                  <Button color="indigo">Buy now</Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card pricing>
                <div className="price header white-text deep-purple rounded-top">
                  <h2 className="number">30</h2>
                  <div className="version">
                    <h5 className="mb-0">Enterprise</h5>
                  </div>
                </div>
                <CardBody className="striped mb-1">
                  <ul>
                    <li>
                      <p className="mt-2"><Fa icon="check" className="green-text pr-2"></Fa>20 GB Of Storage</p>
                    </li>
                    <li>
                      <p><Fa icon="check" className="green-text pr-2"></Fa>5 Email Accounts</p>
                    </li>
                    <li>
                      <p><Fa icon="check" className="green-text pr-2"></Fa>24h Tech Support</p>
                    </li>
                    <li>
                      <p><Fa icon="check" className="green-text pr-2"></Fa>300 GB Bandwidth</p>
                    </li>
                    <li>
                      <p><Fa icon="check" className="green-text pr-2"></Fa>User Management </p>
                    </li>
                  </ul>
                  <Button color="deep-purple">Buy now</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Our pricing plans</h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          <Row>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card className="card-image" style={{backgroundImage: 'url("https://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg")'}}>
                <div className="text-white text-center pricing-card d-flex align-items-center rgba-stylish-strong py-3 px-3 rounded">
                  <CardBody>
                    <h5>Basic</h5>
                    <div className="price pt-0">
                      <h2 className="number mb-0">10</h2>
                    </div>
                    <ul className="striped mb-0">
                      <li>
                        <p><strong>1</strong> project</p>
                      </li>
                      <li>
                        <p><strong>100</strong> components</p>
                      </li>
                      <li>
                        <p><strong>150</strong> features</p>
                      </li>
                      <li>
                        <p><strong>200</strong> members</p>
                      </li>
                      <li>
                        <p><strong>250</strong> messages</p>
                      </li>
                    </ul>
                    <Button outline color="white">Buy now</Button>
                  </CardBody>
                </div>
              </Card>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card className="card-image" style={{backgroundImage: 'url("https://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg")'}}>
                <div className="text-white text-center pricing-card d-flex align-items-center rgba-teal-strong py-3 px-3 rounded">
                  <CardBody>
                    <h5>Pro</h5>
                    <div className="price pt-0">
                      <h2 className="number mb-0">20</h2>
                    </div>
                    <ul className="striped mb-0">
                      <li>
                        <p><strong>3</strong> projects</p>
                      </li>
                      <li>
                        <p><strong>200</strong> components</p>
                      </li>
                      <li>
                        <p><strong>250</strong> features</p>
                      </li>
                      <li>
                        <p><strong>300</strong> members</p>
                      </li>
                      <li>
                        <p><strong>350</strong> messages</p>
                      </li>
                    </ul>
                    <Button outline color="white">Buy now</Button>
                  </CardBody>
                </div>
              </Card>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card className="card-image" style={{backgroundImage: 'url("https://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg")'}}>
                <div className="text-white text-center pricing-card d-flex align-items-center rgba-stylish-strong py-3 px-3 rounded">
                  <CardBody>
                    <h5>Enterprise</h5>
                    <div className="price pt-0">
                      <h2 className="number mb-0">30</h2>
                    </div>
                    <ul className="striped mb-0">
                      <li>
                        <p><strong>5</strong> projects</p>
                      </li>
                      <li>
                        <p><strong>300</strong> components</p>
                      </li>
                      <li>
                        <p><strong>350</strong> features</p>
                      </li>
                      <li>
                        <p><strong>400</strong> members</p>
                      </li>
                      <li>
                        <p><strong>450</strong> messages</p>
                      </li>
                    </ul>
                    <Button outline color="white">Buy now</Button>
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Our pricing plans</h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          <Row>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card>        
                <CardBody>
                  <h5 className="mb-4">Basic plan</h5>
                  <div className="d-flex justify-content-center">
                    <div className="card-circle d-flex justify-content-center align-items-center">
                      <Fa icon="home" className="light-blue-text"></Fa>
                    </div>
                  </div>
                  <h2 className="font-weight-bold my-4">59$</h2>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa pariatur id nobis accusamus deleniti cumque hic laborum.</p>
                  <Button rounded color="light-blue">Buy now</Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card className="purple-gradient">        
                <CardBody className="white-text">
                  <h5 className="mb-4">Premium plan</h5>
                  <div className="d-flex justify-content-center">
                    <div className="card-circle d-flex justify-content-center align-items-center">
                      <Fa icon="group" className="light-blue-text"></Fa>
                    </div>
                  </div>
                  <h2 className="font-weight-bold my-4">79$</h2>
                  <p>Esse corporis saepe laudantium velit adipisci cumque iste ratione facere non distinctio cupiditate sequi atque.</p>
                  <Button outline rounded color="white">Buy now</Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card>        
                <CardBody>
                  <h5 className="mb-4">Advanced plan</h5>
                  <div className="d-flex justify-content-center">
                    <div className="card-circle d-flex justify-content-center align-items-center">
                      <Fa icon="bar-chart" className="light-blue-text"></Fa>
                    </div>
                  </div>

                  <h2 className="font-weight-bold my-4">99$</h2>
                  <p className="grey-text">At ab ea a molestiae corrupti numquam quo beatae minima ratione magni accusantium repellat eveniet quia vitae.</p>
                  <Button rounded color="light-blue">Buy now</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Our pricing plans</h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          <Row>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card>        
                <CardBody>
                  <h5 className="mb-4">Basic plan</h5>
                  <div className="d-flex justify-content-center">
                    <div className="card-circle d-flex justify-content-center align-items-center">
                      <Fa icon="home" className="indigo-text"></Fa>
                    </div>
                  </div>
                  <h2 className="font-weight-bold my-4">59$</h2>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa pariatur id nobis accusamus deleniti cumque hic laborum.</p>
                  <Button rounded color="indigo">Buy now</Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card className="indigo">        
                <CardBody className="white-text">
                  <h5 className="mb-4">Premium plan</h5>
                  <div className="d-flex justify-content-center">
                    <div className="card-circle d-flex justify-content-center align-items-center">
                      <Fa icon="group" className="light-blue-text"></Fa>
                    </div>
                  </div>
                  <h2 className="font-weight-bold my-4">79$</h2>
                  <p>Esse corporis saepe laudantium velit adipisci cumque iste ratione facere non distinctio cupiditate sequi atque.</p>
                  <Button outline rounded color="white">Buy now</Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card>        
                <CardBody>
                  <h5 className="mb-4">Advanced plan</h5>
                  <div className="d-flex justify-content-center">
                    <div className="card-circle d-flex justify-content-center align-items-center">
                      <Fa icon="bar-chart" className="indigo-text"></Fa>
                    </div>
                  </div>
                  <h2 className="font-weight-bold my-4">99$</h2>
                  <p className="grey-text">At ab ea a molestiae corrupti numquam quo beatae minima ratione magni accusantium repellat eveniet quia vitae.</p>
                  <Button rounded color="indigo">Buy now</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Our pricing plans</h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          <Row>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card pricing>
                <CardBody>
                  <h5 className="font-weight-bold mt-3">Basic</h5>
                  <div className="price pt-0">
                    <h2 className="number red-text mb-0">10</h2>
                  </div>
                  <ul className="striped mb-1">
                    <li>
                      <p><strong>1</strong> project</p>
                    </li>
                    <li>
                      <p><strong>100</strong> components</p>
                    </li>
                    <li>
                      <p><strong>150</strong> features</p>
                    </li>
                    <li>
                      <p><strong>200</strong> members</p>
                    </li>
                    <li>
                      <p><strong>250</strong> messages</p>
                    </li>
                  </ul>
                  <Button rounded color="danger" className="mb-4">Buy now</Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card className="card-image" style={{backgroundImage: 'url("https://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg")'}}>
                <div className="text-white text-center pricing-card d-flex align-items-center rgba-indigo-strong py-3 px-3 rounded">
                  <CardBody>
                    <h5 className="font-weight-bold mt-2">Pro</h5>
                    <div className="price pt-0">
                      <h2 className="number mb-0">20</h2>
                    </div>
                    <ul className="striped mb-0">
                      <li>
                        <p><strong>3</strong> projects</p>
                      </li>
                      <li>
                        <p><strong>200</strong> components</p>
                      </li>
                      <li>
                        <p><strong>250</strong> features</p>
                      </li>
                      <li>
                        <p><strong>300</strong> members</p>
                      </li>
                      <li>
                        <p><strong>350</strong> messages</p>
                      </li>
                    </ul>
                    <Button outline color="white">Buy now</Button>
                  </CardBody>
                </div>
              </Card>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card pricing>
                <CardBody>
                  <h5 className="font-weight-bold mt-3">Enterprise</h5>
                  <div className="price pt-0">
                    <h2 className="number mb-0">30</h2>
                  </div>
                  <ul className="striped mb-1">
                    <li>
                      <p><strong>5</strong> projects</p>
                    </li>
                    <li>
                      <p><strong>300</strong> components</p>
                    </li>
                    <li>
                      <p><strong>350</strong> features</p>
                    </li>
                    <li>
                      <p><strong>400</strong> members</p>
                    </li>
                    <li>
                      <p><strong>450</strong> messages</p>
                    </li>
                  </ul>
                  <Button rounded color="danger" className="mb-4">Buy now</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Our pricing plans</h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          <Row>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card pricing className="white-text">
                <div className="aqua-gradient rounded-top">
                  <h4 className="option" style={{padding: '2.5rem', marginBottom: 0, fontWeight: 500}}>BASIC</h4>
                </div>
                <CardBody className="striped green-striped card-background px-5">
                  <h2 className="my-4 pb-3 h1">20$</h2>
                  <ul>
                    <li>
                      <p><strong>1</strong> project</p>
                    </li>
                    <li>
                      <p><strong>100</strong> components</p>
                    </li>
                    <li>
                      <p><strong>150</strong> features</p>
                    </li>
                    <li>
                      <p><strong>200</strong> members</p>
                    </li>
                  </ul>
                  <Button rounded gradient="aqua" className="mb-3 mt-3">Buy now</Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card pricing className="white-text">
                <div className="peach-gradient rounded-top">
                  <h4 className="option" style={{padding: '2.5rem', marginBottom: 0, fontWeight: 500}}>PRO</h4>
                </div>
                <CardBody className="striped orange-striped card-background px-5">
                  <h2 className="my-4 pb-3 h1">80$</h2>
                  <ul>
                    <li>
                      <p><strong>3</strong> projects</p>
                    </li>
                    <li>
                      <p><strong>200</strong> components</p>
                    </li>
                    <li>
                      <p><strong>250</strong> features</p>
                    </li>
                    <li>
                      <p><strong>300</strong> members</p>
                    </li>
                  </ul>
                  <Button rounded gradient="peach" className="mb-3 mt-3">Buy now</Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card pricing className="white-text">
                <div className="purple-gradient rounded-top">
                  <h4 className="option" style={{padding: '2.5rem', marginBottom: 0, fontWeight: 500}}>ENTERPRISE</h4>
                </div>
                <CardBody className="striped purple-striped card-background px-5">
                  <h2 className="my-4 pb-3 h1">100$</h2>
                  <ul>
                    <li>
                      <p><strong>5</strong> projects</p>
                    </li>
                    <li>
                      <p><strong>300</strong> components</p>
                    </li>
                    <li>
                      <p><strong>350</strong> features</p>
                    </li>
                    <li>
                      <p><strong>400</strong> members</p>
                    </li>
                  </ul>
                  <Button rounded gradient="purple" className="mb-3 mt-3">Buy now</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>

      </Container>
    );
  };
}

export default EcommercePage;
