import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Heading } from 'routes/Admin/styled';
import {
  dropzoneClass,
  dropzoneInfoClass,
  progressBarClass,
  progressTextClass,
  statusBarClass,
} from './styled';

export default class Media extends Component {
  state = {};

  createUpload = file => {
    const guid = `${file.name}${file.size}${file.lastModified}`;

    const upload = {
      name: file.name,
      size: file.size,
      type: file.type,
      progress: 0.1,
    };

    const setComplete = id => {
      this.setState(prevState => ({
        [guid]: {
          ...prevState[guid],
          progress: 100,
          id,
        },
      }));
    };

    const formData = new FormData();
    formData.append('uploads', file);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload');
    xhr.onload = function onload() {
      const ids = JSON.parse(this.responseText);
      setComplete(ids[0]);
    };

    xhr.upload.onprogress = event => {
      if (event.lengthComputable) {
        // eslint-disable-next-line
        const complete = (event.loaded / event.total * 100) | 0;
        this.setState(prevState => ({
          [guid]: {
            ...prevState[guid],
            progress: complete,
          },
        }));
      }
    };

    xhr.send(formData);
    this.setState({ [guid]: upload });
  };

  onDrop = e => {
    e.preventDefault();
    for (let i = 0; i < e.dataTransfer.files.length; i += 1) {
      this.createUpload(e.dataTransfer.files[i]);
    }
  };

  onDragEnd = e => {
    const dt = e.dataTransfer;
    if (dt.items) {
      for (let i = 0; i < dt.items.length; i += 1) {
        dt.items.remove(i);
      }
    } else {
      dt.clearData();
    }
  };

  render() {
    return (
      <Fragment>
        <Heading>Upload Media</Heading>
        <div
          className={dropzoneClass}
          onDrop={this.onDrop}
          onDragOver={e => e.preventDefault()}
          onDragEnd={() => false}
        >
          <p className={dropzoneInfoClass}>Drop files Here</p>
        </div>
        <Fragment>
          {Object.keys(this.state).map(key => {
            const upload = this.state[key];
            return (
              <div className={progressBarClass} key={key}>
                <div className={progressTextClass}>
                  {upload.name} {upload.id ? <Link to={`/media/${upload.id}`}>Edit</Link> : null}
                </div>
                <div
                  className={statusBarClass}
                  style={{ width: upload.id ? '3px' : `${upload.progress}%` }}
                />
              </div>
            );
          })}
        </Fragment>
      </Fragment>
    );
  }
}
