import React, { Component } from 'react';
import { styleButtonClass, activeButtonClass } from './styled';

/* eslint-disable react/prop-types */

export default class StyleButton extends Component {
  onToggle = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onToggle(this.props.style);
  };

  render() {
    let className = styleButtonClass;
    if (this.props.className) {
      className += ` ${this.props.className}`;
    }
    if (this.props.active) {
      className += ` ${activeButtonClass}`;
    }
    return (
      <span role="button" tabIndex="-1" className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}
