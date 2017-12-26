import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { LatestWrap, Title, Paragraph } from './styled';

/* eslint-disable react/prop-types */

function Latest({ data: { loading, posts } }) {
  if (loading && !posts) {
    return null;
  }

  return (
    <LatestWrap>
      {posts.edges.map(({ node }) => (
        <article key={node.id}>
          <Title>
            <Link to={`/post/${node.slug}`}>{node.title}</Link>
          </Title>
          <Paragraph>{node.summary}</Paragraph>
        </article>
      ))}
    </LatestWrap>
  );
}

const composed = graphql(gql`
  query LatestPostsQuery {
    posts(first: 2, status: PUBLISH) {
      edges {
        node {
          id
          slug
          title
          summary
        }
      }
    }
  }
`);

export default composed(Latest);
