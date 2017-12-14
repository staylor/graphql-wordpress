import React, { Component } from 'react';
import gql from 'graphql-tag';
import {
  Editor as DraftEditor,
  EditorState,
  CompositeDecorator,
  RichUtils,
  AtomicBlockUtils,
  convertFromRaw,
} from 'draft-js';
import cn from 'classnames';
import BlockStyleControls from './BlockStyleControls';
import Toolbar from './Toolbar';
import Media from './Media';
import LinkDecorator from './decorators/LinkDecorator';
import TwitterDecorator from './decorators/TwitterDecorator';
import { EditorWrap, RichEditor, hidePlaceholderClass, blockquoteClass } from './styled';

/* eslint-disable react/prop-types,no-underscore-dangle */

const cache = {};

const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
  SUPERSCRIPT: {
    fontSize: 10,
    verticalAlign: 'super',
  },
  SUBSCRIPT: {
    fontSize: 10,
    verticalAlign: 'sub',
  },
};

function blockRenderer(block) {
  if (block.getType() === 'atomic') {
    return {
      component: Media,
      editable: false,
    };
  }

  return null;
}

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return blockquoteClass;
    default:
      return null;
  }
}

export default class Editor extends Component {
  state = {};

  editor = null;

  constructor(props, context) {
    super(props, context);

    const decorator = new CompositeDecorator([...LinkDecorator, ...TwitterDecorator]);

    if (props.content) {
      const contentState = convertFromRaw(props.content);
      this.state.editorState = EditorState.createWithContent(contentState, decorator);
    } else {
      // EditorState.createEmpty() throws errors upon focus, seems to only
      // happen when decorators are added
      const contentState = convertFromRaw({
        entityMap: {},
        blocks: [
          {
            text: '',
            key: 'foo',
            type: 'unstyled',
            entityRanges: [],
          },
        ],
      });
      this.state.editorState = EditorState.createWithContent(contentState, decorator);
    }

    this.focus = () => this.editor.focus();
    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    this.onTab = this._onTab.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
  }

  _handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _onTab(e) {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }

  _toggleBlockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
  }

  onChange = editorState => {
    this.setState({ editorState });
    if (this.props.onChange) {
      this.props.onChange(editorState.getCurrentContent());
    }
  };

  componentDidMount() {
    if (this.props.onChange) {
      this.props.onChange(this.state.editorState.getCurrentContent());
    }
  }

  render() {
    const { content, onChange, ...rest } = this.props;
    const { editorState } = this.state;

    const contentState = editorState.getCurrentContent();

    return (
      <EditorWrap>
        Add Embed Block:{' '}
        <input
          type="text"
          onKeyDown={e => {
            if (e.which === 13) {
              fetch(
                `http://localhost:3000/oembed?provider=${encodeURIComponent(
                  'https://www.youtube.com/oembed'
                )}&url=${encodeURIComponent(this.state.embed)}`
              )
                .then(result => result.json())
                .then(response => {
                  cache[this.state.embed] = response.html;
                  const currentContent = editorState.getCurrentContent();
                  const contentStateWithEntity = currentContent.createEntity('EMBED', 'IMMUTABLE', {
                    type: 'EMBED',
                    url: this.state.embed,
                    html: response.html,
                  });
                  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
                  const newEditorState = EditorState.set(editorState, {
                    currentContent: contentStateWithEntity,
                  });

                  this.setState({
                    editorState: AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '),
                    embed: '',
                  });
                });
            }
          }}
          onChange={e => {
            this.setState({ embed: e.target.value });
          }}
          value={this.state.embed || ''}
        />
        <BlockStyleControls editorState={editorState} onToggle={this.toggleBlockType} />
        <RichEditor
          className={cn({
            [hidePlaceholderClass]:
              !contentState.hasText() &&
              contentState
                .getBlockMap()
                .first()
                .getType() !== 'unstyled',
          })}
          onClick={this.focus}
        >
          <DraftEditor
            ref={editor => {
              this.editor = editor;
            }}
            editorState={editorState}
            onChange={this.onChange}
            onTab={this.onTab}
            handleKeyCommand={this.handleKeyCommand}
            blockRendererFn={blockRenderer}
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            {...rest}
          />
          <Toolbar
            onChange={this.onChange}
            editorState={editorState}
            editor={this.editor}
            toggleInlineStyle={this.toggleInlineStyle}
            focus={() => this.editor.focus()}
          />
        </RichEditor>
      </EditorWrap>
    );
  }
}

Editor.fragments = {
  contentState: gql`
    fragment Editor_contentState on ContentState {
      blocks {
        key
        text
        type
        depth
        inlineStyleRanges {
          offset
          length
          style
        }
        entityRanges {
          offset
          length
          key
        }
      }
      entityMap {
        type
        mutability
        data {
          ... on LinkData {
            href
            target
          }
          ... on EmbedData {
            url
            html
          }
        }
      }
    }
  `,
};
