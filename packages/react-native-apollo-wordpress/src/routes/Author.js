import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Text, View } from 'react-native';
import AuthorQuery from 'graphql/Author_Query.graphql';
import Archive from 'components/Archive';
import Error from 'components/Error';
import Loading from 'components/Loading';
import styles from 'styles/archive';

/* eslint-disable react/prop-types */

@graphql(AuthorQuery, {
  options: ({ match: { params: { id } } }) => ({
    variables: {
      id,
      count: 10,
    },
  }),
})
export default class Author extends Component {
  render() {
    const { data: { loading, error } } = this.props;
    if (error) {
      return <Error />;
    } else if (loading) {
      return <Loading />;
    }

    const { viewer: { author, posts }, variables, fetchMore } = this.props.data;

    const title = `Author Archive: ${author.name}`;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Archive {...{ posts, variables, loading, fetchMore }} />
      </View>
    );
  }
}
