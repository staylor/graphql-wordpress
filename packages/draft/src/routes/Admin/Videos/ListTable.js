import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import qs from 'query-string';
import debounce from 'debounce';
import Loading from 'components/Loading';
import Input from 'components/Field/Input';
import Select from 'components/Field/Select';
import { offsetToCursor, bindLoadMore } from 'utils/connection';
import { RowTitle } from 'styles/utils';
import { RowActions, SearchBox } from '../styled';
import ListTable from '../ListTable';

/* eslint-disable react/prop-types */

const PER_PAGE = 10;

@graphql(
  gql`
    query VideosQuery($first: Int, $after: String, $year: Int, $search: String, $tags: String) {
      videos(first: $first, after: $after, year: $year, search: $search, tags: $tags) {
        count
        years
        tags {
          name
          slug
        }
        edges {
          node {
            id
            title
            slug
            publishedAt
            year
            tags {
              name
              slug
            }
          }
          cursor
        }
        pageInfo {
          endCursor
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
      if (queryParams.tag) {
        variables.tags = queryParams.tag;
      }
      if (queryParams.year) {
        variables.year = parseInt(queryParams.year, 10);
      }
      if (params.page) {
        const pageOffset = parseInt(params.page, 10) - 1;
        if (pageOffset > 0) {
          variables.after = offsetToCursor(pageOffset * PER_PAGE - 1);
        }
      }
      return { variables };
    },
  }
)
export default class Videos extends Component {
  updateProp = prop => value => {
    const params = {};
    if (value) {
      params[prop] = value;
    }
    this.props.history.push({
      pathname: '/video',
      search: qs.stringify(params),
    });
  };

  render() {
    const { location, match, data: { loading, videos } } = this.props;

    if (loading && !videos) {
      return <Loading />;
    }

    const queryParams = qs.parse(location.search);

    const columns = [
      {
        label: 'Title',
        render: video => (
          <Fragment>
            <RowTitle>
              <Link to={`/video/${video.id}`}>{video.title}</Link>
            </RowTitle>
            <RowActions>
              <Link to={`/video/${video.id}`}>Edit</Link> |{' '}
              <Link to={`/video/${video.id}`}>Trash</Link> |{' '}
              <a href={`/video/${video.slug}`}>View</a>
            </RowActions>
          </Fragment>
        ),
      },
      {
        label: 'Slug',
        prop: 'slug',
      },
      {
        label: 'Tags',
        render: video =>
          video.tags.map(tag => (
            <Link
              key={tag.slug}
              to={{
                pathname: `/video`,
                search: qs.stringify({ tag: tag.slug }),
              }}
            >
              {tag.name}
            </Link>
          )),
      },
      {
        label: 'Year',
        prop: 'year',
      },
      {
        label: 'Date',
        render: video => {
          const date = new Date(video.publishedAt);
          const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
          return `Published<br />${formattedDate}`;
        },
      },
    ];

    const filters = (
      <Fragment>
        <Select
          placeholder="Select Year"
          value={queryParams.year}
          choices={videos.years}
          onChange={this.updateProp('year')}
        />
        <Select placeholder="Select Tag" value={queryParams.tag} onChange={this.updateProp('tag')}>
          {videos.tags.map(tag => (
            <option key={tag.slug} value={tag.slug}>
              {tag.name}
            </option>
          ))}
        </Select>
        <SearchBox>
          <Input
            value={queryParams.search}
            placeholder="Search Videos"
            onChange={debounce(this.updateProp('search'), 600)}
          />
        </SearchBox>
      </Fragment>
    );

    return (
      <ListTable
        {...{ location, match, columns, filters }}
        data={videos}
        path="/video"
        title="Videos"
      />
    );
  }
}
