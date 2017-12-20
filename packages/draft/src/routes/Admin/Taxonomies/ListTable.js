import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import Loading from 'components/Loading';
import { RowTitle } from 'styles/utils';
import { Heading, HeaderAdd, RowActions } from 'routes/Admin/styled';
import ListTable from 'routes/Admin/ListTable';
import TaxonomyQuery from './TaxonomyQuery.graphql';

/* eslint-disable react/prop-types */

const columns = [
  {
    label: 'Name',
    render: (taxonomy, { mutate }) => {
      const onClick = e => {
        e.preventDefault();

        mutate({
          variables: {
            id: taxonomy.id,
          },
        });
      };

      return (
        <Fragment>
          <RowTitle>
            <Link to={`/taxonomy/${taxonomy.id}`}>{taxonomy.name}</Link>
          </RowTitle>
          <RowActions>
            <Link to={`/taxonomy/${taxonomy.id}`}>Edit</Link> |{' '}
            <a onClick={onClick} href={`/taxonomy/${taxonomy.id}`}>
              Delete
            </a>
          </RowActions>
        </Fragment>
      );
    },
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

@compose(
  graphql(TaxonomyQuery, {
    options: {
      // This ensures that the table is up to date when taxonomies are mutated.
      // The alternative is to specify refetchQueries on all Taxonomy mutations.
      fetchPolicy: 'cache-and-network',
    },
  }),
  graphql(
    gql`
      mutation DeleteTaxonomyMutation($id: ObjID!) {
        removeTaxonomy(id: $id)
      }
    `,
    { options: { refetchQueries: [{ query: TaxonomyQuery }] } }
  )
)
export default class Taxonomies extends Component {
  render() {
    const { location, match, mutate, data: { loading, taxonomies } } = this.props;

    if (loading && !taxonomies) {
      return <Loading />;
    }

    return (
      <Fragment>
        <Heading>Taxonomy</Heading>
        <HeaderAdd to="/taxonomy/add">Add Taxonomy</HeaderAdd>
        <ListTable {...{ location, match, columns, mutate }} data={taxonomies} path="/taxonomy" />
      </Fragment>
    );
  }
}
