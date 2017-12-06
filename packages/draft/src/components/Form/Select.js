import React, { Component } from 'react';
import { FieldSelect } from 'components/Form/styled';

/* eslint-disable react/prop-types */

export default class Select extends Component {
  onChange = e => {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
    this.setState({ value: e.target.value });
  };

  didMount = false;

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
      <FieldSelect value={this.state.value} onChange={this.onChange}>
        {this.props.placeholder && <option value="">{this.props.placeholder}</option>}
        {this.props.choices &&
          this.props.choices.map(choice => (
            <option key={choice} value={choice}>
              {choice}
            </option>
          ))}
        {this.props.children}
      </FieldSelect>
    );
  }
}
