import React from 'react';
import { Image, Dimensions } from 'react-native';

/* eslint-disable react/prop-types */

export default ({ node }) => {
  const responsiveWidth = Dimensions.get('window').width;
  const responsiveHeight = responsiveWidth * node.height / node.width;

  return (
    <Image
      style={{
        flex: -1,
        width: responsiveWidth,
        height: responsiveHeight,
      }}
      source={{ uri: node.thumbnailUrl }}
      resizeMode={Image.resizeMode.contain}
    />
  );
};
