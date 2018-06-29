import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Mask, Fa, View, Button} from 'mdbreact';

const BlogPage = () =>  {
  return(
    <Container>
      <h2 className="title text-center text-md-left pt-4 mt-5">
        <strong>Blog listing v.1 </strong>
      </h2>
      <Card className="my-5 px-5 pb-5">
      <CardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">Recent posts</h2>
        <p className="text-center w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Row>
          <Col lg="5">
            <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg" alt="Sample image"/>
              <a><Mask overlay="white-slight"/></a>
            </View>
          </Col>
          <Col lg="7">
              <a className="green-text"><h6 className="font-weight-bold mb-3"><Fa icon="cutlery" className="pr-2"></Fa>Food</h6></a>
              <h3 className="font-weight-bold mb-3 p-0"><strong>Title of the news</strong></h3>
              <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis debitis.</p>
              <p>by <a><strong>Carine Fox</strong></a>, 19/08/2018</p>
              <Button color="success" size="md" className="waves-light ">Read more</Button>
          </Col>
        </Row>
        <hr className="my-5"/>
        <Row>
          <Col lg="7">
            <a className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <Fa icon="image" className="pr-2"></Fa>Lifestyle
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0"><strong>Title of the news</strong></h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
            <p>by <a><strong>Carine Fox</strong></a>, 14/08/2018</p>
            <Button color="pink" size="md" className="mb-lg-0 mb-4 waves-light">Read more</Button>
          </Col>
          <Col lg="5">
            <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg" alt="Sample image"/>
              <a><Mask overlay="white-slight"/></a>
            </View>
          </Col>
        </Row>
        <hr className="my-5"/>
        <Row>
          <Col lg="5">
            <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg" alt="Sample image"/>
              <a><Mask overlay="white-slight"/></a>
            </View>
          </Col>
          <Col lg="7">
              <a className="indigo-text"><h6 className="font-weight-bold mb-3"><Fa icon="suitcase" className="pr-2"></Fa>Food</h6></a>
              <h3 className="font-weight-bold mb-3 p-0"><strong>Title of the news</strong></h3>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia sit amet.</p>
              <p>by <a><strong>Carine Fox</strong></a>, 11/08/2018</p>
              <Button color="indigo" size="md" className="waves-light ">Read more</Button>
          </Col>
        </Row>
      </CardBody>
      </Card>
 
      <h2 className="title text-center text-md-left pt-4 mt-5">
        <strong>Blog listing v.2 </strong>
      </h2>
      <Card className="my-5 px-5 pb-5">
        <CardBody className="text-center">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Recent posts</h2>
          <p className="text-center w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Row>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <View hover className="rounded z-depth-2 mb-4" waves>
                <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"/>
                <Mask overlay="white-slight"/>
              </View>
              <a className="pink-text"><h6 className="font-weight-bold mb-3">
              <Fa icon="map" className="pr-2"></Fa>Adventure</h6></a>
              <h4 className="font-weight-bold mb-3"><strong>Title of the news</strong></h4>
              <p>by <a className="font-weight-bold">Billy Forester</a>, 15/07/2018</p>
              <p className="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus voluptas.</p>
              <Button color="pink" rounded size="md">Read more</Button>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
            <View hover className="rounded z-depth-2 mb-4" waves>
              <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"/>
              <Mask overlay="white-slight"/>
            </View>
              <a className="deep-orange-text"><h6 className="font-weight-bold mb-3">
              <Fa icon="graduation-cap" className="pr-2"></Fa>Education</h6></a>
              <h4 className="font-weight-bold mb-3"><strong>Title of the news</strong></h4>
              <p>by <a className="font-weight-bold">Billy Forester</a>, 13/07/2018</p>
              <p className="dark-grey-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis voluptatum deleniti atque corrupti quos dolores.</p>
              <Button color="deep-orange" rounded size="md">Read more</Button>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
            <View hover className="rounded z-depth-2 mb-4" waves>
              <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg"/>
              <Mask overlay="white-slight"/>
            </View>
              <a className="blue-text"><h6 className="font-weight-bold mb-3">
              <Fa icon="fire" className="pr-2"></Fa>Culture</h6></a>
              <h4 className="font-weight-bold mb-3"><strong>Title of the news</strong></h4>
              <p>by <a className="font-weight-bold">Billy Forester</a>, 11/07/2018</p>
              <p className="dark-grey-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.</p>
              <Button color="info" rounded size="md">Read more</Button>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <h2 className="title text-center text-md-left pt-4 mt-5">
        <strong>Blog listing v.3</strong>
      </h2>
      <Card className="my-5 px-5 pb-5">
        <CardBody>
          <h2 className="h1-responsive font-weight-bold text-center my-5">Recent posts</h2>
          <p className="text-center w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Row>
            <Col lg="5" xl="4">
              <View hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="Sample image"/>
                <a><Mask overlay="white-slight"/></a>
              </View>
            </Col>
            <Col lg="7" xl="8">
              <h3 className="font-weight-bold mb-3 p-0"><strong>Title of the news</strong></h3>
              <p className="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis debitis cum soluta nobis est eligendi placeat facere aut rerum.</p>
              <p>by <a className="font-weight-bold">Jessica Clark</a>, 19/04/2018</p>
              <Button color="primary" size="md">Read More</Button>
            </Col>
          </Row>
          <hr className="my-5"/>
          <Row>
            <Col lg="5" xl="4">
              <View hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg" alt="Sample image"/>
                <a><Mask overlay="white-slight"/></a>
              </View>
            </Col>
            <Col lg="7" xl="8">
              <h3 className="font-weight-bold mb-3 p-0"><strong>Title of the news</strong></h3>
              <p className="dark-grey-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident et accusamus iusto odio dignissimos et dolorum fuga.</p>
              <p>by <a className="font-weight-bold">Jessica Clark</a>, 16/04/2018</p>
              <Button color="primary" size="md">Read More</Button>
            </Col>
          </Row>
          <hr className="my-5"/>
          <Row>
            <Col lg="5" xl="4">
              <View hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg" alt="Sample image"/>
                <a><Mask overlay="white-slight"/></a>
              </View>
            </Col>
            <Col lg="7" xl="8">
              <h3 className="font-weight-bold mb-3 p-0"><strong>Title of the news</strong></h3>
              <p className="dark-grey-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, psam voluptatem quia consectetur.</p>
              <p>by <a className="font-weight-bold">Jessica Clark</a>, 12/04/2018</p>
              <Button color="primary" size="md">Read More</Button>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <h2 className="title text-center text-md-left pt-4 mt-5">
        <strong>Blog listing v.4</strong>
      </h2>
      <Card className="my-5 px-5 pb-5">
        <CardBody>
          <Row>
            <Col md="12">
              <Card reverse>
                <View hover waves>
                  <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg" className="img-fluid"/>
                  <Mask overlay="white-slight" className="waves-light"/>
                </View>
                <CardBody className="text-center">
                  <h2 className="font-weight-bold"><a>Title of the news</a></h2>
                  <p>Written by <a><strong>Abby Madison</strong></a>, 26/08/2018</p>
                  <Button className="btn-fb waves-light">
                    <Fa icon="facebook" className="pr-2"></Fa>
                    Facebook
                  </Button>
                  <span className="counter">46</span>
                  <Button className="btn-tw waves-light">
                    <Fa icon="twitter" className="pr-2"></Fa>
                    Twitter
                  </Button>
                  <span className="counter">22</span>
                  <Button className="btn-gplus waves-light">
                    <Fa icon="google-plus" className="pr-2"></Fa>
                    Google
                  </Button>
                  <span className="counter">31</span>
                  <Button color="default" className="waves-light">
                    <Fa icon="comments" className="pr-2"></Fa>
                    Comments
                  </Button>
                  <span className="counter">18</span>
                </CardBody>
              </Card>
              <Container className="mt-5">
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa nemo enim ipsam voluptatem quia voluptas sit qui officia deserunt mollitia animi, id est laborum et dolorum fuga quidem rerum facilis est distinctio.
                </p>
                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum.
                </p>
              </Container>
            </Col>
          </Row>
          <hr className="mb-5 mt-4"/>
          <Row>
            <Col md="12">
              <Card reverse>
                <View hover waves>
                  <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(146).jpg" className="img-fluid"/>
                  <Mask overlay="white-slight" className="waves-light"/>
                </View>
                <CardBody className="text-center">
                <h2 className="font-weight-bold"><a>Title of the news</a></h2>
                  <p>Written by <a><strong>Abby Madison</strong></a>, 21/08/2018</p>
                    <Button className="btn-fb waves-light">
                      <Fa icon="facebook" className="pr-2"></Fa>
                      Facebook
                    </Button>
                    <span className="counter">87</span>
                    <Button className="btn-tw waves-light">
                      <Fa icon="twitter" className="pr-2"></Fa>
                      Twitter
                    </Button>
                    <span className="counter">73</span>
                    <Button className="btn-gplus waves-light">
                      <Fa icon="google-plus" className="pr-2"></Fa>
                      Google
                    </Button>
                    <span className="counter">91</span>
                    <Button color="default" className="waves-light">
                      <Fa icon="comments" className="pr-2"></Fa>
                      Comments
                    </Button>
                    <span className="counter">67</span>
                </CardBody>
              </Card>
              <Container className="mt-5">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.
                </p>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
                </p>
              </Container>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}
export default BlogPage;
