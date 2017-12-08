import React, { Component } from 'react';
import Loading from 'components/Loading';
import { findWithRegex } from '../utils';

/* eslint-disable react/prop-types,react/no-danger */

const YOUTUBE_REGEX = /https?:\/\/((m|www)\.)?youtube\.com\/watch.+$/g;

const cache = {};

class YouTubeSpan extends Component {
  state = {
    embed: null,
  };

  fetchYouTube = decoratedUrl => {
    if (cache[decoratedUrl]) {
      this.setState({ embed: cache[decoratedUrl] });
      return;
    }

    fetch(
      `http://localhost:3000/oembed?provider=${encodeURIComponent(
        'https://www.youtube.com/oembed'
      )}&url=${encodeURIComponent(decoratedUrl)}`
    )
      .then(result => result.json())
      .then(response => {
        cache[decoratedUrl] = response.html;
        this.setState({ embed: response.html });
      });
  };

  // shouldComponentUpdate(nextProps) {
  //   console.log(nextProps.decoratedText, this.props.decoratedText);
  //   return nextProps.decoratedText !== this.props.decoratedText;
  // }

  componentDidMount() {
    this.fetchYouTube(this.props.decoratedText);
  }

  render() {
    if (this.state.embed) {
      return (
        <span
          data-offset-key={this.props.offsetKey}
          dangerouslySetInnerHTML={{ __html: this.state.embed }}
        />
      );
    }

    return <Loading compact />;
  }
}

function youtubeStrategy(contentBlock, callback) {
  findWithRegex(YOUTUBE_REGEX, contentBlock, callback);
}

export default [
  {
    strategy: youtubeStrategy,
    component: YouTubeSpan,
  },
];
