import React, { Fragment } from 'react';
import { Video } from './styled';

/* eslint-disable react/prop-types, no-bitwise */

export default function VideoInfo({ media }) {
  return (
    <Fragment>
      <Video
        width={media.width}
        height={media.height}
        controls
        src={`/uploads/${media.destination}/${media.fileName}`}
      />
      <strong>Duration:</strong> {~~(media.duration / 60)} mins, {Math.floor(media.duration % 60)}{' '}
      seconds
      <br />
      <strong>Dimensions:</strong> {media.width} x {media.height}
    </Fragment>
  );
}
