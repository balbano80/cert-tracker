import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CardFooter extends Component {

  render() {

    const {
      className,
      tag: Tag,
      color,
      border,
      transparent,
      small,
      muted,
      ...attributes
    } = this.props;

    const classes = classNames(
      'card-footer',
      color && color + ' white-text',
      border && 'border-' + border,
      transparent && 'bg-transparent',
      muted && 'text-muted',
      className
    );

    let text = <Tag {...attributes} className={classes} />

    if (small) {
      text = (<Tag {...attributes} className={classes} >
              <small> {this.props.children} </small>
            </Tag>
          )
    }
    return text
  }
}

CardFooter.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string,
  transparent: PropTypes.bool,
  small: PropTypes.bool,
  muted: PropTypes.bool,
};

CardFooter.defaultProps = {
  tag: 'div'
};

export default CardFooter;
