import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Link } from 'found';
import { dateRegex } from 'utils/regex';

export default createFragmentContainer(
  ({ children, post: { id, date, title } }) => {
    const [, year, month, day] = dateRegex.exec(date);
    const url = `/${year}/${month}/${day}/${id}`;
    if (children) {
      return <Link to={url}>{children}</Link>;
    }
    return <Link to={url}>{title.raw}</Link>;
  },
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
