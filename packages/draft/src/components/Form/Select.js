// @flow
import React, { Component } from 'react';
import { FieldSelect } from 'components/Form/styled';

export type Choice = { label: string, value: string | number };
export type Choices = Array<any>;
export type Groups = Array<{ label: string, choices: Choices }>;

type Props = {
  multiple?: boolean,
  onChange?: (value: any) => any,
  value?: any,
  placeholder?: string,
  choices?: Choices,
  groups?: Groups,
  children?: any,
};

type State = {
  value: any,
};

export default class Select extends Component<Props, State> {
  onChange = (e: { target: HTMLSelectElement }) => {
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

  constructor(props: Props) {
    super(props);

    this.state = {
      value: props.value || (props.multiple ? [] : ''),
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    if (!this.didMount || nextProps.value === this.state.value) {
      return;
    }
    this.setState({ value: nextProps.value || (nextProps.multiple ? [] : '') });
  }

  componentDidMount() {
    this.didMount = true;
  }

  render() {
    const { placeholder, choices, groups, children, value, ...rest } = this.props;

    return (
      <FieldSelect {...rest} value={this.state.value} onChange={this.onChange}>
        {placeholder && (
          <option key={placeholder} value="">
            {placeholder}
          </option>
        )}
        {groups &&
          groups.map(group => (
            <optgroup key={group.label} label={group.label}>
              {group.choices.map(choice => {
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
            </optgroup>
          ))}
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
