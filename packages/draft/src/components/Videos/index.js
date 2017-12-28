import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import { LoadMore } from 'styles/utils';
import Video from './Video';

/* eslint-disable react/prop-types */

@graphql(
  gql`
    query VideosQuery($first: Int, $after: String, $year: Int) {
      videos(first: $first, after: $after, year: $year)
        @connection(key: "videos", filter: ["year"]) {
        edges {
          node {
            id
            ...Video_video
          }
          cursor
        }
        pageInfo {
          hasNextPage
        }
      }
    }
    ${Video.fragments.video}
  `,
  {
    options: ({ match: { params } }) => {
      const variables = { first: 10 };
      if (params.year) {
        variables.year = parseInt(params.year, 10);
      }
      return { variables };
    },
  }
)
export default class Videos extends Component {
  loadMore = e => {
    e.preventDefault();

    const { fetchMore, variables, videos } = this.props.data;

    return fetchMore({
      variables: {
        ...variables,
        after: videos.edges[videos.edges.length - 1].cursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const mergedResult = {
          ...fetchMoreResult,
          videos: {
            ...fetchMoreResult.videos,
            edges: previousResult.videos.edges.concat(fetchMoreResult.videos.edges),
          },
        };

        return mergedResult;
      },
    });
  };

  render() {
    const { data: { loading, videos } } = this.props;

    if (loading && !videos) {
      return <Loading />;
    }

    return (
      <Fragment>
        {videos.edges.map(edge => <Video key={edge.node.id} video={edge.node} />)}
        {videos.pageInfo.hasNextPage && <LoadMore onClick={this.loadMore}>MORE</LoadMore>}
      </Fragment>
    );
  }
}
