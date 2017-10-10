// @flow
import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Link } from 'found';
import { dateRegex } from 'utils/regex';
import type { PostLinkProps } from 'relay-wordpress';

const PostLink = ({ children, post: { id, date, title } }: PostLinkProps) => {
  const [, year, month, day] = dateRegex.exec(date);
  const url = `/${year}/${month}/${day}/${id}`;
  if (children) {
    return <Link to={url}>{children}</Link>;
  }
  return <Link to={url}>{title.raw}</Link>;
};

export default createFragmentContainer(
  PostLink,
  graphql`
    fragment PostLink_post on Post {
      id
      date
      title {
        raw
      }
    }
  `
);
