import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Text, View } from 'react-native';
import DateQuery from 'graphql/Date_Query.graphql';
import Archive from 'components/Archive';
import Error from 'components/Error';
import Loading from 'components/Loading';
import styles from 'styles/archive';

/* eslint-disable react/prop-types */

@graphql(DateQuery, {
  options: ({ match: { params } }) => {
    const variables = ['year', 'month', 'day'].reduce((memo, value) => {
      if (params[value]) {
        memo[value] = parseInt(params[value], 10);
      }
      return memo;
    }, {});

    return {
      variables: {
        ...variables,
        count: 10,
      },
    };
  },
})
export default class Date extends Component {
  render() {
    const { data: { loading, error = null } } = this.props;
    if (error) {
      return <Error error={error} />;
    } else if (loading) {
      return <Loading />;
    }

    const { params } = this.props.match;
    const { viewer: { posts }, variables, fetchMore } = this.props.data;

    const values = [params.month, params.day, params.year].filter(value => value);
    const path = values.join('/');
    const title = `Archives: ${path}`;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Archive {...{ posts, variables, loading, fetchMore }} />
      </View>
    );
  }
}
