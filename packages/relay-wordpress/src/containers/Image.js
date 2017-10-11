// @flow
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import ResponsiveImage from '@wonderboymusic/graphql-wordpress-components/lib/Image';

type ImageSize = {
  name: string,
  sourceUrl: string,
};

type ImageProps = {
  sourceUrl: string,
  mediaDetails: {
    sizes: Array<ImageSize>,
  },
};

function Image(props: ImageProps) {
  return <ResponsiveImage {...props} />;
}

Image.defaultProps = {
  crop: 'large',
};

export default createFragmentContainer(
  Image,
  graphql`
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
  `
);
