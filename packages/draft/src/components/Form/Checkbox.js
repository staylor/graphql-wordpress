import React, { Component } from 'react';
import { FieldCheckbox } from 'components/Form/styled';

/* eslint-disable react/prop-types */

export default class Checkbox extends Component {
  onChange = e => {
    const { checked } = e.target;
    if (this.props.onChange) {
      this.props.onChange(checked, this.props.id || null);
    } else {
      this.setState({ checked });
    }
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      checked: props.checked || false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!Object.keys(nextProps).includes('checked')) {
      return;
    }
    this.setState({ checked: nextProps.checked });
  }

  render() {
    const { id, ...rest } = this.props;

    return (
      <FieldCheckbox
        {...rest}
        type="checkbox"
        onChange={this.onChange}
        checked={this.state.checked}
      />
    );
  }
}
