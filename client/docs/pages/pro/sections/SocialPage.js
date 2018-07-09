import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Mask, Fa, View, Tooltip, Collapse, Input, CardImage, CardTitle, CardText, Button} from 'mdbreact';

class SocialPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      comment1: false,
      comment2: false,
      comment3: false,
      comment4: false,
      comment5: false
    }
    this.click1 = this.click1.bind(this);
    this.click2 = this.click2.bind(this);
    this.click3 = this.click3.bind(this);
    this.click4 = this.click4.bind(this);
    this.click5 = this.click5.bind(this);
  }

  click1() {
    this.setState({
      comment1: !this.state.comment1
    })
  }
  click2() {
    this.setState({
      comment2: !this.state.comment2
    })
  }
  click3() {
    this.setState({
      comment3: !this.state.comment3
    })
  }
  click4() {
    this.setState({
      comment4: !this.state.comment4
    })
  }
  click5() {
    this.setState({
      comment5: !this.state.comment5
    })
  }
  render() {
    return(
      <Container style={{maxWidth: '80%'}}>

        <h2 className="title pt-4 mt-5">
          <strong>Social newsfeed v.1 </strong>
        </h2>
        <Card className="my-5 px-5 pt-4" style={{fontWeight: 300, maxWidth: 600}}>
          <CardBody className="py-0">
            <Row>
              <div className="mdb-feed">
                <div className="news">
                  <div className="label">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg" className="rounded-circle z-depth-1-half"/>
                  </div>
                  <div className="excerpt">
                    <div className="brief">
                      <a className="name">John Doe</a> added you as a friend
                      <div className="date">1 hour ago</div>
                    </div>
                    <div className="feed-footer">
                      <a className="like">
                        <Fa icon="heart"/>
                        <span>5 likes</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="news">
                  <div className="label">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17)-mini.jpg" className="rounded-circle z-depth-1-half"/>
                  </div>
                  <div className="excerpt">
                    <div className="brief">
                      <a className="name">Anna Smith</a> added <a>2 new illustrations</a>
                      <div className="date">4 hours ago</div>
                    </div>
                    <div className="added-images">
                      <img src="https://mdbootstrap.com/img/Photos/Others/images/71.jpg" className="z-depth-1 rounded mb-md-0 mb-2"/>
                      <img src="https://mdbootstrap.com/img/Photos/Others/images/74.jpg" className="z-depth-1 rounded"/>
                    </div>
                    <div className="feed-footer">
                      <a className="like">
                        <Fa icon="heart"/>
                        <span>18 likes</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="news">
                  <div className="label">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9)-mini.jpg" className="rounded-circle z-depth-1-half"/>
                  </div>
                  <div className="excerpt">
                    <div className="brief">
                      <a className="name">Danny Moore</a> added you as a friend
                      <div className="date">7 hours ago</div>
                    </div>
                    <div className="feed-footer">
                      <a className="like">
                        <Fa icon="heart"/>
                        <span>11 likes</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="news">
                  <div className="label">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(18)-mini.jpg" className="rounded-circle z-depth-1-half"/>
                  </div>
                  <div className="excerpt">
                    <div className="brief">
                      <a className="name">Lili Rose</a> posted on her page
                      <div className="date">2 days ago</div>
                    </div>
                    <div className="added-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero inventore, iste quas libero eius? Vitae sint neque animi alias sunt dolor, accusantium ducimus, non placeat voluptate.</div>
                    <div className="feed-footer">
                      <a className="like">
                        <Fa icon="heart"/>
                        <span>7 likes</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="news">
                  <div className="label">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20)-mini.jpg" className="rounded-circle z-depth-1-half"/>
                  </div>
                  <div className="excerpt">
                    <div className="brief">
                      <a className="name">Kate Harrison</a> added <a> 2 new photos</a> of you
                      <div className="date">3 days ago</div>
                    </div>
                    <div className="added-images">
                      <img src="https://mdbootstrap.com/img/Photos/Others/images/29.jpg" className="z-depth-1 rounded mb-md-0 mb-2"/>
                      <img src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg" className="z-depth-1 rounded"/>
                    </div>
                    <div className="feed-footer">
                      <a className="like">
                        <Fa icon="heart"/>
                        <span>53 likes</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </Row>
          </CardBody>
        </Card>

        <h2 className="title pt-4 mt-5">
          <strong>Social newsfeed v.2 </strong>
        </h2>
        <Card className="my-5 px-5 pt-4" style={{fontWeight: 300, maxWidth: 600}}>
          <CardBody className="py-0">
            <Row>
              <div className="mdb-feed">
                <div className="news">
                  <div className="label">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg" className="rounded-circle z-depth-1-half"/>
                  </div>
                  <div className="excerpt">
                    <div className="brief">
                      <a className="name">John Doe</a> added you as a friend
                      <div className="date">1 hour ago</div>
                    </div>
                    <div className="feed-footer">
                      <div className="d-flex">
                        <a className="comment" aria-expanded="false" aria-controls="collapseExample-1" onClick={this.click1}>Comment </a> &middot; <span><a> 7 </a></span>
                        <a className="thumbs">
                          <Tooltip tag="span" placement="top" tooltipContent="I like it">
                            <Fa icon="thumbs-up"/>
                          </Tooltip>
                        </a>
                        <a className="thumbs">
                          <Tooltip placement="top" tooltipContent="I don't like it">
                            <Fa icon="thumbs-down"/>
                          </Tooltip>
                        </a>
                      </div>
                      <Collapse id="collapseExample-1" isOpen={this.state.comment1}>
                        <Card className="card-body mt-1">
                          <Input type="textarea" label="Add comment"/>
                          <div className="d-flex justify-content-end">
                            <Button flat onClick={this.click1}>Cancel</Button>
                            <Button color="primary" onClick={this.click1}>Reply</Button>
                          </div>
                        </Card>
                      </Collapse>
                    </div>
                  </div>
                </div>

                <div className="news">
                  <div className="label">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17)-mini.jpg" className="rounded-circle z-depth-1-half"/>
                  </div>
                  <div className="excerpt">
                    <div className="brief">
                      <a className="name">Anna Smith</a> added <a>2 new illustrations</a>
                      <div className="date">4 hours ago</div>
                    </div>
                    <div className="added-images">
                      <img src="https://mdbootstrap.com/img/Photos/Others/images/50.jpg" className="z-depth-1 rounded mb-md-0 mb-2"/>
                      <img src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg" className="z-depth-1 rounded"/>
                    </div>
                    <div className="feed-footer">
                      <div className="d-flex">
                        <a className="comment" aria-expanded="false" aria-controls="collapseExample-2" onClick={this.click2}>Comment </a> &middot; <span><a> 31 </a></span>
                        <a className="thumbs">
                          <Tooltip tag="span" placement="top" tooltipContent="I like it">
                            <Fa icon="thumbs-up"/>
                          </Tooltip>
                        </a>
                        <a className="thumbs">
                          <Tooltip placement="top" tooltipContent="I don't like it">
                            <Fa icon="thumbs-down"/>
                          </Tooltip>
                        </a>
                      </div>
                      <Collapse id="collapseExample-2" isOpen={this.state.comment2}>
                        <Card className="card-body mt-1">
                          <Input type="textarea" label="Add comment"/>
                          <div className="d-flex justify-content-end">
                            <Button flat onClick={this.click2}>Cancel</Button>
                            <Button color="primary" onClick={this.click2}>Reply</Button>
                          </div>
                        </Card>
                      </Collapse>
                    </div>
                  </div>
                </div>

                <div className="news">
                  <div className="label">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9)-mini.jpg" className="rounded-circle z-depth-1-half"/>
                  </div>
                  <div className="excerpt">
                    <div className="brief">
                      <a className="name">Danny Moore</a> added you as a friend
                      <div className="date">7 hours ago</div>
                    </div>
                    <div className="feed-footer">
                      <div className="d-flex">
                        <a className="comment" aria-expanded="false" aria-controls="collapseExample-3" onClick={this.click3}>Comment </a> &middot; <span><a> 12 </a></span>
                        <a className="thumbs">
                          <Tooltip tag="span" placement="top" tooltipContent="I like it">
                            <Fa icon="thumbs-up"/>
                          </Tooltip>
                        </a>
                        <a className="thumbs">
                          <Tooltip placement="top" tooltipContent="I don't like it">
                            <Fa icon="thumbs-down"/>
                          </Tooltip>
                        </a>
                      </div>
                      <Collapse id="collapseExample-3" isOpen={this.state.comment3}>
                        <Card className="card-body mt-1">
                          <Input type="textarea" label="Add comment"/>
                          <div className="d-flex justify-content-end">
                            <Button flat onClick={this.click3}>Cancel</Button>
                            <Button color="primary" onClick={this.click3}>Reply</Button>
                          </div>
                        </Card>
                      </Collapse>
                    </div>
                  </div>
                </div>

                <div className="news">
                  <div className="label">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(18)-mini.jpg" className="rounded-circle z-depth-1-half"/>
                  </div>
                  <div className="excerpt">
                    <div className="brief">
                      <a className="name">Lili Rose</a> posted on her page
                      <div className="date">2 days ago</div>
                    </div>
                    <div className="added-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero inventore, iste quas libero eius? Vitae sint neque animi alias sunt dolor, accusantium ducimus, non placeat voluptate.</div>
                    <div className="feed-footer">
                      <div className="d-flex">
                        <a className="comment" aria-expanded="false" aria-controls="collapseExample-4" onClick={this.click4}>Comment </a> &middot; <span><a> 25 </a></span>
                        <a className="thumbs">
                          <Tooltip tag="span" placement="top" tooltipContent="I like it">
                            <Fa icon="thumbs-up"/>
                          </Tooltip>
                        </a>
                        <a className="thumbs">
                          <Tooltip placement="top" tooltipContent="I don't like it">
                            <Fa icon="thumbs-down"/>
                          </Tooltip>
                        </a>
                      </div>
                      <Collapse id="collapseExample-4" isOpen={this.state.comment4}>
                        <Card className="card-body mt-1">
                          <Input type="textarea" label="Add comment"/>
                          <div className="d-flex justify-content-end">
                            <Button flat onClick={this.click4}>Cancel</Button>
                            <Button color="primary" onClick={this.click4}>Reply</Button>
                          </div>
                        </Card>
                      </Collapse>
                    </div>
                  </div>
                </div>

                <div className="news">
                  <div className="label">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20)-mini.jpg" className="rounded-circle z-depth-1-half"/>
                  </div>
                  <div className="excerpt">
                    <div className="brief">
                      <a className="name">Kate Harrison</a> added <a> 2 new photos</a> of you
                      <div className="date">3 days ago</div>
                    </div>
                    <div className="added-images">
                      <img src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg" className="z-depth-1 rounded mb-md-0 mb-2"/>
                      <img src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg" className="z-depth-1 rounded"/>
                    </div>
                    <div className="feed-footer">
                      <div className="d-flex">
                        <a className="comment" aria-expanded="false" aria-controls="collapseExample-5" onClick={this.click5}>Comment </a> &middot; <span><a> 47 </a></span>
                        <a className="thumbs">
                          <Tooltip tag="span" placement="top" tooltipContent="I like it">
                            <Fa icon="thumbs-up"/>
                          </Tooltip>
                        </a>
                        <a className="thumbs">
                          <Tooltip placement="top" tooltipContent="I don't like it">
                            <Fa icon="thumbs-down"/>
                          </Tooltip>
                        </a>
                      </div>
                      <Collapse id="collapseExample-5" isOpen={this.state.comment5}>
                        <Card className="card-body mt-1">
                          <Input type="textarea" label="Add comment"/>
                          <div className="d-flex justify-content-end">
                            <Button flat onClick={this.click5}>Cancel</Button>
                            <Button color="primary" onClick={this.click5}>Reply</Button>
                          </div>
                        </Card>
                      </Collapse>
                    </div>
                  </div>
                </div>
                </div>
            </Row>
          </CardBody>
        </Card>

        <h2 className="title pt-4">
          <strong>Personal card </strong>
        </h2>
        <Row>
          <Col md="6" lg="4">
            <Card personal className="my-5">
              <CardImage top src="https://mdbootstrap.com/img/Photos/Avatars/img%20(29).jpg" alt="Card image cap"/>
              <CardBody>
              <CardTitle><a className="title-one">Clara</a></CardTitle>
              <p className="card-meta">Joined in 2013</p>
              <CardText>Clara is an photographer living in Madrid.</CardText>
              <hr/>
              <a className="card-meta"><span><Fa icon="user"/>22 Friends</span></a>
            </CardBody>
          </Card>
          </Col>
        </Row>

        <h2 className="title pt-4">
          <strong>Social news card</strong>
        </h2>
        <Row>
          <Col md="6" lg="4">
            <Card news className="my-5">
            <CardBody>
              <div className="content">
                <div className="right-side-meta">14 h</div>
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17)-mini.jpg" className="rounded-circle avatar-img z-depth-1-half"/>Kate
              </div>
            </CardBody>
            <CardImage top src="https://mdbootstrap.com/img/Photos/Others/girl1.jpg" alt="Card image cap"/>
            <CardBody>
              <div className="social-meta">
                <p>Another great adventure! </p>
                <span><Fa icon="heart-o"/>25 likes</span>
                <p><Fa icon="comment"/>13 comments</p>
              </div>
              <hr/>
              <Input icon="heart-o" hint="Add Comment..."/>
            </CardBody>
          </Card>
          </Col>
        </Row>

        <h2 className="title pt-4">
          <strong>Social card with video</strong>
        </h2>
        <Row>
          <Col md="6" lg="4">
            <Card news className="my-5">
              <CardBody>
                <div className="content">
                  <div className="right-side-meta">2 h</div>
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" className="rounded-circle avatar-img z-depth-1-half"/>Tony
                </div>
              </CardBody>
              <div className="embed-responsive embed-responsive-1by1">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/37pwbUp8t1I" allowFullScreen></iframe>
              </div>
              <CardBody>
                <div className="social-meta">
                  <p className="blue-text">#awesome #bboy #battle #breaking #cool</p>
                  <span><Fa icon="heart-o"/>265 likes</span>
                  <p><Fa icon="comment"/>89 comments</p>
                </div>
                <hr/>
                <Input icon="heart-o" hint="Add Comment..."/>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <h2 className="title pt-4">
          <strong>Group of personal cards</strong>
        </h2>
        <Row>
          <Col md="12">
            <div className="card-group my-5">
              <Card personal className="mb-md-0 mb-4">
                <View hover>
                  <CardImage top src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg" alt="Card image cap"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
                <CardBody>
                  <a><CardTitle>Anna</CardTitle></a>
                  <a className="card-meta">Friends</a>
                  <CardText>Anna is a web designer living in New York.</CardText>
                  <hr/>
                  <a className="card-meta"><span><Fa icon="user"/>83 Friends</span></a>
                  <p className="card-meta float-right">Joined in 2012</p>
                </CardBody>
              </Card>

              <Card personal className="mb-md-0 mb-4">
                <View hover>
                  <CardImage top src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" alt="Card image cap"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
                <CardBody>
                  <a><CardTitle>John</CardTitle></a>
                  <a className="card-meta">Coworker</a>
                  <CardText>John is a copywriter living in Seattle.</CardText>
                  <hr/>
                  <a className="card-meta"><span><Fa icon="user"/>48 Friends</span></a>
                  <p className="card-meta float-right">Joined in 2015</p>
                </CardBody>
              </Card>

              <Card personal className="mb-md-0 mb-4">
                <View hover>
                  <CardImage top src="https://mdbootstrap.com/img/Photos/Avatars/img%20(28).jpg" alt="Card image cap"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
                <CardBody>
                  <a><CardTitle>Sara</CardTitle></a>
                  <a className="card-meta">Coworker</a>
                  <CardText>Sara is a video maker living in Tokyo.</CardText>
                  <hr/>
                  <a className="card-meta"><span><Fa icon="user"/>127 Friends</span></a>
                  <p className="card-meta float-right">Joined in 2014</p>
                </CardBody>
              </Card>

            </div>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default SocialPage;
