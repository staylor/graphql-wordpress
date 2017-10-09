// @flow
import React from 'react';
import { Heading } from '@wonderboymusic/graphql-wordpress-components';
import { CommentsWrapper } from '@wonderboymusic/graphql-wordpress-components/lib/Comments';
import Walker from 'components/Comments/Walker';
import type { CommentsProps } from 'relay-wordpress';

export default function Comments({ post, comments = null }: CommentsProps) {
  return (
    <CommentsWrapper>
      <Heading>Comments</Heading>
      <Walker post={post} comments={comments} />
    </CommentsWrapper>
  );
}
