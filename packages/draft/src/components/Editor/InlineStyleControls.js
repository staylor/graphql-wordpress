import React from 'react';
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
  { label: '', style: 'CODE', className: 'dashicons dashicons-editor-code' },
];

const InlineStyleControls = ({ editorState, onToggle, addLink, removeLink }) => {
  const currentStyle = editorState.getCurrentInlineStyle();
  return (
    <Controls>
      {INLINE_STYLES.map(type => (
        <StyleButton
          key={type.style}
          className={type.className}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
      <StyleButton
        key="LINK"
        className="dashicons dashicons-admin-links"
        active={currentStyle.has('LINK')}
        label=""
        onToggle={addLink}
        style="LINK"
      />
      <StyleButton
        key="UNLINK"
        className="dashicons dashicons-editor-unlink"
        label=""
        onToggle={removeLink}
        style="UNLINK"
      />
    </Controls>
  );
};

export default InlineStyleControls;
