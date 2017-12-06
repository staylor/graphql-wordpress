import React, { Component } from 'react';
import { FieldCheckbox } from 'components/Form/styled';

/* eslint-disable react/prop-types */

export default class Checkbox extends Component {
  onChange = e => {
    this.setState({ checked: e.target.checked });
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      checked: props.checked || false,
    };
  }

  render() {
    return (
      <FieldCheckbox
        {...this.props}
        type="checkbox"
        onChange={this.onChange}
        checked={this.state.checked}
      />
    );
  }
}
