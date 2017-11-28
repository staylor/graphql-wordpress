import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Video from './Video';
import { Wrapper, LoadMore } from './styled';

/* eslint-disable react/prop-types */

@graphql(
  gql`
    query TestQuery($first: Int, $after: String) {
      videos(first: $first, after: $after) {
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
    options: {
      variables: { first: 10 },
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
          ...previousResult,
          videos: {
            ...previousResult.videos,
            ...fetchMoreResult,
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
      return null;
    }

    return (
      <Wrapper>
        {videos.edges.map(edge => <Video key={edge.node.id} video={edge.node} />)}
        {videos.pageInfo.hasNextPage && <LoadMore onClick={this.loadMore}>MORE</LoadMore>}
      </Wrapper>
    );
  }
}
