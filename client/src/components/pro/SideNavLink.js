import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Waves from '../Waves';
const Link = require('react-router-dom').NavLink;

class SideNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorPos: {}
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    if (!this.props.disabled) {
      // Waves - Get Cursor Position
      let cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({ cursorPos: cursorPos });
      // do the passed in callback:
      if (this.props.onClick) {
      this.props.onClick(e);
      }
      e.stopPropagation();
    }
  }

  render() {
    const {
      tag: Tag,
      children,
      to,
      className,
      innerRef,
      ...attributes
    } = this.props;

    const classes = classNames(
      'Ripple-parent',
      className
    );

    return (
      <Link className={classes}
            ref={innerRef}
            onClick={this.handleClick}
            to={to}
            {...attributes}
      >
        {children}
        <Waves cursorPos={ this.state.cursorPos } />
      </Link>
    );
  }
}

SideNavItem.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  tag: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

SideNavItem.defaultProps = {
  to: '#'
};

export default SideNavItem;


