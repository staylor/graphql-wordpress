import React, { Component } from 'react';
import { FieldSelect } from 'components/Form/styled';

/* eslint-disable react/prop-types */

export default class Select extends Component {
  onChange = e => {
    let { value } = e.target;
    if (this.props.multiple) {
      value = [...e.target.selectedOptions].map(o => o.value);
    }
    if (this.props.onChange) {
      this.props.onChange(value);
    }
    this.setState({ value });
  };

  didMount = false;

  constructor(props, context) {
    super(props, context);

    this.state = {
      value: props.value || (props.multiple ? [] : ''),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.didMount || nextProps.value === this.state.value) {
      return;
    }
    this.setState({ value: nextProps.value || (nextProps.multiple ? [] : '') });
  }

  componentDidMount() {
    this.didMount = true;
  }

  render() {
    const { placeholder, choices, children, value, ...rest } = this.props;

    return (
      <FieldSelect {...rest} value={this.state.value} onChange={this.onChange}>
        {placeholder && (
          <option key={placeholder} value="">
            {placeholder}
          </option>
        )}
        {choices &&
          choices.map(choice => {
            if (typeof choice === 'object') {
              return (
                <option key={choice.value} value={choice.value}>
                  {choice.label}
                </option>
              );
            }
            return (
              <option key={choice} value={choice}>
                {choice}
              </option>
            );
          })}
        {children}
      </FieldSelect>
    );
  }
}
