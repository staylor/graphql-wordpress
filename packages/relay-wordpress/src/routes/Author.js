// @flow
import React from 'react';
import { graphql, createPaginationContainer } from 'react-relay';
import { ContentWrapper, Heading } from '@wonderboymusic/graphql-wordpress-components';
import Archive from 'containers/Archive';
import AuthorQuery from 'queries/Author';
import type { RelayPaginationProp } from 'react-relay';
import type { Connection, Post } from 'relay-wordpress';

type AuthorProps = {
  viewer: {|
    author: {
      id: string,
      name: string,
    },
    posts: Connection<Post>,
  |},
  relay: RelayPaginationProp,
};

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
