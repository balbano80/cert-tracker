import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Collapse from '../Collapse';
import Waves from '../Waves';
require('./SideNav.css');

class SideNavCat extends React.Component {
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
      className,
      name,
      icon,
      onClick,
      disabled,
      isOpen,
      ...attributes
    } = this.props;

    const classes = classNames(
      'collapsible-header',
      'Ripple-parent',
      'arrow-r',
      isOpen && 'active',
      disabled && 'disabled',
      className
    );

    return (
      <Tag>
        <a className = { classes }
           onClick = { this.handleClick }
           {...attributes}
        >
          { icon &&
            <i className = { "fa fa-" + icon }>&nbsp;</i>
          }
          {name}
          <i className = "fa fa-angle-down rotate-icon"></i>
        <Waves cursorPos = { this.state.cursorPos } />
        </a>
        <Collapse isOpen = {isOpen}>
          <div className = "collapsible-body">
            <ul>
              {children}
            </ul>
          </div>
        </Collapse>
      </Tag>
    );
  }
}

SideNavCat.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
};

SideNavCat.defaultProps = {
  tag: 'li',
};

export default SideNavCat;
