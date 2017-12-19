import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import qs from 'query-string';
import debounce from 'debounce';
import Loading from 'components/Loading';
import Input from 'components/Form/Input';
import Select from 'components/Form/Select';
import { offsetToCursor } from 'utils/connection';
import { RowTitle } from 'styles/utils';
import { Heading, HeaderAdd, RowActions, SearchBox } from '../styled';
import ListTable from '../ListTable';
import { Thumbnail, thumbnailColumnClass, titleColumnClass } from './styled';

/* eslint-disable react/prop-types */

const PER_PAGE = 20;

const renderThumbnail = (media, field) => {
  if (!media[field] || !media[field].length) {
    return null;
  }
  const sorted = [...media[field]];
  sorted.sort((a, b) => a.width - b.width);
  return <Thumbnail src={`/uploads/${media.destination}/${sorted[0].fileName}`} />;
};

const columns = [
  {
    className: thumbnailColumnClass,
    render: media => {
      if (media.type === 'audio') {
        return renderThumbnail(media, 'images');
      }

      if (media.type === 'image') {
        return renderThumbnail(media, 'crops');
      }

      return null;
    },
  },
  {
    className: titleColumnClass,
    label: 'Title',
    render: media => (
      <Fragment>
        <RowTitle>
          <Link to={`/media/${media.id}`}>{media.title || '(no title)'}</Link>
          <br />
          {media.originalName}
        </RowTitle>
        <RowActions>
          <Link to={`/media/${media.id}`}>Edit</Link> | <Link to={`/media/${media.id}`}>Trash</Link>
        </RowActions>
      </Fragment>
    ),
  },
  {
    label: 'Type',
    render: media => (
      <Link to={{ pathname: '/media', search: qs.stringify({ type: media.type }) }}>
        {media.type}
      </Link>
    ),
  },
  {
    label: 'MIME type',
    render: media => (
      <Link
        to={{
          pathname: '/media',
          search: qs.stringify({ mimeType: media.mimeType }),
        }}
      >
        {media.mimeType}
      </Link>
    ),
  },
];

@graphql(
  gql`
    query UploadsQuery(
      $first: Int
      $after: String
      $type: String
      $mimeType: String
      $search: String
    ) {
      uploads(first: $first, after: $after, type: $type, mimeType: $mimeType, search: $search) {
        types
        mimeTypes
        count
        edges {
          node {
            id
            type
            mimeType
            title
            originalName
            destination
            ... on ImageUpload {
              crops {
                fileName
                width
              }
            }
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
    options: ({ match, location }) => {
      const queryParams = qs.parse(location.search);
      const { params } = match;

      const variables = { first: 10 };
      if (queryParams.search) {
        // $TODO: sanitize this
        variables.search = queryParams.search;
      }
      if (queryParams.type) {
        variables.type = queryParams.type;
      }
      if (queryParams.mimeType) {
        variables.mimeType = queryParams.mimeType;
      }
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
  updateProp = prop => value => {
    const params = {};
    if (value) {
      params[prop] = value;
    }
    this.props.history.push({
      pathname: '/media',
      search: qs.stringify(params),
    });
  };

  constructor(props, context) {
    super(props, context);

    this.updateType = this.updateProp('type');
    this.updateMimeType = this.updateProp('mimeType');
    this.updateSearch = debounce(this.updateProp('search'), 600);
  }

  render() {
    const { location, match, data: { loading, uploads } } = this.props;

    if (loading && !uploads) {
      return <Loading />;
    }

    const queryParams = qs.parse(location.search);

    const filters = (
      <Fragment>
        <Select
          key="type"
          placeholder="Select Media Type"
          value={queryParams.type}
          choices={uploads.types.map(type => ({
            value: type,
            label: type.charAt(0).toUpperCase() + type.substring(1),
          }))}
          onChange={this.updateType}
        />
        <Select
          key="mimeType"
          placeholder="Select MIME Type"
          value={queryParams.mimeType}
          choices={uploads.mimeTypes}
          onChange={this.updateMimeType}
        />
      </Fragment>
    );

    return (
      <Fragment>
        <Heading>Media</Heading>
        <HeaderAdd to="/media/upload">Add Media</HeaderAdd>
        <SearchBox>
          <Input
            value={queryParams.search}
            placeholder="Search Media"
            onChange={this.updateSearch}
          />
        </SearchBox>
        <ListTable {...{ location, match, columns, filters }} data={uploads} path="/media" />
      </Fragment>
    );
  }
}
