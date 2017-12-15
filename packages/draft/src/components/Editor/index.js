import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import gql from 'graphql-tag';
import {
  Editor as DraftEditor,
  EditorState,
  CompositeDecorator,
  RichUtils,
  AtomicBlockUtils,
  convertFromRaw,
  getVisibleSelectionRect,
} from 'draft-js';
import cn from 'classnames';
import EmbedInput from './EmbedInput';
import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';
import Media from './Media';
import LinkDecorator from './decorators/LinkDecorator';
import TwitterDecorator from './decorators/TwitterDecorator';
import {
  EditorWrap,
  RichEditor,
  hidePlaceholderClass,
  blockquoteClass,
  BlockButton,
  Toolbar,
  toolbarOpenClass,
} from './styled';

/* eslint-disable react/prop-types,no-underscore-dangle */

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
  state = {
    blockToolbar: false,
  };

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
    this.editor.focus();
  }

  // eslint-disable-next-line
  getSelectedBlockElement() {
    const bounds = getVisibleSelectionRect(window);
    if (bounds && bounds.width > 1) {
      return null;
    }
    const selection = window.getSelection();
    if (selection.rangeCount === 0) return null;
    let node = selection.getRangeAt(0).startContainer;
    do {
      if (node.getAttribute && node.getAttribute('data-block') === 'true') return node;
      node = node.parentNode;
    } while (node != null);
    return null;
  }

  componentDidUpdate() {
    const selected = this.getSelectedBlockElement();
    // eslint-disable-next-line react/no-find-dom-node
    const editor = ReactDOM.findDOMNode(this.editor);
    const editorBoundary = editor.getBoundingClientRect();
    // eslint-disable-next-line react/no-find-dom-node
    const sidebar = ReactDOM.findDOMNode(this.sidebar);
    if (this.state.blockToolbar) {
      sidebar.style.transform = 'scale(1)';
    } else {
      sidebar.style.transform = 'scale(0)';
    }
    // eslint-disable-next-line react/no-find-dom-node
    const blockButton = ReactDOM.findDOMNode(this.blockButton);
    if (selected) {
      const bounds = selected.getBoundingClientRect();
      blockButton.style.transform = 'scale(1)';
      const offset = editorBoundary.top - 48;
      const topOffset = bounds.top - offset;
      blockButton.style.top = `${topOffset}px`;
      sidebar.style.top = `${topOffset - 40}px`;
      return;
    }

    const selectionBoundary = getVisibleSelectionRect(window);
    if (!selectionBoundary) {
      return;
    }
    blockButton.style.transform = 'scale(0)';
    // eslint-disable-next-line react/no-find-dom-node
    const toolbarNode = ReactDOM.findDOMNode(this.toolbar);
    const toolbarBoundary = toolbarNode.getBoundingClientRect();
    toolbarNode.style.width = `${toolbarBoundary.width}px`;
    toolbarNode.style.top = `${selectionBoundary.top -
      editorBoundary.top -
      toolbarBoundary.height -
      5}px`;
    const widthDiff = selectionBoundary.width - toolbarBoundary.width;
    let leftOffset;
    if (widthDiff >= 0) {
      leftOffset = Math.max(widthDiff / 2, 0);
      toolbarNode.style.left = `${leftOffset}px`;
    } else {
      const left = selectionBoundary.left - editorBoundary.left;
      leftOffset = Math.max(left + widthDiff / 2, 0);
      toolbarNode.style.left = `${leftOffset}px`;
      toolbarNode.style.width = `${toolbarBoundary.width}px`;
    }
    if (leftOffset === 0) {
      toolbarNode.classList.add('Toolbar-flush');
    } else {
      toolbarNode.classList.remove('Toolbar-flush');
    }
  }

  setEmbedData = data => {
    const { editorState } = this.state;
    const currentContent = editorState.getCurrentContent();
    const contentStateWithEntity = currentContent.createEntity('EMBED', 'IMMUTABLE', data);
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });

    this.setState({
      editorState: AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '),
    });
  };

  render() {
    const { content, onChange, ...rest } = this.props;
    const { editorState } = this.state;
    const contentState = editorState.getCurrentContent();

    return (
      <EditorWrap>
        <EmbedInput setEmbedData={this.setEmbedData} />
        <BlockButton
          className={cn('dashicons', {
            'dashicons-plus-alt': !this.state.blockToolbar,
            'dashicons-no': this.state.blockToolbar,
          })}
          innerRef={blockButton => {
            this.blockButton = blockButton;
          }}
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();

            this.setState(prevState => ({
              blockToolbar: !prevState.blockToolbar,
            }));
          }}
        >
          {' '}
        </BlockButton>
        <Toolbar
          innerRef={sidebar => {
            this.sidebar = sidebar;
          }}
          className={cn('Toolbar-sidebar', {
            [toolbarOpenClass]: editorState.getSelection().isCollapsed(),
          })}
          focus={() => this.editor.focus()}
        >
          <BlockStyleControls editorState={editorState} onToggle={this.toggleBlockType} />
        </Toolbar>
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
            innerRef={toolbar => {
              this.toolbar = toolbar;
            }}
            className={cn({
              [toolbarOpenClass]: !editorState.getSelection().isCollapsed(),
            })}
            focus={() => this.editor.focus()}
          >
            <InlineStyleControls
              editor={this.editor}
              onChange={this.onChange}
              editorState={editorState}
              onToggle={this.toggleInlineStyle}
            />
          </Toolbar>
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
