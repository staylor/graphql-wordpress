import React from 'react';
import cn from 'classnames';
import Video from 'components/Videos/Video';
import { ImageWrap, Image, Sizer } from './styled';

/* eslint-disable react/prop-types */

const cropMap = {
  FEATURE: 640,
  MEDIUM: 300,
  THUMB: 150,
};

const Media = ({ contentState, block }) => {
  const entityKey = block.getEntityAt(0);
  const entity = contentState.getEntity(entityKey);
  const type = entity.getType();

  if (type === 'EMBED') {
    const { html } = entity.getData();
    // eslint-disable-next-line react/no-danger
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  }

  if (type === 'IMAGE') {
    const { image, size } = entity.getData();
    const crop = image.crops.find(c => c.width === cropMap[size]);
    return (
      <ImageWrap
        className={cn({
          'Image-FEATURE': size === 'FEATURE',
          'Image-MEDIUM': size === 'MEDIUM',
          'Image-SMALL': size === 'THUMB',
        })}
      >
        <Sizer>
          <button
            onMouseDown={() => {
              contentState.mergeEntityData(entityKey, { size: 'FEATURE' });
            }}
          >
            FEATURE
          </button>
          <button
            onMouseDown={() => {
              contentState.mergeEntityData(entityKey, { size: 'MEDIUM' });
            }}
          >
            MEDIUM
          </button>
          <button
            onMouseDown={() => {
              contentState.mergeEntityData(entityKey, { size: 'THUMB' });
            }}
          >
            SMALL
          </button>
        </Sizer>
        <Image alt="" src={`/uploads/${image.destination}/${crop.fileName}`} />
      </ImageWrap>
    );
  }

  if (type === 'VIDEO') {
    const { video } = entity.getData();
    return <Video video={video} embed />;
  }

  return null;
};

export default Media;
