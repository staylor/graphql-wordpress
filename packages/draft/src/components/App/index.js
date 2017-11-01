import React, { Component } from 'react';
import { injectGlobal } from 'emotion';
import styled from 'react-emotion';
import Editor from 'components/Editor';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    font-family: sans-serif;
  }
`;

const Field = styled.div`
  border: 1px solid #eee;
  display: block;
  margin: 10px 0;
  padding: 5px;
`;

export default class App extends Component {
  state = {
    showEditor: false,
  };

  componentDidMount() {
    requestAnimationFrame(() => {
      this.setState({ showEditor: true });
    });
  }

  render() {
    return (
      <div>
        <Field>{this.state.showEditor ? <Editor placeholder="Title" /> : null}</Field>
        <Field>{this.state.showEditor ? <Editor placeholder="Post goes here..." /> : null}</Field>
      </div>
    );
  }
}
