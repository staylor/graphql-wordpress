import React, { Component } from 'react';
import { FieldInput } from 'components/Field/styled';

/* eslint-disable react/prop-types */

export default class Input extends Component {
  onChange = e => {
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
      <FieldInput type="text" onChange={this.onChange} {...this.props} value={this.state.value} />
    );
  }
}
