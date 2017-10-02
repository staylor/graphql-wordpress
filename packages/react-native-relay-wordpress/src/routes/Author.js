import React from 'react';
import { graphql, createPaginationContainer } from 'react-relay';
import { Text, View } from 'react-native';
import AuthorQuery from '../queries/Author';
import Archive from '../Archive';
import styles from '../styles/archive';

/* eslint-disable react/prop-types */

export default createPaginationContainer(
  ({ viewer: { author, posts }, relay }) => {
    const title = `Author Archive: ${author.name}`;
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
    fragment Author_viewer on Viewer {
      author(id: $id) {
        id
        name
      }
      posts(author: $id, after: $cursor, first: $count) @connection(key: "Author_posts") {
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
    query: AuthorQuery,
  }
);
