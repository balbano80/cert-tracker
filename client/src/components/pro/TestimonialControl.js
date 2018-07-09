import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class TestimonialControl extends Component {

  render() {
 
    let {
      direction,
      text,
      className,
      onClick,
      tag: Tag,
      ...attributes
    } = this.props;

    let arrow;

    if (direction === "prev") {
      arrow = "left";
    } else {
      arrow = "right"
    }

    const classes = classNames(
      'carousel-item-' + direction,
      arrow,
      'carousel-control',
      className
    );

    const caretClasses = classNames(
      'icon-' + direction
    );

    if(direction === 'prev') {
      text = 'Previous';
    } else if(direction === 'next') {
      text = 'Next';
    }

    return (
      <Tag className={classes} data-slide={direction} onClick={onClick}>
        <div>
          <span className={caretClasses} aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </div>
      </Tag>
    );
  }
}

TestimonialControl.propTypes = {
  onClick: PropTypes.any,
  text: PropTypes.string,
  direction: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

TestimonialControl.defaultProps = {
  tag: 'a'
};

export default TestimonialControl;