import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import ResponsiveImage from '../ResponsiveImage';
import Content from '../Content';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },

  image: {
    marginBottom: 20,
  },

  content: {},

  tags: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },

  tagLabel: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  tag: {
    flex: 1,
    color: '#e50082',
    fontSize: 15,
  },
});

export default createFragmentContainer(
  ({ viewer: { post } }) =>
    <View style={styles.container}>
      <Text style={styles.title}>
        {post.title.raw}
      </Text>
      <ScrollView style={styles.container}>
        {post.featuredMedia &&
          post.featuredMedia.imageUrl &&
          <ResponsiveImage style={styles.image} featuredMedia={post.featuredMedia} />}
        <Content style={styles.content} content={post.content.data} />
        {post.tags &&
          <View style={styles.tags}>
            <Text style={styles.tagLabel}>Tags: </Text>
            {post.tags.map((tag, i) =>
              <Link key={tag.id} to={`/tag/${tag.slug}`}>
                <Text style={styles.tag}>
                  {tag.name}
                  {i + 1 === post.tags.length ? null : ', '}
                </Text>
              </Link>
            )}
          </View>}
      </ScrollView>
    </View>,
  graphql`
    fragment Single_viewer on Viewer {
      post(id: $id) {
        id
        date
        title {
          raw
        }
        featuredMedia {
          ... on Image {
            imageUrl: source_url
            ...ResponsiveImage_featuredMedia
          }
        }
        content {
          data {
            ...Content_content
          }
        }
        tags {
          id
          name
          slug
        }
      }
    }
  `
);
