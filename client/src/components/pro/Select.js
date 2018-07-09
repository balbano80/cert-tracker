import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Select extends React.Component {

  render() {
    const {
      className,
      children,
      multiple,
      color,
      ...attributes
    } = this.props;

    const classes = classNames(
      'select-wrapper',
      this.props.color ? 'colorful-select dropdown-' + this.props.color : '',
      className
    );
    return (
      <div {...attributes} data-color={this.props.color} data-multiple={this.props.multiple} className={classes}>
        <span className="caret">▼</span>
        {children}
      </div>
    );
  }
}

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  multiple: PropTypes.bool,
  color: PropTypes.string
};

export default Select;
