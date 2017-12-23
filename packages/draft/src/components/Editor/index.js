import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import {
  Editor as DraftEditor,
  EditorState,
  CompositeDecorator,
  RichUtils,
  AtomicBlockUtils,
  convertFromRaw,
  getVisibleSelectionRect,
  DefaultDraftBlockRenderMap,
} from 'draft-js';
import { Map } from 'immutable';
import cn from 'classnames';
import Video from 'components/Videos/Video';
import BlockStyleControls from './Controls/BlockStyle';
import InlineStyleControls from './Controls/InlineStyle';
import LinkDecorator from './decorators/LinkDecorator';
import TwitterDecorator from './decorators/TwitterDecorator';
import { EditorWrap, RichEditor, hidePlaceholderClass, BlockButton, Toolbar } from './styled';
import styleMap from './styleMap';
import { blockRenderer, blockStyle } from './Blocks';
import { getSelection } from './utils';
import ImageModal from './Modals/Image';
import VideoModal from './Modals/Video';

/* eslint-disable react/prop-types, react/no-find-dom-node, class-methods-use-this */

export default class Editor extends Component {
  static childContextTypes = {
    setReadOnly: PropTypes.func,
    setEditorState: PropTypes.func,
  };

  getChildContext() {
    return {
      setReadOnly: readOnly => this.setState({ readOnly }),
      setEditorState: contentState => {
        const editorState = EditorState.set(this.state.editorState, {
          currentContent: contentState,
        });
        this.setState({ editorState });
      },
    };
  }

  state = {
    readOnly: false,
    blockToolbar: false,
    imageModal: false,
    videoModal: false,
  };

  editor = null;

  constructor(props, context) {
    super(props, context);

    this.blockRenderMap = DefaultDraftBlockRenderMap.merge(Map({ atomic: { element: 'span' } }));

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

  getSelectedBlockElement() {
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

  showBlockToolbar(topOffset) {
    const blockToolbar = ReactDOM.findDOMNode(this.blockToolbar);
    // $TODO: Magic Number
    blockToolbar.style.top = `${topOffset - 40}px`;
    blockToolbar.style.transform = 'scale(1)';
  }

  hideBlockToolbar() {
    const blockToolbar = ReactDOM.findDOMNode(this.blockToolbar);
    blockToolbar.style.transform = 'scale(0)';
    if (this.state.blockToolbar) {
      this.setState({ blockToolbar: false });
    }
  }

  showBlockButton(blockButton) {
    const editor = ReactDOM.findDOMNode(this.editor);
    const editorBoundary = editor.getBoundingClientRect();
    const selected = this.getSelectedBlockElement();
    if (!selected) {
      this.hideBlockButton(blockButton);
      // console.log('--- NO SELECTED BLOCK ---');
      return;
    }
    const bounds = selected.getBoundingClientRect();
    const topOffset = bounds.top - editorBoundary.top;
    blockButton.style.top = `${topOffset}px`;
    blockButton.style.transform = 'scale(1)';

    if (this.state.blockToolbar) {
      this.showBlockToolbar(topOffset);
    } else {
      this.hideBlockToolbar();
    }
  }

  hideBlockButton(blockButton) {
    this.hideBlockToolbar();
    blockButton.style.transform = 'scale(0)';
  }

  showInlineToolbar(inlineToolbar) {
    const TOOLBAR_WIDTH = 250;
    const TOOLBAR_HEIGHT = 32;

    const editor = ReactDOM.findDOMNode(this.editor);
    const editorBoundary = editor.getBoundingClientRect();
    const selectionBoundary = getVisibleSelectionRect(window);
    if (!selectionBoundary) {
      return;
    }
    // ensure that toolbar is positioned in the middle
    // and above the selection, regardless of toolbar state
    inlineToolbar.style.width = `${TOOLBAR_WIDTH}px`;
    inlineToolbar.style.top = `${selectionBoundary.top -
      editorBoundary.top -
      TOOLBAR_HEIGHT -
      // $TODO: Magic Number
      10}px`;
    const widthDiff = selectionBoundary.width - TOOLBAR_WIDTH;
    let leftOffset;
    if (widthDiff >= 0) {
      leftOffset = Math.max(widthDiff / 2, 0);
    } else {
      const left = selectionBoundary.left - editorBoundary.left;
      leftOffset = Math.max(left + widthDiff / 2, 0);
    }
    inlineToolbar.style.left = `${leftOffset}px`;
    // this class allows us to style the toolbar arrow with CSS
    if (leftOffset === 0) {
      inlineToolbar.classList.add('Toolbar-flush');
    } else {
      inlineToolbar.classList.remove('Toolbar-flush');
    }
    inlineToolbar.style.transform = 'scale(1)';
  }

  hideInlineToolbar(inlineToolbar) {
    inlineToolbar.style.transform = 'scale(0)';
  }

  componentDidUpdate() {
    if (this.state.readOnly) {
      // console.log('--- READ ONLY ---');
      return;
    }

    const { editorState } = this.state;
    const selection = editorState.getSelection();
    const anchorOffset = selection.get('anchorOffset');
    const focusOffset = selection.get('focusOffset');

    const blockButton = ReactDOM.findDOMNode(this.blockButton);
    const inlineToolbar = ReactDOM.findDOMNode(this.inlineToolbar);

    if (anchorOffset === 0 && focusOffset === 0) {
      this.hideInlineToolbar(inlineToolbar);
      this.showBlockButton(blockButton);
      return;
    }

    this.hideBlockButton(blockButton);

    if (anchorOffset === focusOffset) {
      this.hideInlineToolbar(inlineToolbar);
      // console.log('--- EMPTY SELECTION ---');
      return;
    }

    this.showInlineToolbar(inlineToolbar);
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
        <BlockButton
          className={cn('dashicons', {
            'dashicons-plus-alt': !this.state.blockToolbar,
            'dashicons-no': this.state.blockToolbar,
          })}
          innerRef={blockButton => {
            this.blockButton = blockButton;
          }}
          onMouseDown={e => {
            e.preventDefault();
            e.stopPropagation();

            this.setState({
              blockToolbar: !this.state.blockToolbar,
            });
          }}
        >
          {' '}
        </BlockButton>
        <Toolbar
          innerRef={toolbar => {
            this.blockToolbar = toolbar;
          }}
          className="Toolbar-sidebar"
          focus={this.focus}
        >
          <BlockStyleControls
            openImageModal={() => this.setState({ imageModal: true })}
            openVideoModal={() => this.setState({ videoModal: true })}
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
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
            readOnly={this.state.readOnly}
            editorState={editorState}
            onChange={this.onChange}
            onTab={this.onTab}
            handleKeyCommand={this.handleKeyCommand}
            blockRenderMap={this.blockRenderMap}
            blockRendererFn={blockRenderer}
            blockStyleFn={blockStyle}
            customStyleMap={styleMap}
            {...rest}
          />
          <Toolbar
            innerRef={toolbar => {
              this.inlineToolbar = toolbar;
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
        {this.state.imageModal && (
          <ImageModal
            selectImage={this.setEntityData('IMAGE')}
            onClose={e => {
              e.preventDefault();
              this.setState({ imageModal: false });
            }}
          />
        )}
        {this.state.videoModal && (
          <VideoModal
            selectVideo={this.setEntityData('VIDEO')}
            onClose={e => {
              e.preventDefault();
              this.setState({ videoModal: false });
            }}
          />
        )}
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
            imageId
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
            videoId
            video {
              ...Video_video
            }
          }
        }
      }
    }
    ${Video.fragments.video}
  `,
};
