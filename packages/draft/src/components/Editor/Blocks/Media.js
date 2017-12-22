import React from 'react';
import Video from 'components/Videos/Video';

/* eslint-disable react/prop-types */

const cropMap = {
  FEATURE: 640,
  MEDIUM: 300,
  THUMB: 150,
};

const Media = ({ contentState, block }) => {
  const entity = contentState.getEntity(block.getEntityAt(0));
  const type = entity.getType();

  if (type === 'EMBED') {
    const { html } = entity.getData();
    // eslint-disable-next-line react/no-danger
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  }

  if (type === 'IMAGE') {
    const { image, size } = entity.getData();
    const crop = image.crops.find(c => c.width === cropMap[size]);
    return <img alt="" src={`/uploads/${image.destination}/${crop.fileName}`} />;
  }

  if (type === 'VIDEO') {
    const { video } = entity.getData();
    return <Video video={video} embed />;
  }

  return null;
};

export default Media;
