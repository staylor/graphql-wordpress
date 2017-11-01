import React, { Component } from 'react';
import { Editor as DraftEditor, EditorState, convertToRaw, convertFromRaw } from 'draft-js';

export default class Editor extends Component {
  rawContent = null;

  constructor(props, context) {
    super(props, context);

    // eslint-disable-next-line react/prop-types
    if (this.props.content) {
      this.state = { editorState: convertFromRaw(this.props.content) };
    } else {
      this.state = { editorState: EditorState.createEmpty() };
    }
  }

  onChange = editorState => {
    this.setState({ editorState });
  };

  getContent() {
    return convertToRaw(this.state.editorState.getCurrentContent());
  }

  render() {
    const { content, ...rest } = this.props;

    return <DraftEditor {...rest} editorState={this.state.editorState} onChange={this.onChange} />;
  }
}
