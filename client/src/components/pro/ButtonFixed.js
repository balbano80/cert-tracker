import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Fa from '../Fa';
import Waves from '../Waves';

class ButtonFixed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorPos: {}
    };
    this.onClick = this.onClick.bind(this);
  }

  handleClick(e){
    // Get Cursor Position
    e.preventDefault();
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    this.setState({ cursorPos: cursorPos });
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }


  render() {
    let {
      active,
      block,
      className,
      color,
      outline,
      size,
      rounded,
      gradient,
      floating,
      flat,
      role,
      type,
      icon,
      innerRef,
      topSection,
      ...attributes
    } = this.props;

    const buttonFixedClasses = classNames(
      'fixed-action-btn active'
    );

    const classes = classNames(
      floating ? 'btn-floating' : 'btn',
      flat ? 'btn-flat' : gradient ? `${gradient}-gradient` : `${color}`,
      size ? `btn-${size}` : false,
      rounded ? 'btn-rounded' : false,
      block ? 'btn-block' : false,
      'Ripple-parent',
      className,
      { active, disabled: this.props.disabled }
    );

    return (
      <div
      className={buttonFixedClasses}
      ref={innerRef}
      style={{bottom: '45px', right: '24px'}}
      {...attributes}
      >
        <a
        href={this.props.topSection ? this.props.topSection : '#'}
        className={classes}
        onClick={this.onClick}
        onMouseDown={ this.handleClick.bind(this) }
        onTouchStart={ this.handleClick.bind(this) } >
          <Fa icon={this.props.icon} />
          {this.props.disabled ? false : <Waves cursorPos={ this.state.cursorPos } outline={outline} flat={flat} />}
        </a>
        <ul className="list-unstyled">{this.props.children}</ul>
      </div>
    );
  }
}

ButtonFixed.defaultProps = {
  color: 'default'
};

ButtonFixed.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  gradient: PropTypes.string,
  role: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  floating: PropTypes.bool,
  flat: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string,
  topSection: PropTypes.string
};

export default ButtonFixed;
