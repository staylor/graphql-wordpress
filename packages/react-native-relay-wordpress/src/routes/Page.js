import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },

  imageWrap: {
    flex: 1,
    flexDirection: 'row',
  },

  image: {
    flex: 1,
    width: null,
    height: null,
  },
});

export default createFragmentContainer(
  ({ viewer: { page } }) =>
    <View style={styles.container}>
      <Text style={styles.title}>
        {page.title.raw}
      </Text>
      {page.featuredMedia &&
        page.featuredMedia.source_url &&
        <View style={styles.imageWrap}>
          <Image
            style={styles.image}
            source={{ uri: page.featuredMedia.source_url }}
            resizeMode="contain"
          />
        </View>}
    </View>,
  graphql`
    fragment Page_viewer on Viewer {
      page(slug: $slug) {
        date
        title {
          raw
        }
        featuredMedia {
          ... on Image {
            source_url
          }
        }
      }
    }
  `
);
