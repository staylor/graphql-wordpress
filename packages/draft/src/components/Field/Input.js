import React, { Component } from 'react';
import { FieldInput } from 'components/Field/styled';

/* eslint-disable react/prop-types */

export default class Input extends Component {
  onChange = e => {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
    this.setState({ value: e.target.value });
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      value: props.value || '',
    };
  }

  render() {
    return (
      <FieldInput type="text" {...this.props} onChange={this.onChange} value={this.state.value} />
    );
  }
}
