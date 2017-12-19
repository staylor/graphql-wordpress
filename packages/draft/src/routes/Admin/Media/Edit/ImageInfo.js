import React, { Fragment } from 'react';
import filesize from 'filesize';

/* eslint-disable react/prop-types */

export default function ImageInfo({ media }) {
  return (
    <Fragment>
      <p>
        <strong>File Type:</strong> {media.mimeType}
      </p>
      <strong>Available crops:</strong>
      <br />
      <a href={`/uploads/${media.destination}/${media.fileName}`}>
        {media.width} x {media.height}
      </a>{' '}
      - {filesize(media.fileSize)} - Original
      {media.crops.map(crop => (
        <Fragment key={crop.fileName}>
          <br />
          <a href={`/uploads/${media.destination}/${crop.fileName}`}>
            {crop.width} x {crop.height}
          </a>{' '}
          - {filesize(crop.fileSize)}
        </Fragment>
      ))}
    </Fragment>
  );
}
