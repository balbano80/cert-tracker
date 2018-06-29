import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multiple: false,
      checked: false,
    }
    this.selectOption = this.selectOption.bind(this);
  }

  selectOption() {
    if(!this.props.disabled) {
      let selectedOption = ReactDOM.findDOMNode(this);
      let value = selectedOption.children[0].textContent;
      if(this.props.icon) {
        value = selectedOption.children[1].textContent;
      }
      let options = selectedOption.parentNode.children;

      if(this.state.multiple) {
        let value = [];
        if (selectedOption.classList.contains('active')) {
          selectedOption.classList.remove('active');
          this.setState({checked: false});
          for (let i = 0; i < options.length; i++) {
            if (options[i].classList.contains('active')) {
              value.push(options[i].textContent);
            }
          }
          if (value.length === 0) {
            value = "Choose your option";
          }
          this.props.triggerOptionClick(value);
        } else {
          selectedOption.classList.add('active');
          this.setState({checked: true});
          for (let i = 0; i < options.length; i++) {
            if (options[i].classList.contains('active')) {
              value.push(options[i].textContent);
            }
          }
          this.props.triggerOptionClick(value);
        }
      } else {
        for (let i = 0; i < options.length; i++) {
          options[i].classList.remove('active');
        }
        selectedOption.classList.add('active');
        this.props.triggerOptionClick(value);
      }
    }
  }

  componentDidMount() {
    let Select = ReactDOM.findDOMNode(this).parentNode.parentNode;
    if (Select.dataset.multiple === 'true') {
      this.setState({multiple: true});
    }
  }

  render() {
    const {
      className,
      children,
      disabled,
      icon,
      triggerOptionClick,
      ...attributes
    } = this.props;

    const classes = classNames(
      disabled ? 'disabled' : '',
      className
    );

    let input = null;
    let label = null;
    if (this.state.multiple) {
      if (!this.props.disabled) {
        input = <input type="checkbox" checked={this.state.checked}  />;
        label = <label style={{height: '10px'}} data-multiple={this.state.multiple}></label>;
      } else {
        input = <input type="checkbox" disabled />;
        label = <label style={{height: '10px'}} data-multiple={this.state.multiple}></label>;
      }
    }

    let img = null;
    if (this.props.icon) {
      img = <img src={this.props.icon} alt="icon" className="rounded-circle" />;
    }

    return (
      <li {...attributes} data-multiple={this.state.multiple} className={classes} onClick={this.selectOption}>{img}<span data-multiple={this.state.multiple} className="filtrable">{input}{label}{children}</span></li>
    );
  }
}

Option.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  triggerOptionClick: PropTypes.func
};

export default Option;
