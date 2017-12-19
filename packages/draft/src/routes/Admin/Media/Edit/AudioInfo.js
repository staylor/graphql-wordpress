import React, { Fragment } from 'react';
import { CroppedImage, Audio } from './styled';

/* eslint-disable react/prop-types */

export default function AudioInfo({ media }) {
  const AudioPlayer = <Audio controls src={`/uploads/${media.destination}/${media.fileName}`} />;

  if (media.images.length === 0) {
    return AudioPlayer;
  }

  const crops = [...media.images];
  crops.sort((a, b) => a.width - b.width);
  const first = crops.shift();
  const src = `/uploads/${media.destination}/${first.fileName}`;
  const mediaInfo = (
    <Fragment>
      {AudioPlayer}
      <CroppedImage src={src} />
      <strong>
        Showing:<br />
      </strong>{' '}
      {first.width} x {first.height}
    </Fragment>
  );
  return crops.length > 0 ? (
    <Fragment>
      {mediaInfo}
      <br />
      <strong>Other available images:</strong>
      {crops.map(crop => (
        <Fragment key={crop.fileName}>
          <br />
          <a href={`/uploads/${media.destination}/${crop.fileName}`}>
            {crop.width} x {crop.height}
          </a>
        </Fragment>
      ))}
    </Fragment>
  ) : (
    mediaInfo
  );
}
