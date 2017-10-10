// @flow
import * as React from 'react';
import { graphql } from 'react-relay';
import ResponsiveImage from '@wonderboymusic/graphql-wordpress-components/lib/Image';
import FragmentContainer from 'decorators/FragmentContainer';
import type { ImageProps } from 'relay-wordpress';

@FragmentContainer(graphql`
  fragment Image_image on Media {
    ... on Image {
      sourceUrl
      mediaDetails {
        sizes {
          name
          sourceUrl
        }
      }
    }
  }
`)
export default class Image extends React.Component<ImageProps> {
  static defaultProps = {
    crop: 'large',
  };

  render() {
    return <ResponsiveImage {...this.props} />;
  }
}
