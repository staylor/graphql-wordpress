// @flow
import * as React from 'react';
import ArchiveComponent from '@wonderboymusic/graphql-wordpress-components/lib/Archive';
import Post from 'components/Post';
import type { RelayPaginationProp } from 'react-relay';
import type { Connection, Post as PostType } from 'relay-wordpress';

type ArchiveProps = {
  posts: Connection<PostType>,
  relay?: RelayPaginationProp,
};

export default function Archive(props: ArchiveProps) {
  const { relay, posts } = props;
  return (
    <ArchiveComponent
      edges={posts.edges}
      component={Post}
      canLoadMore={relay && relay.hasMore()}
      loadMore={() => {
        if (!relay || relay.isLoading()) {
          return;
        }

        relay.loadMore(10, e => {
          if (e) {
            // eslint-disable-next-line no-console
            console.log(e);
          }
        });
      }}
    />
  );
}

Archive.defaultProps = {
  relay: null,
};
