import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SelectInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      className,
      children,
      value,
      ...attributes
    } = this.props;

    const classes = classNames(
      'select-dropdown',
      className
    );
    return (
      <input type="text" readOnly value={value} {...attributes} className={classes}/>
    );
  }
}

SelectInput.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  value: PropTypes.string,
};

export default SelectInput;
