import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CollapseHeader extends React.Component {
  render() {
    const {
      className,
      children,
      tag: Tag,
      triggerOnClick,
      ...attributes
    } = this.props;

    const classes = classNames(
      'card-header',
      className
    );
    return (
      <div {...attributes} className={classes} style={{cursor: 'pointer'}}>
        <a href="#">
          <Tag className="mb-0">{children}</Tag>
        </a>
      </div>
    );
  }
}

CollapseHeader.defaultProps = {
  tag: 'h5'
};

CollapseHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
  triggerOnClick: PropTypes.func
};

export default CollapseHeader;
