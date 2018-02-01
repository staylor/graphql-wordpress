import React, { Fragment } from 'react';
import filesize from 'filesize';
import { uploadUrl } from 'utils/media';
import { croppedClass } from './styled';

/* eslint-disable react/prop-types */

export default function AudioInfo({ media }) {
  const crops = [...media.images];
  crops.sort((a, b) => a.width - b.width);
  const first = crops.shift();
  const src = uploadUrl(media.destination, first.fileName);
  const cropInfo = (
    <Fragment>
      <img className={croppedClass} src={src} alt="" />
      <strong>
        Showing:<br />
      </strong>{' '}
      {first.width} x {first.height}
    </Fragment>
  );

  const mediaInfo = (
    <Fragment>
      <strong>File Size:</strong> {filesize(media.fileSize)}
      <br />
      <strong>File Type:</strong> {media.mimeType}
      {cropInfo}
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
          <a href={uploadUrl(media.destination, crop.fileName)}>
            {crop.width} x {crop.height}
          </a>{' '}
        </Fragment>
      ))}
    </Fragment>
  ) : (
    mediaInfo
  );
}
