import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import Loading from 'components/Loading';
import { offsetToCursor } from 'utils/connection';
import { RowTitle } from 'styles/utils';
import { Heading, HeaderAdd, RowActions } from '../styled';
import ListTable from '../ListTable';
import { Thumbnail, thumbnailColumnClass } from './styled';

/* eslint-disable react/prop-types */

const PER_PAGE = 20;

const columns = [
  {
    className: thumbnailColumnClass,
    render: media => {
      if (!media.images || !media.images.length) {
        return null;
      }

      const sorted = [...media.images];
      sorted.sort((a, b) => a.width - b.width);
      return <Thumbnail src={`/uploads/${media.destination}/${sorted[0].fileName}`} />;
    },
  },
  {
    label: 'Title',
    render: media => (
      <Fragment>
        <RowTitle>
          <Link to={`/media/${media.id}`}>{media.title}</Link>
          <br />
          {media.originalName}
        </RowTitle>
        <RowActions>
          <Link to={`/media/${media.id}`}>Edit</Link> | <Link to={`/media/${media.id}`}>Trash</Link>
        </RowActions>
      </Fragment>
    ),
  },
];

@graphql(
  gql`
    query UploadsQuery($first: Int, $after: String, $search: String) {
      uploads(first: $first, after: $after, search: $search) {
        count
        edges {
          node {
            id
            title
            originalName
            destination
            ... on AudioUpload {
              images {
                fileName
                width
              }
            }
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  `,
  {
    options: ({ match }) => {
      const { params } = match;

      const variables = { first: 10 };
      if (params.page) {
        const pageOffset = parseInt(params.page, 10) - 1;
        if (pageOffset > 0) {
          variables.after = offsetToCursor(pageOffset * PER_PAGE - 1);
        }
      }
      // This ensures that the table is up to date when uploads are mutated.
      // The alternative is to specify refetchQueries on all Post mutations.
      return { variables, fetchPolicy: 'cache-and-network' };
    },
  }
)
export default class Media extends Component {
  render() {
    const { location, match, data: { loading, uploads } } = this.props;

    if (loading && !uploads) {
      return <Loading />;
    }

    return (
      <Fragment>
        <Heading>Media</Heading>
        <HeaderAdd to="/media/upload">Add Media</HeaderAdd>
        <ListTable {...{ location, match, columns }} data={uploads} path="/media" />
      </Fragment>
    );
  }
}
