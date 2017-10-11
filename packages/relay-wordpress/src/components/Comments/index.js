// @flow
import React from 'react';
import { Heading } from '@wonderboymusic/graphql-wordpress-components';
import { CommentsWrapper } from '@wonderboymusic/graphql-wordpress-components/lib/Comments';
import Walker from 'components/Comments/Walker';
import type { Connection, Comment } from 'relay-wordpress';

type CommentsProps = {
  post: string,
  comments: Connection<Comment>,
};

export default function Comments({ post, comments = null }: CommentsProps) {
  return (
    <CommentsWrapper>
      <Heading>Comments</Heading>
      <Walker post={post} comments={comments} />
    </CommentsWrapper>
  );
}
