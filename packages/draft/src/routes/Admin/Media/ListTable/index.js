import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import qs from 'query-string';
import debounce from 'debounce';
import Loading from 'components/Loading';
import Input from 'components/Form/Input';
import Select from 'components/Form/Select';
import ListTable from 'components/ListTable';
import { RowActions, RowTitle, SearchBox } from 'components/ListTable/styled';
import { offsetToCursor } from 'utils/connection';
import { uploadUrl } from 'utils/media';
import { Heading, HeaderAdd } from 'routes/Admin/styled';
import { thumbnailClass, thumbnailColumnClass, titleColumnClass } from './styled';
import UploadsQuery from './UploadsQuery.graphql';

/* eslint-disable react/prop-types */

const PER_PAGE = 20;

const renderThumbnail = (media, field) => {
  if (!media[field] || !media[field].length) {
    return null;
  }
  const sorted = [...media[field]];
  sorted.sort((a, b) => a.width - b.width);
  return (
    <img className={thumbnailClass} src={uploadUrl(media.destination, sorted[0].fileName)} alt="" />
  );
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
    render: (media, { mutate, variables }) => {
      const onClick = e => {
        e.preventDefault();

        mutate({
          refetchQueries: [{ query: UploadsQuery, variables }],
          variables: {
            ids: [media.id],
          },
        });
      };

      return (
        <Fragment>
          <RowTitle>
            <Link to={`/media/${media.id}`}>{media.title || '(no title)'}</Link>
            <br />
            <span>{media.originalName}</span>
          </RowTitle>
          <RowActions>
            <Link to={`/media/${media.id}`}>Edit</Link> |{' '}
            <a className="delete" onClick={onClick} href={`/media/${media.id}`}>
              Delete
            </a>
          </RowActions>
        </Fragment>
      );
    },
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

@compose(
  graphql(UploadsQuery, {
    options: ({ match, location }) => {
      const queryParams = qs.parse(location.search);
      const { params } = match;

      const variables = { first: PER_PAGE };
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
  }),
  graphql(gql`
    mutation DeleteMediaMutation($ids: [ObjID]!) {
      removeMediaUpload(ids: $ids)
    }
  `)
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
    const { location, match, mutate, data: { variables, loading, uploads } } = this.props;

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
        <ListTable
          {...{
            location,
            match,
            columns,
            filters,
            mutate,
            variables,
            query: UploadsQuery,
          }}
          data={uploads}
          path="/media"
        />
      </Fragment>
    );
  }
}
