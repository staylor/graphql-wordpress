import React from 'react';
import Video from 'components/Videos/Video';
import Image from './Image';

/* eslint-disable react/prop-types */

export default function Media({ contentState, block }) {
  const entityKey = block.getEntityAt(0);
  if (!entityKey) {
    return null;
  }
  const entity = contentState.getEntity(entityKey);
  const type = entity.getType();

  if (type === 'EMBED') {
    const { html } = entity.getData();
    // eslint-disable-next-line react/no-danger
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  }

  if (type === 'IMAGE') {
    return <Image {...{ contentState, entityKey, entity }} />;
  }

  if (type === 'VIDEO') {
    const { video } = entity.getData();
    return <Video video={video} embed />;
  }

  return null;
}
