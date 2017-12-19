import React, { Fragment } from 'react';
import { CroppedImage } from './styled';

/* eslint-disable react/prop-types */

export default function ImageInfo({ media }) {
  let src;
  const imageCrop = media.crops.find(c => c.width === 300);
  if (imageCrop) {
    src = `/uploads/${media.destination}/${imageCrop.fileName}`;
  } else {
    src = `/uploads/${media.destination}/${media.fileName}`;
  }

  return (
    <Fragment>
      <CroppedImage src={src} />
      <strong>Available crops:</strong>
      <br />
      <a href={`/uploads/${media.destination}/${media.fileName}`}>
        {media.width} x {media.height}
      </a>{' '}
      - Original
      {media.crops.map(crop => (
        <Fragment key={crop.fileName}>
          <br />
          <a href={`/uploads/${media.destination}/${crop.fileName}`}>
            {crop.width} x {crop.height}
          </a>
        </Fragment>
      ))}
    </Fragment>
  );
}
