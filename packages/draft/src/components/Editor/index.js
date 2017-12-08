import React, { Component } from 'react';
import {
  Editor as DraftEditor,
  EditorState,
  CompositeDecorator,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from 'draft-js';
import theme from 'styles/theme';
import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';
import { EditorWrap, RichEditor, hidePlaceholderClass, blockquoteClass, linkClass } from './styled';

/* eslint-disable react/prop-types,no-underscore-dangle */

const HANDLE_REGEX = /\@[\w]+/g;
const HASHTAG_REGEX = /\#[\w\u0590-\u05ff]+/g;

const HandleSpan = props => (
  <span style={{ color: theme.colors.pink }} data-offset-key={props.offsetKey}>
    {props.children}
  </span>
);
const HashtagSpan = props => (
  <span style={{ color: theme.colors.pink }} data-offset-key={props.offsetKey}>
    {props.children}
  </span>
);

function findWithRegex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr;
  let start;
  // eslint-disable-next-line
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

function handleStrategy(contentBlock, callback) {
  findWithRegex(HANDLE_REGEX, contentBlock, callback);
}

function hashtagStrategy(contentBlock, callback) {
  findWithRegex(HASHTAG_REGEX, contentBlock, callback);
}

function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
  }, callback);
}

const Link = ({ contentState, entityKey, children }) => {
  const { url } = contentState.getEntity(entityKey).getData();
  return (
    <a href={url} className={linkClass}>
      {children}
    </a>
  );
};

const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return blockquoteClass;
    default:
      return null;
  }
}

export default class Editor extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showURLInput: false,
      urlValue: '',
    };

    const decorator = new CompositeDecorator([
      {
        strategy: findLinkEntities,
        component: Link,
      },
      {
        strategy: handleStrategy,
        component: HandleSpan,
      },
      {
        strategy: hashtagStrategy,
        component: HashtagSpan,
      },
    ]);

    if (props.content) {
      const contentState = convertFromRaw(props.content);
      this.state.editorState = EditorState.createWithContent(contentState, decorator);
    } else {
      this.state.editorState = EditorState.createEmpty(decorator);
    }

    this.focus = () => this.editor.focus();
    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    this.onTab = this._onTab.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
    this.promptForLink = this._promptForLink.bind(this);
    this.onURLChange = e => this.setState({ urlValue: e.target.value });
    this.confirmLink = this._confirmLink.bind(this);
    this.onLinkInputKeyDown = this._onLinkInputKeyDown.bind(this);
    this.removeLink = this._removeLink.bind(this);
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

  _promptForLink() {
    const { editorState } = this.state;
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      const contentState = editorState.getCurrentContent();
      const startKey = editorState.getSelection().getStartKey();
      const startOffset = editorState.getSelection().getStartOffset();
      const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
      const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);
      let urlValue = '';
      if (linkKey) {
        const linkInstance = contentState.getEntity(linkKey);
        urlValue = linkInstance.getData().url;
      }
      this.setState(
        {
          showURLInput: true,
          urlValue,
        },
        () => {
          setTimeout(() => this.url.focus(), 0);
        }
      );
    }
  }

  _confirmLink(e) {
    e.preventDefault();
    const { editorState, urlValue } = this.state;
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', { url: urlValue });
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });
    this.setState(
      {
        editorState: RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey),
        showURLInput: false,
        urlValue: '',
      },
      () => {
        setTimeout(() => this.editor.focus(), 0);
      }
    );
  }

  _onLinkInputKeyDown(e) {
    if (e.which === 13) {
      this._confirmLink(e);
    }
  }

  _removeLink() {
    const { editorState } = this.state;
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      this.setState({
        editorState: RichUtils.toggleLink(editorState, selection, null),
      });
    }
  }

  onChange = editorState => {
    this.setState({ editorState });
    if (this.props.onChange) {
      this.props.onChange(this.getContent());
    }
  };

  getContent() {
    return convertToRaw(this.state.editorState.getCurrentContent());
  }

  componentDidMount() {
    if (this.props.onChange) {
      this.props.onChange(this.props.content);
    }
  }

  render() {
    const { content, onChange, ...rest } = this.props;
    const { editorState } = this.state;

    let urlInput;
    if (this.state.showURLInput) {
      urlInput = (
        <input
          onChange={this.onURLChange}
          ref={url => {
            this.url = url;
          }}
          type="text"
          value={this.state.urlValue}
          onKeyDown={this.onLinkInputKeyDown}
        />
      );
    }

    let className = '';
    const contentState = editorState.getCurrentContent();
    if (
      !contentState.hasText() &&
      contentState
        .getBlockMap()
        .first()
        .getType() !== 'unstyled'
    ) {
      className = hidePlaceholderClass;
    }

    return (
      <EditorWrap>
        <BlockStyleControls editorState={editorState} onToggle={this.toggleBlockType} />
        <InlineStyleControls
          editorState={editorState}
          addLink={this.promptForLink}
          removeLink={this.removeLink}
          onToggle={this.toggleInlineStyle}
        />
        {urlInput}
        <RichEditor className={className} onClick={this.focus}>
          <DraftEditor
            ref={editor => {
              this.editor = editor;
            }}
            editorState={editorState}
            onChange={this.onChange}
            onTab={this.onTab}
            handleKeyCommand={this.handleKeyCommand}
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            {...rest}
          />
        </RichEditor>
      </EditorWrap>
    );
  }
}
