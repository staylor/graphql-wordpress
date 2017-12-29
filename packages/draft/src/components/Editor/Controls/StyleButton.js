// @flow
import React, { Component } from 'react';
import { cx } from 'emotion';
import { StyleButton as StyledButton, activeButtonClass } from './styled';

type Props = {
  style: string,
  onToggle: string => void,
  className: string,
  active: boolean,
  label: any,
};

export default class StyleButton extends Component<Props> {
  onToggle = (e: Event) => {
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
