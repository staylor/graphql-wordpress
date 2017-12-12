import React, { Component } from 'react';
import cn from 'classnames';
import { styleButtonClass, activeButtonClass } from './styled';

/* eslint-disable react/prop-types */

export default class StyleButton extends Component {
  onToggle = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onToggle(this.props.style);
  };

  render() {
    return (
      <span
        role="button"
        tabIndex="-1"
        className={cn(styleButtonClass, this.props.className, {
          [activeButtonClass]: this.props.active,
        })}
        onMouseDown={this.onToggle}
      >
        {this.props.label}
      </span>
    );
  }
}
