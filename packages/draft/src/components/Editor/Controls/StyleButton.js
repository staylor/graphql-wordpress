import React, { Component } from 'react';
import { cx } from 'emotion';
import { StyleButton as StyledButton, activeButtonClass } from './styled';

/* eslint-disable react/prop-types */

export default class StyleButton extends Component {
  onToggle = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onToggle(this.props.style);
  };

  render() {
    return (
      <StyledButton
        role="button"
        tabIndex="-1"
        className={cx(this.props.className, {
          [activeButtonClass]: this.props.active,
        })}
        onMouseDown={this.onToggle}
      >
        {this.props.label}
      </StyledButton>
    );
  }
}
