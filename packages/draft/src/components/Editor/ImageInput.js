import React, { Component, Fragment } from 'react';
import { settingsShape } from 'types/PropTypes';

/* eslint-disable react/prop-types */

const cache = {};

export default class ImageInput extends Component {
  state = {
    image: '',
  };

  static contextTypes = {
    settings: settingsShape,
  };

  sendData(data) {
    this.props.setImageData({
      type: 'IMAGE',
      id: this.state.image,
      size: 'FEATURE',
      image: {
        ...data,
      },
    });

    this.setState({ image: '' });
  }

  render() {
    const { settings } = this.context;

    return (
      <Fragment>
        Add Image:{' '}
        <input
          type="text"
          onKeyDown={e => {
            if (e.which === 13) {
              if (cache[this.state.image]) {
                this.sendData(cache[this.state.image]);
                return;
              }

              fetch(`${settings.siteUrl}/preview/media/${this.state.image}`, {
                credentials: 'include',
              })
                .then(result => result.json())
                .then(response => {
                  cache[this.state.image] = response;

                  this.sendData(response);
                });
            }
          }}
          onChange={e => {
            this.setState({ image: e.target.value });
          }}
          value={this.state.image || ''}
        />
      </Fragment>
    );
  }
}
