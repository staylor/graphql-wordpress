import React from 'react';

/* eslint-disable react/prop-types */

const Media = ({ contentState, block }) => {
  const entity = contentState.getEntity(block.getEntityAt(0));
  const type = entity.getType();

  if (type === 'embed') {
    const { html } = entity.getData();
    // eslint-disable-next-line react/no-danger
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return null;
};

export default Media;
