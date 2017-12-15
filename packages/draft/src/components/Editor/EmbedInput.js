import React, { Component, Fragment } from 'react';

/* eslint-disable react/prop-types */

const cache = {};

export default class EmbedInput extends Component {
  state = {
    embed: '',
  };

  render() {
    return (
      <Fragment>
        Add Embed Block:{' '}
        <input
          type="text"
          onKeyDown={e => {
            if (e.which === 13) {
              fetch(
                `http://localhost:3000/oembed?provider=${encodeURIComponent(
                  'https://www.youtube.com/oembed'
                )}&url=${encodeURIComponent(this.state.embed)}`
              )
                .then(result => result.json())
                .then(response => {
                  cache[this.state.embed] = response.html;

                  this.props.setEmbedData({
                    type: 'EMBED',
                    url: this.state.embed,
                    html: response.html,
                  });
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
