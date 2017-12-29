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
} from 'draft-js';
import { cx } from 'emotion';
import Video from 'components/Videos/Video';
import ImageModal from 'components/Modals/Image';
import VideoModal from 'components/Modals/Video';
import BlockStyleControls from './Controls/BlockStyle';
import InlineStyleControls from './Controls/InlineStyle';
import LinkDecorator from './decorators/LinkDecorator';
import TwitterDecorator from './decorators/TwitterDecorator';
import { EditorWrap, RichEditor, hidePlaceholderClass, BlockButton, Toolbar } from './styled';
import styleMap from './styleMap';
import { blockRenderer, blockStyle } from './Blocks';
import { getSelection } from './utils';

/* eslint-disable react/prop-types, class-methods-use-this */

export default class Editor extends Component {
  static childContextTypes = {
    setReadOnly: PropTypes.func,
    setEditorState: PropTypes.func,
  };

  getChildContext() {
    return {
      setReadOnly: (readOnly, callback = null) => this.setState({ readOnly }, callback),
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

    const decorator = new CompositeDecorator([LinkDecorator, TwitterDecorator]);

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
    // $TODO: Magic Number
    this.blockToolbar.style.top = `${topOffset - 40}px`;
    this.blockToolbar.style.transform = 'scale(1)';
  }

  hideBlockToolbar() {
    this.blockToolbar.style.transform = 'scale(0)';
    if (this.state.blockToolbar) {
      this.setState({ blockToolbar: false });
    }
  }

  showBlockButton() {
    // Draft does the same thing internally #dark
    // eslint-disable-next-line react/no-find-dom-node
    const editor = ReactDOM.findDOMNode(this.editor);
    const editorBoundary = editor.getBoundingClientRect();
    const selected = this.getSelectedBlockElement();
    if (!selected) {
      this.hideBlockButton();
      // console.log('--- NO SELECTED BLOCK ---');
      return;
    }
    const bounds = selected.getBoundingClientRect();
    const topOffset = bounds.top - editorBoundary.top;
    this.blockButton.style.top = `${topOffset}px`;
    this.blockButton.style.transform = 'scale(1)';

    if (this.state.blockToolbar) {
      this.showBlockToolbar(topOffset);
    } else {
      this.hideBlockToolbar();
    }
  }

  hideBlockButton() {
    this.hideBlockToolbar();
    this.blockButton.style.transform = 'scale(0)';
  }

  showInlineToolbar() {
    const selectionBoundary = getVisibleSelectionRect(window);
    if (!selectionBoundary) {
      return;
    }

    const TOOLBAR_WIDTH = 250;
    const TOOLBAR_HEIGHT = 32;

    // Draft does the same thing internally #dark
    // eslint-disable-next-line react/no-find-dom-node
    const editor = ReactDOM.findDOMNode(this.editor);
    const editorBoundary = editor.getBoundingClientRect();
    // ensure that toolbar is positioned in the middle
    // and above the selection, regardless of toolbar state
    this.inlineToolbar.style.width = `${TOOLBAR_WIDTH}px`;
    this.inlineToolbar.style.top = `${selectionBoundary.top -
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
    this.inlineToolbar.style.left = `${leftOffset}px`;
    // this class allows us to style the toolbar arrow with CSS
    if (leftOffset === 0) {
      this.inlineToolbar.classList.add('Toolbar-flush');
    } else {
      this.inlineToolbar.classList.remove('Toolbar-flush');
    }
    this.inlineToolbar.style.transform = 'scale(1)';
  }

  hideInlineToolbar() {
    this.inlineToolbar.style.transform = 'scale(0)';
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

    if (anchorOffset === 0 && focusOffset === 0) {
      this.hideInlineToolbar();
      this.showBlockButton();
      return;
    }

    this.hideBlockButton();

    if (anchorOffset === focusOffset) {
      this.hideInlineToolbar();
      // console.log('--- EMPTY SELECTION ---');
      return;
    }

    this.showInlineToolbar();
  }

  setEntityData = ENTITY => data => {
    const { editorState } = this.state;
    const currentContent = editorState.getCurrentContent();
    const contentStateWithEntity = currentContent.createEntity(ENTITY, 'IMMUTABLE', data);
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });

    const insertedState = AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ');
    const contentState = insertedState.getCurrentContent();
    const blockMap = contentState.getBlockMap();
    const lastKey = blockMap.last().getKey();
    const cleanBlockMap = blockMap.filter(
      block =>
        block.getKey() === lastKey || block.getType() !== 'unstyled' || block.getText() !== ''
    );
    const mergedContent = contentState.merge({
      blockMap: cleanBlockMap,
    });

    this.setState({
      editorState: EditorState.set(editorState, {
        currentContent: mergedContent,
        selection: mergedContent.getSelectionAfter(),
        forceSelection: true,
      }),
    });
  };

  render() {
    const { content, onChange, ...rest } = this.props;
    const { editorState } = this.state;
    const contentState = editorState.getCurrentContent();

    return (
      <EditorWrap>
        <BlockButton
          className={cx('dashicons', {
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
          className={cx({
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
