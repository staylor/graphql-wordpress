import React from 'react';
import { graphql, createPaginationContainer } from 'react-relay';
import { Text, View } from 'react-native';
import DateQuery from '../queries/Date';
import Archive from '../Archive';
import styles from '../styles/archive';

/* eslint-disable react/prop-types */

export default createPaginationContainer(
  ({ params, viewer: { posts }, relay }) => {
    const values = [params.month, params.day, params.year].filter(value => value);
    const path = values.join('/');
    const title = `Archives: ${path}`;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Archive {...{ posts, relay }} />
      </View>
    );
  },
  graphql`
    fragment Date_viewer on Viewer {
      posts(year: $year, month: $month, day: $day, after: $cursor, first: $count)
        @connection(key: "Date_posts") {
        edges {
          node {
            id
            ...Post_post
          }
          cursor
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  `,
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.viewer && props.viewer.posts;
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        ...fragmentVariables,
        count,
        cursor,
      };
    },
    getFragmentVariables(vars, totalCount) {
      return {
        ...vars,
        count: totalCount,
      };
    },
    query: DateQuery,
  }
);
