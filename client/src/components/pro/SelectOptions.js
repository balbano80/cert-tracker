import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Autocomplete from './Autocomplete';
require('./Fade.css');

var data = [];

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }
  
  search(value, options) {
    options.forEach(function(option) {
      let optionValue = option.children[0].innerText.toLowerCase();
      if(!optionValue.includes(value)) {
        option.style.display = "none";
      } else {
        option.style.display = "block";
      }
    })
  }

  componentDidMount() {
    if(this.props.search) {
      let options = ReactDOM.findDOMNode(this).querySelectorAll('li');
      options.forEach(function(option) {
        data.push(option.children[0].innerHTML);
      })
    }
  }

  render() {
    const {
      className,
      children,
      search,
      ...attributes
    } = this.props;

    const options = [
      'Option nr 1',
      'Option nr 2',
      'Option nr 3',
      'Option nr 4',
      'Option nr 5'
    ]

    const classes = classNames(
      'dropdown-content',
      'select-dropdown',
      'fadeElement',
      className
    );
    
    let autocomplete = null;
    if(this.props.search) {
      autocomplete =  <div className="mx-2"><Autocomplete data = {data} label="Search" id="input" search={this.search} /></div>;
    }

    return (
      <ul {...attributes} className={classes}>{autocomplete}{children}</ul>
    );
  }
}

Options.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  search: PropTypes.bool
};

export default Options;
