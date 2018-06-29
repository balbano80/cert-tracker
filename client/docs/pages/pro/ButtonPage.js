import React from 'react';
import { Button, Fa, ButtonFixed, ButtonFixedItem } from 'mdbreact';

class ButtonPage extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      buttonStyle: {transform: 'scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)', opacity: '0' }
    };
    this.onHover = this.onHover.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onHover() {
    this.setState({buttonStyle: {transform: 'scaleY(1) scaleX(1) translateY(0) translateX(0)', opacity: '1' }})
  }

  onMouseLeave() {
    this.setState({buttonStyle: {transform: 'scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)', opacity: '0' }})
  }

  render() {
    return(
      <div className="container-fluid text-center mt-5">
        <section id="top-section">
          <Button rounded>Rounded Default</Button>
          <Button color="primary" rounded>Rounded Primary</Button>
          <Button color="secondary" rounded>Rounded Secondary</Button>
          <Button color="success" rounded>Rounded Success</Button>
          <Button color="info" rounded>Rounded Info</Button>
          <Button color="warning" rounded>Rounded Warning</Button>
        </section>
        <section>
          <Button rounded gradient="peach">Gradient Peach</Button>
          <Button rounded gradient="purple">Gradient Purple</Button>
          <Button rounded gradient="blue">Gradient Blue</Button>
          <Button rounded gradient="aqua">Gradient Aqua</Button>
        </section>
        <section>
          <Button flat>Flat Button</Button>
        </section>
        <section>
          <Button rounded outline>Rounded Outline Default</Button>
          <Button color="primary" rounded outline>Rounded Outline Primary</Button>
          <Button color="secondary" rounded outline>Rounded Outline Secondary</Button>
          <Button color="success" rounded outline>Rounded Outline Success</Button>
        </section>
        <section>
          <Button tag="a" floating gradient="purple"><Fa icon="bolt" /></Button>
          <Button tag="a" floating gradient="peach"><Fa icon="leaf" /></Button>
          <Button tag="a" floating gradient="blue"><Fa icon="star" /></Button>
        </section>
        <section style={{height: "1000px"}}>
          <ButtonFixed onMouseEnter={this.onHover} onMouseLeave={this.onMouseLeave} floating size="lg" color="red" icon="pencil" style={{bottom: '45px', right: '24px'}}>
            <ButtonFixedItem buttonStyle={this.state.buttonStyle} color="red" icon="star"></ButtonFixedItem>
            <ButtonFixedItem buttonStyle={this.state.buttonStyle} color="yellow" icon="user"></ButtonFixedItem>
            <ButtonFixedItem buttonStyle={this.state.buttonStyle} color="green" icon="envelope"></ButtonFixedItem>
            <ButtonFixedItem buttonStyle={this.state.buttonStyle} color="blue" icon="shopping-cart"></ButtonFixedItem>
          </ButtonFixed>
        </section>
      </div>
    );
  };
}

export default ButtonPage;
