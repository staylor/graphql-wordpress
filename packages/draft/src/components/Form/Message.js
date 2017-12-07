import React, { Component } from 'react';
import { MessageWrap, MessageText, DismissButton } from './styled';

/* eslint-disable react/prop-types */

export default class Message extends Component {
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
