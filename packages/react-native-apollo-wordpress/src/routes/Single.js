import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import SingleQuery from 'graphql/Single_Query.graphql';
import ResponsiveImage from 'components/ResponsiveImage';
import Content from 'components/Content';
import { Error, Loading } from '@wonderboymusic/graphql-wordpress-native-components';

/* eslint-disable react/prop-types */

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

@graphql(SingleQuery, {
  options: ({ match: { params: { id } } }) => ({
    variables: {
      id,
    },
  }),
})
export default class Single extends Component {
  render() {
    const { data: { loading, error = null } } = this.props;
    if (error) {
      return <Error error={error} />;
    } else if (loading) {
      return <Loading />;
    }

    const { viewer: { post } } = this.props.data;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{post.title.raw}</Text>
        <ScrollView style={styles.container}>
          {post.featuredMedia &&
            post.featuredMedia.imageUrl && (
              <ResponsiveImage style={styles.image} featuredMedia={post.featuredMedia} />
            )}
          <Content style={styles.content} content={post.content.data} />
          {post.tags && (
            <View style={styles.tags}>
              <Text style={styles.tagLabel}>Tags: </Text>
              {post.tags.map((tag, i) => (
                <Link key={tag.id} to={`/tag/${tag.slug}`}>
                  <Text style={styles.tag}>
                    {tag.name}
                    {i + 1 === post.tags.length ? null : ', '}
                  </Text>
                </Link>
              ))}
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}
