import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import { uploadUrl } from 'utils/media';
import { Modal, Frame, Item, ItemImage, CloseButton } from './styled';

/* eslint-disable react/prop-types */

@graphql(
  gql`
    query ImageModalQuery($cursor: String) {
      uploads(after: $cursor, first: 25) @connection(key: "images") {
        edges {
          node {
            id
            destination
            ... on ImageUpload {
              crops {
                width
                fileName
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `,
  {
    options: {
      fetchPolicy: 'cache-and-network',
    },
  }
)
export default class ImageModal extends Component {
  loadMore = () => {
    const { fetchMore, variables, uploads } = this.props.data;
    return fetchMore({
      variables: {
        ...variables,
        cursor: uploads.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const { edges: previousEdges } = previousResult.uploads;
        const { edges: newEdges } = fetchMoreResult.uploads;
        const newUploads = {
          uploads: {
            ...fetchMoreResult.uploads,
            edges: [...previousEdges, ...newEdges],
          },
        };
        return newUploads;
      },
    });
  };

  frameHandler = frame => {
    if (!frame) {
      return;
    }
    frame.addEventListener('scroll', () => {
      const { uploads, loading } = this.props.data;
      const hasNext = uploads.pageInfo.hasNextPage;
      if (!hasNext || loading) {
        return;
      }
      if (frame.scrollTop + frame.offsetHeight >= frame.scrollHeight) {
        this.loadMore();
      }
    });
  };

  render() {
    const { data: { loading, uploads } } = this.props;

    const portal = document.getElementById('portal');

    if (loading && !uploads) {
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
          {uploads.edges.map(({ node }) => {
            const crop = node.crops.find(c => c.width === 150);
            return (
              <Item
                key={node.id}
                onClick={e => {
                  e.preventDefault();

                  const normalized = {
                    destination: node.destination,
                    crops: [],
                  };
                  node.crops.forEach(({ width, fileName }) => {
                    normalized.crops.push({ width, fileName });
                  });

                  this.props.selectImage({
                    imageId: node.id,
                    image: normalized,
                    size: 'FEATURE',
                  });
                  this.props.onClose(e);
                }}
              >
                <ItemImage alt="" src={uploadUrl(node.destination, crop.fileName)} />
              </Item>
            );
          })}
        </Frame>
      </Modal>,
      portal
    );
  }
}
