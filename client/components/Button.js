import React from 'react';
import { Button } from 'mdbreact';

class Button extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      buttonStyle: {transform: 'scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)', opacity: '0' }
    };
  }

  onHover = () => {
    this.setState({buttonStyle: {transform: 'scaleY(1) scaleX(1) translateY(0) translateX(0)', opacity: '1' }})
  }

  onMouseLeave = () => {
    this.setState({buttonStyle: {transform: 'scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)', opacity: '0' }})
  }

  render() {
    return(
        <section id="top-section">
          <Button color={props.color} rounded>{props.children}</Button>
        </section>
    );
  };
}

export default Button;
