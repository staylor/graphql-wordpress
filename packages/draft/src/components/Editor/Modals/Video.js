import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import Video from 'components/Videos/Video';
import { Modal, Frame, Item, LoadMore, CloseButton } from './styled';

/* eslint-disable react/prop-types */

@graphql(gql`
  query VideoModalQuery($cursor: String) {
    videos(after: $cursor, first: 25) {
      edges {
        node {
          id
          ...Video_video
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  ${Video.fragments.video}
`)
export default class VideoModal extends Component {
  render() {
    const { data: { loading, videos, fetchMore, variables } } = this.props;

    if (loading && !videos) {
      return <Loading />;
    }

    return ReactDOM.createPortal(
      <Modal>
        <CloseButton className="dashicons dashicons-no" onClick={this.props.onClose} />
        <Frame>
          {videos.edges.map(({ node }) => {
            const crop = node.thumbnails.find(c => c.width === 120);
            return (
              <Item
                key={node.id}
                onClick={e => {
                  e.preventDefault();

                  const normalized = {
                    dataId: node.dataId,
                    title: node.title,
                    slug: node.slug,
                    thumbnails: [],
                  };
                  node.thumbnails.forEach(({ width, height, url }) => {
                    normalized.thumbnails.push({ width, height, url });
                  });

                  this.props.selectVideo({
                    id: node.id,
                    video: normalized,
                  });
                  this.props.onClose(e);
                }}
              >
                <img alt="" src={crop.url} />
              </Item>
            );
          })}
        </Frame>
        {videos.pageInfo.hasNextPage && (
          <LoadMore
            onClick={e => {
              e.preventDefault();

              fetchMore({
                variables: {
                  ...variables,
                  cursor: videos.pageInfo.endCursor,
                },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                  const { edges: previousEdges } = previousResult.videos;
                  const { edges: newEdges } = fetchMoreResult.videos;
                  const newVideos = {
                    videos: {
                      ...fetchMoreResult.videos,
                      edges: [...previousEdges, ...newEdges],
                    },
                  };
                  return newVideos;
                },
              });
            }}
          >
            Load More
          </LoadMore>
        )}
      </Modal>,
      document.getElementById('portal')
    );
  }
}
