import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import Loading from 'components/Loading';
import { offsetToCursor } from 'utils/connection';
import { RowTitle } from 'styles/utils';
import { Heading, HeaderAdd, RowActions } from 'routes/Admin/styled';
import ListTable from 'routes/Admin/ListTable';

/* eslint-disable react/prop-types */

const PER_PAGE = 10;

const columns = [
  {
    label: 'Name',
    render: taxonomy => (
      <Fragment>
        <RowTitle>
          <Link to={`/taxonomy/${taxonomy.id}`}>{taxonomy.name}</Link>
        </RowTitle>
        <RowActions>
          <Link to={`/taxonomy/${taxonomy.id}`}>Edit</Link> |{' '}
          <Link to={`/taxonomy/${taxonomy.id}`}>Trash</Link> |{' '}
          <a href={`/taxonomy/${taxonomy.slug}`}>View</a>
        </RowActions>
      </Fragment>
    ),
  },
  {
    label: 'Slug',
    prop: 'slug',
  },
  {
    label: 'Description',
    prop: 'description',
    type: 'textarea',
    editable: true,
  },
];

@graphql(
  gql`
    query TaxonomyQuery($first: Int, $after: String, $search: String) {
      taxonomies(first: $first, after: $after, search: $search) {
        count
        edges {
          node {
            id
            name
            slug
            description
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
      // This ensures that the table is up to date when taxonomies are mutated.
      // The alternative is to specify refetchQueries on all Taxonomy mutations.
      return { variables, fetchPolicy: 'cache-and-network' };
    },
  }
)
export default class Taxonomies extends Component {
  render() {
    const { location, match, data: { loading, taxonomies } } = this.props;

    if (loading && !taxonomies) {
      return <Loading />;
    }

    return (
      <Fragment>
        <Heading>Taxonomy</Heading>
        <HeaderAdd to="/taxonomy/add">Add Taxonomy</HeaderAdd>
        <ListTable {...{ location, match, columns }} data={taxonomies} path="/taxonomy" />
      </Fragment>
    );
  }
}
