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
import ImageInput from './ImageInput';
import VideoInput from './VideoInput';
import BlockStyleControls from './Controls/BlockStyle';
import InlineStyleControls from './Controls/InlineStyle';
import LinkDecorator from './decorators/LinkDecorator';
import TwitterDecorator from './decorators/TwitterDecorator';
import { EditorWrap, RichEditor, hidePlaceholderClass, BlockButton, Toolbar } from './styled';
import styleMap from './styleMap';
import { blockRenderer, blockStyle } from './Blocks';
import { getSelection } from './utils';

/* eslint-disable react/prop-types */

export default class Editor extends Component {
  state = {
    blockToolbar: false,
  };

  editor = null;

  constructor(props, context) {
    super(props, context);

    const decorator = new CompositeDecorator([...LinkDecorator, ...TwitterDecorator]);

    let contentState;
    if (props.content) {
      contentState = convertFromRaw(props.content);
    } else {
      // EditorState.createEmpty() throws errors upon focus, seems to only
      // happen when decorators are added
      contentState = convertFromRaw({
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
    }
    this.state.editorState = EditorState.createWithContent(contentState, decorator);

    this.focus = () => this.editor.focus();
  }

  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  };

  onTab = e => {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  };

  toggleBlockType = blockType => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  };

  toggleInlineStyle = inlineStyle => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
  };

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
    this.focus();
  }

  // eslint-disable-next-line
  getSelectedBlockElement() {
    const bounds = getVisibleSelectionRect(window);
    if (bounds && bounds.width > 1) {
      return null;
    }
    const selection = getSelection(window);
    if (selection.rangeCount === 0) {
      return null;
    }
    let node = selection.getRangeAt(0).startContainer;
    do {
      if (node.getAttribute && node.getAttribute('data-block') === 'true') {
        return node;
      }
      node = node.parentNode;
    } while (node != null);
    return null;
  }

  componentDidUpdate() {
    const selected = this.getSelectedBlockElement();

    /* eslint-disable react/no-find-dom-node */
    const editor = ReactDOM.findDOMNode(this.editor);
    const toolbarNode = ReactDOM.findDOMNode(this.toolbar);
    const sidebar = ReactDOM.findDOMNode(this.sidebar);
    const blockButton = ReactDOM.findDOMNode(this.blockButton);
    /* eslint-enable react/no-find-dom-node */

    if (this.state.blockToolbar) {
      sidebar.style.transform = 'scale(1)';
    } else {
      sidebar.style.transform = 'scale(0)';
    }

    if (selected) {
      const editorBoundary = editor.getBoundingClientRect();
      toolbarNode.style.transform = 'scale(0)';
      const bounds = selected.getBoundingClientRect();
      blockButton.style.transform = 'scale(1)';
      // $TODO: Magic Number
      const offset = editorBoundary.top - 48;
      const topOffset = bounds.top - offset;
      blockButton.style.top = `${topOffset}px`;
      // $TODO: Magic Number
      sidebar.style.top = `${topOffset - 40}px`;
      return;
    }

    const selectionBoundary = getVisibleSelectionRect(window);
    if (!selectionBoundary) {
      return;
    }

    // hide block tools
    blockButton.style.transform = 'scale(0)';

    let toolbarBoundary;
    // ensure that the animation is not triggered
    // when the toolbar is already open
    if (toolbarNode.style.transform === 'scale(1)') {
      toolbarBoundary = toolbarNode.getBoundingClientRect();
      toolbarNode.style.width = `${toolbarBoundary.width}px`;
    } else {
      // ensure that toolbar has dimensions
      toolbarNode.style.visibility = 'hidden';
      toolbarNode.style.left = '-9999px';
      toolbarNode.style.transition = 'none';
      toolbarNode.style.transform = 'scale(1)';
      toolbarBoundary = toolbarNode.getBoundingClientRect();
      toolbarNode.style.transform = 'scale(0)';
    }

    const editorBoundary = editor.getBoundingClientRect();
    // ensure that toolbar is positioned in the middle
    // and above the selection, regardless of toolbar state
    toolbarNode.style.width = `${toolbarBoundary.width}px`;
    toolbarNode.style.top = `${selectionBoundary.top -
      editorBoundary.top -
      toolbarBoundary.height -
      // $TODO: Magic Number
      5}px`;
    const widthDiff = selectionBoundary.width - toolbarBoundary.width;
    let leftOffset;
    if (widthDiff >= 0) {
      leftOffset = Math.max(widthDiff / 2, 0);
    } else {
      const left = selectionBoundary.left - editorBoundary.left;
      leftOffset = Math.max(left + widthDiff / 2, 0);
    }
    toolbarNode.style.left = `${leftOffset}px`;
    // this class allows us to style the toolbar arrow with CSS
    if (leftOffset === 0) {
      toolbarNode.classList.add('Toolbar-flush');
    } else {
      toolbarNode.classList.remove('Toolbar-flush');
    }
    toolbarNode.style.visibility = '';
    // without a delay, the toolbar can sometimes appear for a split second scaled
    setTimeout(() => {
      toolbarNode.style.transition = 'transform 0.15s cubic-bezier(0.3, 1.2, 0.2, 1)';
      toolbarNode.style.transform = 'scale(1)';
    }, 10);
  }

  setEntityData = ENTITY => data => {
    const { editorState } = this.state;
    const currentContent = editorState.getCurrentContent();
    const contentStateWithEntity = currentContent.createEntity(ENTITY, 'IMMUTABLE', data);
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
        <EmbedInput setEmbedData={this.setEntityData('EMBED')} />
        <ImageInput setImageData={this.setEntityData('IMAGE')} />
        <VideoInput setVideoData={this.setEntityData('VIDEO')} />
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
          className="Toolbar-sidebar"
          focus={this.focus}
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
            blockStyleFn={blockStyle}
            customStyleMap={styleMap}
            {...rest}
          />
          <Toolbar
            innerRef={toolbar => {
              this.toolbar = toolbar;
            }}
            focus={this.focus}
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
          ... on ImageData {
            id
            image {
              destination
              crops {
                width
                fileName
              }
            }
            size
          }
          ... on VideoData {
            id
            video {
              title
              dataId
              thumbnails {
                width
                height
                url
              }
            }
          }
        }
      }
    }
  `,
};
