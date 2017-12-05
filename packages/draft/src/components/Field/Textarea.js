import React, { Component } from 'react';
import { FieldTextarea } from 'components/Field/styled';

/* eslint-disable react/prop-types */

export default class Textarea extends Component {
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
    return <FieldTextarea {...this.props} onChange={this.onChange} value={this.state.value} />;
  }
}
