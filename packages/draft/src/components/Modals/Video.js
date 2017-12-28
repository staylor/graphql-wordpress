import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import Video from 'components/Videos/Video';
import { Modal, Frame, ItemTitle, ItemImage, VideoItem, CloseButton } from './styled';

/* eslint-disable react/prop-types */

@graphql(
  gql`
    query VideoModalQuery($cursor: String, $first: Int) {
      videos(after: $cursor, first: $first) @connection(key: "videos") {
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
  `,
  {
    options: {
      variables: { first: 50 },
    },
  }
)
export default class VideoModal extends Component {
  loadMore = () => {
    const { fetchMore, variables, videos } = this.props.data;
    return fetchMore({
      variables: {
        ...variables,
        first: 25,
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
  };

  frameHandler = frame => {
    if (!frame) {
      return;
    }
    frame.addEventListener('scroll', () => {
      const hasNext = this.props.data.videos.pageInfo.hasNextPage;
      if (!hasNext || this.props.data.loading) {
        return;
      }
      if (frame.scrollTop + frame.offsetHeight >= frame.scrollHeight) {
        this.loadMore();
      }
    });
  };

  render() {
    const { data: { loading, videos } } = this.props;

    const portal = document.getElementById('portal');

    if (loading && !videos) {
      return ReactDOM.createPortal(
        <Modal>
          <Loading />
        </Modal>,
        portal
      );
    }

    return ReactDOM.createPortal(
      <Modal>
        <CloseButton className="dashicons dashicons-no" onClick={this.props.onClose} />
        <Frame innerRef={this.frameHandler}>
          {videos.edges.map(({ node }) => {
            const crop = node.thumbnails.find(c => c.width === 120);
            return (
              <VideoItem
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
                    videoId: node.id,
                    video: normalized,
                  });
                  this.props.onClose(e);
                }}
              >
                <ItemImage alt="" src={crop.url} />
                <ItemTitle>{node.title}</ItemTitle>
              </VideoItem>
            );
          })}
        </Frame>
      </Modal>,
      document.getElementById('portal')
    );
  }
}
