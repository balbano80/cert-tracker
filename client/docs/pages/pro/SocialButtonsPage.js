import React from 'react';
import { Container, Button, Fa } from 'mdbreact';

const SocialButtonsPage = (props) => {
  return(
    <Container>
      <h4 className="mt-4">Full name social button</h4>
      <Button social="fb"><Fa icon="facebook" className="pr-1"/> Facebook</Button>
      <Button social="tw"><Fa icon="twitter" className="pr-1"/> Twitter</Button>
      <Button social="gplus"><Fa icon="google-plus" className="pr-1"/> Google +</Button>
      <Button social="li"><Fa icon="linkedin" className="pr-1"/> Linkedin</Button>
      <Button social="ins"><Fa icon="instagram" className="pr-1"/> Instagram</Button>
      <Button social="pin"><Fa icon="pinterest" className="pr-1"/> Pinterest</Button>
      <Button social="yt"><Fa icon="youtube" className="pr-1"/> Youtube</Button>
      <Button social="vk"><Fa icon="vk" className="pr-1"/> Vkontakte</Button>
      <Button social="so"><Fa icon="stack-overflow" className="pr-1"/> Stack Overflow</Button>
      <Button social="slack"><Fa icon="slack" className="pr-1"/> Slack</Button>
      <Button social="git"><Fa icon="github" className="pr-1"/> Github</Button>
      <Button social="comm"><Fa icon="comments" className="pr-1"/> Comments</Button>
      <Button social="email"><Fa icon="envelope" className="pr-1"/> Email</Button>
      <Button social="dribbble"><Fa icon="dribbble" className="pr-1"/> Dribbble</Button>
      <h4 className="mt-4">Large button</h4>
      <Button social="fb" size="lg"><Fa icon="facebook" className="pr-1"/> Facebook</Button>
      <h4 className="mt-4">Simple social button</h4>
      <Button social="fb"><Fa icon="facebook"/></Button>
      <Button social="tw"><Fa icon="twitter"/></Button>
      <Button social="gplus"><Fa icon="google-plus"/></Button>
      <Button social="li"><Fa icon="linkedin"/></Button>
      <Button social="ins"><Fa icon="instagram"/></Button>
      <Button social="pin"><Fa icon="pinterest"/></Button>
      <Button social="yt"><Fa icon="youtube"/></Button>
      <Button social="vk"><Fa icon="vk"/></Button>
      <Button social="so"><Fa icon="stack-overflow"/></Button>
      <Button social="slack"><Fa icon="slack"/></Button>
      <Button social="git"><Fa icon="github"/></Button>
      <Button social="comm"><Fa icon="comments"/></Button>
      <Button social="email"><Fa icon="envelope"/></Button>
      <Button social="dribbble"><Fa icon="dribbble"/></Button>
      <h4 className="mt-4">Large button</h4>
      <Button social="fb" size="lg"><Fa icon="facebook"/></Button>
      <h4 className="mt-4">Floating social buttons</h4>
      <Button size="lg" tag="a" floating social="fb"><Fa icon="facebook"/></Button>
      <Button size="lg" tag="a" floating social="tw"><Fa icon="twitter"/></Button>
      <Button size="lg" tag="a" floating social="gplus"><Fa icon="google-plus"/></Button>
      <Button size="lg" tag="a" floating social="li"><Fa icon="linkedin"/></Button>
      <Button size="lg" tag="a" floating social="ins"><Fa icon="instagram"/></Button>
      <Button size="lg" tag="a" floating social="pin"><Fa icon="pinterest"/></Button>
      <Button size="lg" tag="a" floating social="yt"><Fa icon="youtube"/></Button>
      <Button size="lg" tag="a" floating social="vk"><Fa icon="vk"/></Button>
      <Button size="lg" tag="a" floating social="so"><Fa icon="stack-overflow"/></Button>
      <Button size="lg" tag="a" floating social="slack"><Fa icon="slack"/></Button>
      <Button size="lg" tag="a" floating social="git"><Fa icon="github"/></Button>
      <Button size="lg" tag="a" floating social="comm"><Fa icon="comments"/></Button>
      <Button size="lg" tag="a" floating social="email"><Fa icon="envelope"/></Button>
      <Button size="lg" tag="a" floating social="dribbble"><Fa icon="dribbble"/></Button>
      <h4 className="mt-4">Sizes</h4>
      <Button size="lg" tag="a" floating social="fb"><Fa icon="facebook"/></Button>
      <Button tag="a" floating social="fb"><Fa icon="facebook"/></Button>
      <Button size="sm" tag="a" floating social="fb"><Fa icon="facebook"/></Button>
      <h4 className="mt-4">Full name social counters</h4>
      <Button social="fb"><Fa icon="facebook" className="pr-1"/> Facebook</Button>
      <span className="counter">22</span>
      <Button social="tw"><Fa icon="twitter" className="pr-1"/> Twitter</Button>
      <span className="counter">22</span>
      <Button social="gplus"><Fa icon="google-plus" className="pr-1"/> Google +</Button>
      <span className="counter">22</span>
      <Button social="li"><Fa icon="linkedin" className="pr-1"/> Linkedin</Button>
      <span className="counter">22</span>
      <Button social="ins"><Fa icon="instagram" className="pr-1"/> Instagram</Button>
      <span className="counter">22</span>
      <Button social="pin"><Fa icon="pinterest" className="pr-1"/> Pinterest</Button>
      <span className="counter">22</span>
      <Button social="yt"><Fa icon="youtube" className="pr-1"/> Youtube</Button>
      <span className="counter">22</span>
      <Button social="vk"><Fa icon="vk" className="pr-1"/> Vkontakte</Button>
      <span className="counter">22</span>
      <Button social="so"><Fa icon="stack-overflow" className="pr-1"/> Stack Overflow</Button>
      <span className="counter">22</span>
      <Button social="slack"><Fa icon="slack" className="pr-1"/> Slack</Button>
      <span className="counter">22</span>
      <Button social="git"><Fa icon="github" className="pr-1"/> Github</Button>
      <span className="counter">22</span>
      <Button social="comm"><Fa icon="comments" className="pr-1"/> Comments</Button>
      <span className="counter">22</span>
      <Button social="email"><Fa icon="envelope" className="pr-1"/> Email</Button>
      <span className="counter">22</span>
      <Button social="dribbble"><Fa icon="dribbble" className="pr-1"/> Dribbble</Button>
      <span className="counter">22</span>
      <h4 className="mt-4">Simple social counters </h4>
      <Button size="lg" social="fb"><Fa icon="facebook"/></Button>
      <span className="counter">22</span>
      <Button size="lg" social="tw"><Fa icon="twitter"/></Button>
      <span className="counter">22</span>
      <Button size="lg" social="gplus"><Fa icon="google-plus"/></Button>
      <span className="counter">22</span>
      <Button size="lg" social="li"><Fa icon="linkedin"/></Button>
      <span className="counter">22</span>
      <Button size="lg" social="ins"><Fa icon="instagram"/></Button>
      <span className="counter">22</span>
      <Button size="lg" social="pin"><Fa icon="pinterest"/></Button>
      <span className="counter">22</span>
      <Button size="lg" social="yt"><Fa icon="youtube"/></Button>
      <span className="counter">22</span>
      <Button size="lg" social="vk"><Fa icon="vk"/></Button>
      <span className="counter">22</span>
      <Button size="lg" social="so"><Fa icon="stack-overflow"/></Button>
      <span className="counter">22</span>
      <Button size="lg" social="slack"><Fa icon="slack"/></Button>
      <span className="counter">22</span>
      <Button size="lg" social="git"><Fa icon="github"/></Button>
      <span className="counter">22</span>
      <Button size="lg" social="comm"><Fa icon="comments"/></Button>
      <span className="counter">22</span>
      <Button size="lg" social="email"><Fa icon="envelope"/></Button>
      <span className="counter">22</span>
      <Button size="lg" social="dribbble"><Fa icon="dribbble"/></Button>
      <span className="counter">22</span>
      <h4 className="mt-4">Social Icons</h4>
      <a className="fb-ic mr-3"><Fa icon="facebook"/></a>
      <a className="tw-ic mr-3"><Fa icon="twitter"/></a>
      <a className="gplus-ic mr-3"><Fa icon="google-plus"/></a>
      <a className="li-ic mr-3"><Fa icon="linkedin"/></a>
      <a className="ins-ic mr-3"><Fa icon="instagram"/></a>
      <a className="pin-ic mr-3"><Fa icon="pinterest"/></a>
      <a className="yt-ic mr-3"><Fa icon="youtube"/></a>
      <a className="vk-ic mr-3"><Fa icon="vk"/></a>
      <a className="so-ic mr-3"><Fa icon="stack-overflow"/></a>
      <a className="slack-ic mr-3"><Fa icon="slack"/></a>
      <a className="git-ic mr-3"><Fa icon="github"/></a>
      <a className="comm-ic mr-3"><Fa icon="comments"/></a>
      <a className="email-ic mr-3"><Fa icon="envelope-o"/></a>
      <a className="dribbble-ic mr-3"><Fa icon="dribbble"/></a>
    </Container>
  );
};

export default SocialButtonsPage;
