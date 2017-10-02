// @flow
import React from 'react';
import { Heading } from 'wp-styled-components';
import { CommentsWrapper } from 'wp-styled-components/lib/Comments';
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
