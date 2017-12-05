import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import Loading from 'components/Loading';
import { offsetToCursor } from 'utils/connection';
import { RowTitle } from 'styles/utils';
import { RowActions } from '../styled';
import ListTable from '../ListTable';

/* eslint-disable react/prop-types */

const PER_PAGE = 10;

const columns = [
  {
    label: 'Name',
    render: tag => (
      <Fragment>
        <RowTitle>
          <Link to={`/tag/${tag.id}`}>{tag.name}</Link>
        </RowTitle>
        <RowActions>
          <Link to={`/tag/${tag.id}`}>Edit</Link> | <Link to={`/tag/${tag.id}`}>Trash</Link> |{' '}
          <a href={`/tag/${tag.slug}`}>View</a>
        </RowActions>
      </Fragment>
    ),
  },
  {
    label: 'Slug',
    prop: 'slug',
  },
];

@graphql(
  gql`
    query TagsQuery($first: Int, $after: String, $search: String) {
      tags(first: $first, after: $after, search: $search) {
        count
        edges {
          node {
            id
            name
            slug
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
      return { variables };
    },
  }
)
export default class Tags extends Component {
  render() {
    const { location, match, data: { loading, tags } } = this.props;

    if (loading && !tags) {
      return <Loading />;
    }

    return <ListTable {...{ location, match, columns }} data={tags} path="/tag" title="Tags" />;
  }
}
