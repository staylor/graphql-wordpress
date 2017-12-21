import React, { Component } from 'react';
import { FieldInput } from 'components/Form/styled';

/* eslint-disable react/prop-types */

export default class Input extends Component {
  onChange = e => {
    const { value } = e.target;

    this.setState({ value }, () => {
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    });
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      value: props.value || '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.didMount || nextProps.value === this.state.value) {
      return;
    }
    this.setState({ value: nextProps.value || '' });
  }

  componentDidMount() {
    this.didMount = true;
  }

  render() {
    return (
      <FieldInput type="text" {...this.props} onChange={this.onChange} value={this.state.value} />
    );
  }
}
