import React from 'react';
import { graphql, createPaginationContainer } from 'react-relay';
import { Text, View } from 'react-native';
import TermQuery from '../queries/Term';
import Archive from '../Archive';
import styles from '../styles/archive';

/* eslint-disable react/prop-types */

export default createPaginationContainer(
  ({ viewer: { term, posts }, relay }) => {
    const title = `${term.taxonomy.labels.singular}: ${term.name}`;
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
    fragment Term_viewer on Viewer {
      term(slug: $slug, taxonomy: $taxonomy) {
        id
        name
        slug
        taxonomy {
          rewrite {
            slug
          }
          labels {
            singular
            plural
          }
        }
      }
      posts(term: $slug, taxonomy: $taxonomy, after: $cursor, first: $count)
        @connection(key: "Term_posts") {
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
    query: TermQuery,
  }
);
