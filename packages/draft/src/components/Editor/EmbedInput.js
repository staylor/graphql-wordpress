import React, { Component, Fragment } from 'react';
import { settingsShape } from 'types/PropTypes';

/* eslint-disable react/prop-types */

const cache = {};

export default class EmbedInput extends Component {
  state = {
    embed: '',
  };

  static contextTypes = {
    settings: settingsShape,
  };

  sendData(html) {
    this.props.setEmbedData({
      type: 'EMBED',
      url: this.state.embed,
      html,
    });

    this.setState({ embed: '' });
  }

  render() {
    const { settings } = this.context;

    return (
      <Fragment>
        Add Embed Block:{' '}
        <input
          type="text"
          onKeyDown={e => {
            if (e.which === 13) {
              if (cache[this.state.embed]) {
                this.sendData(cache[this.state.embed].html);
                return;
              }

              fetch(
                `${settings.siteUrl}/oembed?provider=${encodeURIComponent(
                  'https://www.youtube.com/oembed'
                )}&url=${encodeURIComponent(this.state.embed)}`
              )
                .then(result => result.json())
                .then(response => {
                  cache[this.state.embed] = response;

                  this.sendData(response.html);
                });
            }
          }}
          onChange={e => {
            this.setState({ embed: e.target.value });
          }}
          value={this.state.embed || ''}
        />
      </Fragment>
    );
  }
}
