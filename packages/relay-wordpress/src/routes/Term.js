// @flow
import React from 'react';
import { graphql, createPaginationContainer } from 'react-relay';
import Helmet from 'react-helmet';
import { ContentWrapper, Heading, Error } from 'wp-styled-components';
import TermQuery from 'queries/Term';
import Archive from 'containers/Archive';
import { SITE_URL } from 'utils/constants';
import type { TermProps } from 'relay-wordpress';

const Term = ({ viewer: { term, posts }, relay }: TermProps) => {
  if (!term) {
    return <Error />;
  }

  const title = `${term.taxonomy.labels.singular}: ${term.name}`;
  const url = `${SITE_URL}/${term.taxonomy.rewrite.slug}/${term.slug}`;

  return (
    <ContentWrapper>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
      </Helmet>
      <Heading>{title}</Heading>
      <Archive {...{ posts, relay }} />
    </ContentWrapper>
  );
};

export default createPaginationContainer(
  Term,
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
    query: TermQuery,
  }
);
