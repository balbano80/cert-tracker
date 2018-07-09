import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class InputSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({value: this.props.checked})
  }

  handleChange() {
    this.setState({value: !this.state.value});
  }

  render() {
    const {
      className,
      checked,
      disabled,
      ...attributes
    } = this.props;

    const classes = classNames(
      'switch',
      className
    );
    return (
      <div {...attributes} className={classes}>
        <label>
          Off
          <input disabled={this.props.disabled} value={this.state.value} checked={this.state.value} onChange={this.handleChange} type="checkbox" />
          <span className="lever"></span>
          On
        </label>
      </div>
    );
  }
}

InputSwitch.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
};

InputSwitch.defaultProps = {
  checked: false
};

export default InputSwitch;
