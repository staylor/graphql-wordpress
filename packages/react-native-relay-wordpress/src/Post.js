import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { View, Text, StyleSheet } from 'react-native';
import PostLink from './PostLink';
import Content from './Content';
import ResponsiveImage from './ResponsiveImage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  link: {
    fontSize: 20,
    padding: 10,
  },
  excerpt: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 15,
    paddingRight: 40,
  },
});

export default createFragmentContainer(
  ({ post }) => {
    const { content: { data: content }, excerpt } = post;

    return (
      <View style={styles.container}>
        <PostLink post={post} style={styles.link}>
          {post.featuredMedia &&
            post.featuredMedia.imageUrl &&
            <ResponsiveImage featuredMedia={post.featuredMedia} />}
          {excerpt && excerpt.raw
            ? <Text style={styles.excerpt} numberOfLines={3}>
                {excerpt.raw}
              </Text>
            : <Content content={content} />}
        </PostLink>
      </View>
    );
  },
  graphql`
    fragment Post_post on Post {
      id
      title {
        raw
      }
      content {
        data {
          ...Content_content
        }
      }
      excerpt {
        raw
      }
      featuredMedia {
        ... on Image {
          imageUrl: source_url
          ...ResponsiveImage_featuredMedia
        }
      }
      ...PostLink_post
    }
  `
);
