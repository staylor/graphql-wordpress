import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import { Modal, Frame, Item, LoadMore, CloseButton } from './styled';

/* eslint-disable react/prop-types */

@graphql(
  gql`
    query ImageModalQuery($cursor: String) {
      uploads(after: $cursor, first: 25) {
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
  render() {
    const { data: { loading, uploads, fetchMore, variables } } = this.props;

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
        <Frame>
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
                <img alt="" src={`/uploads/${node.destination}/${crop.fileName}`} />
              </Item>
            );
          })}
        </Frame>
        {uploads.pageInfo.hasNextPage && (
          <LoadMore
            onClick={e => {
              e.preventDefault();

              fetchMore({
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
            }}
          >
            Load More
          </LoadMore>
        )}
      </Modal>,
      portal
    );
  }
}
