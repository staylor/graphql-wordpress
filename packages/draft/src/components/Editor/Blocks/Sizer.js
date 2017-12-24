import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { mediaSettingsShape } from 'types/PropTypes';
import { Sizer as SizerWrap } from './styled';

const OFFSET_TOP = 8;
const OFFSET_LEFT = 8;

export default function Sizer(
  { contentState, entityKey, bounds },
  { setEditorState, mediaSettings }
) {
  return ReactDOM.createPortal(
    <SizerWrap
      style={{
        left: OFFSET_LEFT + bounds.left,
        top: OFFSET_TOP + bounds.top + window.scrollY,
      }}
    >
      {mediaSettings.crops.map(crop => (
        <button
          key={crop.name}
          onMouseDown={e => {
            e.stopPropagation();
            contentState.mergeEntityData(entityKey, { size: crop.name });
            setEditorState(contentState);
          }}
        >
          {crop.name}
        </button>
      ))}
    </SizerWrap>,
    document.getElementById('atomicToolbar')
  );
}

Sizer.contextTypes = {
  setEditorState: PropTypes.func,
  mediaSettings: mediaSettingsShape,
};
