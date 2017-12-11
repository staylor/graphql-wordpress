import React, { Fragment } from 'react';
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
];

const InlineStyleControls = ({ editorState, onToggle }) => {
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
    </Controls>
  );
};

export default InlineStyleControls;
