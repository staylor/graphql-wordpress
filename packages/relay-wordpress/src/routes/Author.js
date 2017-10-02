// @flow
import React from 'react';
import { graphql, createPaginationContainer } from 'react-relay';
import { ContentWrapper, Heading } from 'wp-styled-components';
import Archive from 'containers/Archive';
import AuthorQuery from 'queries/Author';
import type { AuthorProps } from 'relay-wordpress';

const Author = ({ viewer: { author, posts }, relay }: AuthorProps) => (
  <ContentWrapper>
    <Heading>{author.name}</Heading>
    <Archive {...{ posts, relay }} />
  </ContentWrapper>
);

export default createPaginationContainer(
  Author,
  graphql`
    fragment Author_viewer on Viewer {
      author(id: $id) {
        id
        name
      }
      posts(author: $id, after: $cursor, first: $count) @connection(key: "Author_posts") {
        edges {
          node {
            ...Post_post
          }
          cursor
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
