import React from 'react';
import { Image, Dimensions } from 'react-native';

/* eslint-disable react/prop-types */

export default ({ featuredMedia, style = null }) => {
  if (!featuredMedia || !featuredMedia.sourceUrl) {
    return null;
  }

  const { width: imageWidth, height: imageHeight } = featuredMedia.mediaDetails;
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
      source={{ uri: featuredMedia.sourceUrl }}
      resizeMode={Image.resizeMode.contain}
    />
  );
};
