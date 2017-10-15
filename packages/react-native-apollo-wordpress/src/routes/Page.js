import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { StyleSheet, Text, View, Image } from 'react-native';
import PageQuery from 'graphql/Page_Query.graphql';
import { Error, Loading } from '@wonderboymusic/graphql-wordpress-native-components';

/* eslint-disable react/prop-types */

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

@graphql(PageQuery, {
  options: ({ match: { params: { slug } } }) => ({
    variables: {
      slug,
    },
  }),
})
export default class Page extends Component {
  render() {
    const { data: { loading, error = null } } = this.props;
    if (error) {
      return <Error error={error} />;
    } else if (loading) {
      return <Loading />;
    }

    const { viewer: { page } } = this.props.data;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{page.title.raw}</Text>
        {page.featuredMedia &&
          page.featuredMedia.source_url && (
            <View style={styles.imageWrap}>
              <Image
                style={styles.image}
                source={{ uri: page.featuredMedia.sourceUrl }}
                resizeMode="contain"
              />
            </View>
          )}
      </View>
    );
  }
}
