import React from 'react';
import StyleButton from './StyleButton';
import { Controls } from './styled';

/* eslint-disable react/prop-types */

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
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

const BlockStyleControls = ({ editorState, onToggle }) => {
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <Controls>
      {BLOCK_TYPES.map(type => (
        <StyleButton
          key={type.style}
          className={type.className}
          active={type.style === blockType}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </Controls>
  );
};

export default BlockStyleControls;
