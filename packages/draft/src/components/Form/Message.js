// @flow
import React, { Component } from 'react';
import { MessageWrap, MessageText, DismissButton } from './styled';

type Props = {
  text: string,
};

type State = {
  hidden: boolean,
};

export default class Message extends Component<Props, State> {
  state = {
    hidden: false,
  };

  onClick = () => {
    this.setState({ hidden: true });
  };

  componentWillReceiveProps() {
    this.setState({ hidden: false });
  }

  render() {
    return this.state.hidden ? null : (
      <MessageWrap>
        <MessageText>{this.props.text}</MessageText>
        <DismissButton onClick={this.onClick} />
      </MessageWrap>
    );
  }
}
