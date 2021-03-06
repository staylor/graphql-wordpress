import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Text, View } from 'react-native';
import TermQuery from 'graphql/Term_Query.graphql';
import Archive from 'components/Archive';
import Error from 'components/Error';
import Loading from 'components/Loading';
import styles from 'styles/archive';

/* eslint-disable react/prop-types */

@graphql(TermQuery, {
  options: ({ match: { params: { slug, tag = null } } }) => {
    let taxonomy = 'category';
    if (tag) {
      taxonomy = 'tag';
    }
    return {
      variables: {
        slug,
        taxonomy,
        count: 10,
      },
    };
  },
})
export default class Term extends Component {
  render() {
    const { data: { loading, error = null } } = this.props;
    if (error) {
      return <Error error={error} />;
    } else if (loading) {
      return <Loading />;
    }

    const { viewer: { term, posts }, variables, fetchMore } = this.props.data;

    const title = `${term.taxonomy.labels.singular}: ${term.name}`;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Archive {...{ posts, variables, loading, fetchMore }} />
      </View>
    );
  }
}
