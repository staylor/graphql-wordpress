// @flow
import React, { Component } from 'react';
import { FieldTextarea } from 'components/Form/styled';

type Props = {
  value: string,
  onChange?: string => void,
};

type State = {
  value: string,
};

export default class Textarea extends Component<Props, State> {
  didMount = false;

  onChange = (e: { target: HTMLTextAreaElement }) => {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
    this.setState({ value: e.target.value });
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
    return <FieldTextarea {...this.props} onChange={this.onChange} value={this.state.value} />;
  }
}
