// @flow
import React, { Component } from 'react';
import styled from 'react-emotion';

const ResponsiveImage = styled.img`
  display: block;
  height: auto;
  margin: 0 0 10px;
  max-width: 100%;
`;

type ImageProps = {
  crop: string,
  image: {
    sourceUrl: string,
    mediaDetails: {
      sizes: Array<Object>,
    },
  },
};

class Image extends Component {
  props: ImageProps;

  static defaultProps = {
    crop: 'large',
  };

  getCrop(sizes: Array<Object>) {
    let chosen;
    const choices = [this.props.crop, this.constructor.defaultProps.crop, 'full'];

    for (let i = 0; i < choices.length; i += 1) {
      chosen = sizes.find(size => size.name === choices[i]);
      if (chosen) {
        return chosen;
      }
    }

    return null;
  }

  render() {
    const { sourceUrl, mediaDetails: { sizes } } = this.props.image;

    if (!sourceUrl) {
      return null;
    }

    const chosen = this.getCrop(sizes);
    if (!chosen) {
      return null;
    }

    return (
      <figure>
        <ResponsiveImage alt="" src={chosen.sourceUrl} />
      </figure>
    );
  }
}

export default Image;
