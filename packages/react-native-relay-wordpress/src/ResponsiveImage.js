import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Image, Dimensions } from 'react-native';

export default createFragmentContainer(
  ({ featuredMedia, style = null }) => {
    if (!featuredMedia || !featuredMedia.source_url) {
      return null;
    }

    const { width: imageWidth, height: imageHeight } = featuredMedia.media_details;
    const responsiveWidth = Dimensions.get('window').width;
    const responsiveHeight = responsiveWidth * imageHeight / imageWidth;

    return (
      <Image
        style={[
          {
            flex: -1,
            width: responsiveWidth,
            height: responsiveHeight,
          },
          style,
        ]}
        source={{ uri: featuredMedia.source_url }}
        resizeMode={Image.resizeMode.contain}
      />
    );
  },
  graphql`
    fragment ResponsiveImage_featuredMedia on Image {
      source_url
      media_details {
        width
        height
      }
    }
  `
);
