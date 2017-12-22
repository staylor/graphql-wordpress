import React, { Component, Fragment } from 'react';
import { settingsShape } from 'types/PropTypes';

/* eslint-disable react/prop-types */

const cache = {};

export default class VideoInput extends Component {
  state = {
    video: '',
  };

  static contextTypes = {
    settings: settingsShape,
  };

  sendData(data) {
    this.props.setVideoData({
      type: 'VIDEO',
      id: this.state.video,
      video: {
        ...data,
      },
    });

    this.setState({ video: '' });
  }

  render() {
    const { settings } = this.context;

    return (
      <Fragment>
        Add Video:{' '}
        <input
          type="text"
          onKeyDown={e => {
            if (e.which === 13) {
              if (cache[this.state.video]) {
                this.sendData(cache[this.state.video]);
                return;
              }

              fetch(`${settings.siteUrl}/preview/video/${this.state.video}`, {
                credentials: 'include',
              })
                .then(result => result.json())
                .then(response => {
                  cache[this.state.video] = response;

                  this.sendData(response);
                });
            }
          }}
          onChange={e => {
            this.setState({ video: e.target.value });
          }}
          value={this.state.video || ''}
        />
      </Fragment>
    );
  }
}
