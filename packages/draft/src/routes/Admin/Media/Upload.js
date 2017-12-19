import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled from 'react-emotion';
import { Heading } from '../styled';

const Dropzone = styled.div`
  border: 2px dashed ${p => p.theme.colors.detail};
  border-radius: 3px;
  display: block;
  height: 300px;
  margin: 20px 0;
  width: 600px;

  &:hover {
    border-color: black;
  }
`;

export default class Media extends Component {
  onDrop = e => {
    e.preventDefault();
    // eslint-disable-next-line
    const progress = ReactDOM.findDOMNode(this.progress);
    const formData = new FormData();
    for (let i = 0; i < e.dataTransfer.files.length; i += 1) {
      formData.append('uploads', e.dataTransfer.files[i]);
    }

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload');
    xhr.onload = () => {
      progress.innerHTML = 100;
    };

    xhr.upload.onprogress = event => {
      if (event.lengthComputable) {
        // eslint-disable-next-line
        const complete = (event.loaded / event.total * 100) | 0;
        progress.innerHTML = complete;
      }
    };

    xhr.send(formData);
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
        <Heading>Media</Heading>
        <div
          ref={progress => {
            this.progress = progress;
          }}
        />
        <Dropzone
          onDrop={this.onDrop}
          onDragOver={e => e.preventDefault()}
          onDragEnd={() => false}
        />
      </Fragment>
    );
  }
}
