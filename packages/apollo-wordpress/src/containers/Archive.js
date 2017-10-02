import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArchiveComponent from 'wp-styled-components/lib/Archive';
import Post from 'components/Post';

export default class Archive extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    variables: PropTypes.object,
    fetchMore: PropTypes.func,
    posts: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.object,
          cursor: PropTypes.string,
        })
      ),
    }).isRequired,
  };

  static defaultProps = {
    variables: {},
    fetchMore: null,
  };

  render() {
    const { variables, fetchMore = null, posts: { pageInfo, edges } } = this.props;

    return (
      <ArchiveComponent
        edges={edges}
        component={Post}
        canLoadMore={fetchMore && pageInfo.hasNextPage}
        loadMore={() =>
          fetchMore({
            variables: {
              ...variables,
              cursor: pageInfo.endCursor,
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
              const { edges: previousEdges } = previousResult.viewer.posts;
              const { edges: newEdges } = fetchMoreResult.viewer.posts;
              const newViewer = {
                viewer: {
                  ...fetchMoreResult.viewer,
                  posts: {
                    ...fetchMoreResult.viewer.posts,
                    edges: [...previousEdges, ...newEdges],
                  },
                },
              };
              return newViewer;
            },
          })}
      />
    );
  }
}
