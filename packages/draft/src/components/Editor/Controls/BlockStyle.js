import React from 'react';
import type { EditorState } from 'draft-js';
import StyleButton from './StyleButton';
import { Controls } from './styled';

type Props = {
  editorState: EditorState,
  onToggle: string => void,
  openVideoModal: () => void,
  openImageModal: () => void,
};

const BlockStyleControls = ({ editorState, onToggle, openVideoModal, openImageModal }: Props) => {
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  const BLOCK_TYPES = [
    { label: 'H2', style: 'header-two' },
    { label: 'H3', style: 'header-three' },
    {
      label: '',
      style: 'atomic-image',
      className: 'dashicons dashicons-format-image',
      onToggle: openImageModal,
    },
    {
      label: '',
      style: 'atomic-video',
      className: 'dashicons dashicons-format-video',
      onToggle: openVideoModal,
    },
    {
      label: '',
      style: 'blockquote',
      className: 'dashicons dashicons-editor-quote',
    },
    {
      label: '',
      style: 'unordered-list-item',
      className: 'dashicons dashicons-editor-ul',
    },
    {
      label: '',
      style: 'ordered-list-item',
      className: 'dashicons dashicons-editor-ol',
    },
    {
      label: '',
      style: 'code-block',
      className: 'dashicons dashicons-editor-code',
    },
  ];

  return (
    <Controls>
      {BLOCK_TYPES.map(type => (
        <StyleButton
          key={type.style}
          className={type.className}
          active={type.style === blockType}
          label={type.label}
          onToggle={type.onToggle || onToggle}
          style={type.style}
        />
      ))}
    </Controls>
  );
};

export default BlockStyleControls;
