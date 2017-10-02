import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Image, Dimensions } from 'react-native';

export default createFragmentContainer(
  ({ node }) => {
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
  },
  graphql`
    fragment Embed_node on Embed {
      title
      thumbnailUrl
      html
      width
      height
    }
  `
);
