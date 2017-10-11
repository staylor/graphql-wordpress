// @flow
import React from 'react';
import { graphql, createPaginationContainer } from 'react-relay';
import Helmet from 'react-helmet';
import { ContentWrapper, Heading } from '@wonderboymusic/graphql-wordpress-components';
import DateQuery from 'queries/Date';
import Archive from 'containers/Archive';
import { SITE_URL } from 'utils/constants';
import type { RelayPaginationProp } from 'react-relay';
import type { Connection, Post } from 'relay-wordpress';

type DateProps = {
  viewer: {|
    posts: Connection<Post>,
  |},
  params: {
    month: string | number,
    day: string | number,
    year: string | number,
  },
  relay: RelayPaginationProp,
};

const DateRoute = ({ params, viewer: { posts }, relay }: DateProps) => {
  const values = [params.month, params.day, params.year].filter(value => value);
  const path = values.join('/');
  const title = `Archives: ${path}`;

  return (
    <ContentWrapper>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={`${SITE_URL}/${path}`} />
      </Helmet>
      <Heading>{title}</Heading>
      <Archive {...{ posts, relay }} />
    </ContentWrapper>
  );
};

export default createPaginationContainer(
  DateRoute,
  graphql`
    fragment Date_viewer on Viewer {
      posts(year: $year, month: $month, day: $day, after: $cursor, first: $count)
        @connection(key: "Date_posts") {
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
    query: DateQuery,
  }
);
