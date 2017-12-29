// @flow
import React, { Component } from 'react';
import { FieldCheckbox } from 'components/Form/styled';

type Props = {
  id: string,
  text: string,
  checked: boolean,
  onChange: (checked: boolean, id?: string | null) => void,
};

type State = {
  checked: boolean,
};

export default class Checkbox extends Component<Props, State> {
  onChange = (e: { target: HTMLInputElement }) => {
    const { checked } = e.target;
    if (this.props.onChange) {
      this.props.onChange(checked, this.props.id || null);
    } else {
      this.setState({ checked });
    }
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      checked: props.checked || false,
    };
  }

  componentWillReceiveProps(nextProps: Props) {
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
