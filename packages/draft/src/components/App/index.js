import React, { Component } from 'react';
import { injectGlobal } from 'emotion';
import styled from 'react-emotion';
import debounce from 'debounce';
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
  textarea = null;
  title = null;
  content = null;

  state = {
    showEditor: false,
  };

  componentDidMount() {
    requestAnimationFrame(() => {
      this.setState({ showEditor: true });
    });
  }

  onClick = e => {
    e.preventDefault();

    console.log(this.title);
  };

  titleChange = debounce(title => {
    this.title = title;
  }, 200);

  contentChange = debounce(content => {
    this.content = content;
  }, 200);

  render() {
    if (this.state.showEditor) {
      return (
        <div>
          <Field>
            <Editor onChange={this.titleChange} placeholder="Title" />
          </Field>
          <Field>
            <Editor onChange={this.contentChange} placeholder="Post goes here..." />
          </Field>
          <button onClick={this.onClick}>Click Me</button>
          <textarea
            css={`display: block; margin: 20px 0;`}
            ref={textarea => {
              this.textarea = textarea;
            }}
          />
        </div>
      );
    }

    return <div />;
  }
}
