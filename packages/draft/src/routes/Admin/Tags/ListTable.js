import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import qs from 'query-string';
import Loading from 'components/Loading';
import { offsetToCursor } from 'utils/connection';
import { RowTitle } from 'styles/utils';
import { Heading, HeaderAdd, RowActions } from '../styled';
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
  {
    label: 'Taxonomy',
    render: tag =>
      tag.taxonomy.map((t, i) => (
        <Fragment key={tag.id}>
          <Link
            to={{
              pathname: '/tag',
              search: qs.stringify({ taxonomy: t.toLowerCase() }),
            }}
          >
            {t.charAt(0) + t.slice(1).toLowerCase()}
          </Link>
          {i > 0 ? ' ' : null}
        </Fragment>
      )),
  },
];

@graphql(
  gql`
    query TagsQuery($first: Int, $after: String, $taxonomy: String, $search: String) {
      tags(first: $first, after: $after, taxonomy: $taxonomy, search: $search) {
        count
        edges {
          node {
            id
            name
            slug
            taxonomy
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
      if (params.page) {
        const pageOffset = parseInt(params.page, 10) - 1;
        if (pageOffset > 0) {
          variables.after = offsetToCursor(pageOffset * PER_PAGE - 1);
        }
      }
      if (queryParams.taxonomy) {
        variables.taxonomy = queryParams.taxonomy.toUpperCase();
      }
      // This ensures that the table is up to date when tags are mutated.
      // The alternative is to specify refetchQueries on all Tag mutations.
      return { variables, fetchPolicy: 'cache-and-network' };
    },
  }
)
export default class Tags extends Component {
  render() {
    const { location, match, data: { loading, tags } } = this.props;

    if (loading && !tags) {
      return <Loading />;
    }

    return (
      <Fragment>
        <Heading>Tags</Heading>
        <HeaderAdd to="/tag/add">Add Tag</HeaderAdd>
        <ListTable {...{ location, match, columns }} data={tags} path="/tag" />
      </Fragment>
    );
  }
}
