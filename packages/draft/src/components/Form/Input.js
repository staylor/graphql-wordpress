// @flow
import React, { Component } from 'react';
import { FieldInput } from 'components/Form/styled';

type Props = {
  value: any,
  onChange?: string => void,
};

type State = {
  value: any,
};

export default class Input extends Component<Props, State> {
  didMount = false;

  onChange = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;

    this.setState({ value }, () => {
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    });
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      value: props.value || '',
    };
  }

  componentWillReceiveProps(nextProps: Props) {
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
