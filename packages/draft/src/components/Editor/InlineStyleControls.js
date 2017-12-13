import React, { Component, Fragment } from 'react';
import { RichUtils, EditorState } from 'draft-js';
import StyleButton from './StyleButton';
import { Controls } from './styled';

/* eslint-disable react/prop-types */

const INLINE_STYLES = [
  { label: '', style: 'BOLD', className: 'dashicons dashicons-editor-bold' },
  {
    label: '',
    style: 'ITALIC',
    className: 'dashicons dashicons-editor-italic',
  },
  {
    label: '',
    style: 'UNDERLINE',
    className: 'dashicons dashicons-editor-underline',
  },
  {
    label: '',
    style: 'STRIKETHROUGH',
    className: 'dashicons dashicons-editor-strikethrough',
  },
  {
    label: (
      <Fragment>
        X<sup>2</sup>
      </Fragment>
    ),
    style: 'SUPERSCRIPT',
    className: '',
  },
  {
    label: (
      <Fragment>
        X<sub>2</sub>
      </Fragment>
    ),
    style: 'SUBSCRIPT',
    className: '',
  },
  { label: '', style: 'CODE', className: 'dashicons dashicons-editor-code' },
  { label: '', style: 'LINK', className: 'dashicons dashicons-admin-links' },
];

export default class InlineStyleControls extends Component {
  constructor(props) {
    super(props);

    const linkKey = this.getLinkKey(props);

    this.state = {
      mode: '',
      urlValue: '',
    };
    if (linkKey) {
      const contentState = props.editorState.getCurrentContent();
      const linkInstance = contentState.getEntity(linkKey);
      this.state = {
        mode: 'LINK',
        urlValue: linkInstance.getData().url,
      };
    }
  }

  componentWillReceiveProps(nextProps) {
    const linkKey = this.getLinkKey(nextProps);
    if (linkKey) {
      const contentState = nextProps.editorState.getCurrentContent();
      const linkInstance = contentState.getEntity(linkKey);
      this.setState({
        mode: 'LINK',
        urlValue: linkInstance.getData().url,
      });
    }
  }

  getLinkKey = props => {
    const { editorState } = props;
    const selection = editorState.getSelection();
    if (selection.isCollapsed()) {
      return '';
    }
    const contentState = editorState.getCurrentContent();
    const startKey = editorState.getSelection().getStartKey();
    const startOffset = editorState.getSelection().getStartOffset();
    const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
    return blockWithLinkAtBeginning.getEntityAt(startOffset);
  };

  // event propagation is already handled
  showLink = () => {
    const { editorState } = this.props;
    const selection = editorState.getSelection();
    if (selection.isCollapsed()) {
      return;
    }
    const contentState = editorState.getCurrentContent();
    const linkKey = this.getLinkKey(this.props);

    let url = '';
    if (linkKey) {
      const linkInstance = contentState.getEntity(linkKey);
      url = linkInstance.getData().url;
    }

    this.setState(
      {
        mode: 'LINK',
        urlValue: url,
      },
      () => {
        setTimeout(() => this.linkInput.focus(), 0);
      }
    );
  };

  addLink = e => {
    e.preventDefault();
    const { editorState } = this.props;
    const { urlValue } = this.state;
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', { url: urlValue });
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });

    this.setState(
      {
        mode: '',
        urlValue: '',
      },
      () => {
        setTimeout(() => this.props.editor.focus(), 0);
      }
    );
    this.props.onChange(
      RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey)
    );
  };

  removeLink = e => {
    e.preventDefault();
    const { editorState } = this.props;
    const selection = editorState.getSelection();
    if (selection.isCollapsed()) {
      return;
    }

    this.setState({
      mode: '',
      urlValue: '',
    });
    this.props.onChange(RichUtils.toggleLink(editorState, selection, null));
  };

  cancelLink = e => {
    e.preventDefault();

    this.setState({ mode: '' }, () => {
      setTimeout(() => this.props.editor.focus(), 0);
    });
  };

  onLinkInputChange = e => {
    this.setState({ urlValue: e.target.value });
  };

  onLinkInputKeyDown = e => {
    if (e.which === 13) {
      this.addLink(e);
    }
  };

  render() {
    const { editorState, onToggle } = this.props;
    const currentStyle = editorState.getCurrentInlineStyle();

    return (
      <Controls>
        {this.state.mode === 'LINK' ? (
          <Fragment>
            <input
              ref={linkInput => {
                this.linkInput = linkInput;
              }}
              value={this.state.urlValue}
              onChange={this.onLinkInputChange}
              onKeyDown={this.onLinkInputKeyDown}
              type="text"
            />
            <button onClick={this.removeLink}>Remove</button>
            <button onClick={this.cancelLink}>Cancel</button>
          </Fragment>
        ) : (
          INLINE_STYLES.map(type => (
            <StyleButton
              key={type.style}
              className={type.className}
              active={currentStyle.has(type.style)}
              label={type.label}
              onToggle={type.style === 'LINK' ? this.showLink : onToggle}
              style={type.style}
            />
          ))
        )}
      </Controls>
    );
  }
}
