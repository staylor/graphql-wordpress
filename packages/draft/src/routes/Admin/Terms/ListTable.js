import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import Loading from 'components/Loading';
import ListTable from 'components/ListTable';
import { RowActions, RowTitle } from 'components/ListTable/styled';
import { offsetToCursor } from 'utils/connection';
import { Heading, HeaderAdd } from 'routes/Admin/styled';
import TermQuery from './TermQuery.graphql';

/* eslint-disable react/prop-types */

const PER_PAGE = 20;

const columns = [
  {
    label: 'Name',
    render: (term, { mutate, variables }) => {
      const onClick = e => {
        e.preventDefault();

        mutate({
          refetchQueries: [{ query: TermQuery, variables }],
          variables: {
            ids: [term.id],
          },
        });
      };

      const urlPath = `/terms/${term.taxonomy.id}/${term.id}`;

      return (
        <Fragment>
          <RowTitle>
            <Link to={urlPath}>{term.name}</Link>
          </RowTitle>
          <RowActions>
            <Link to={urlPath}>Edit</Link> |{' '}
            <a className="delete" onClick={onClick} href={urlPath}>
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
];

@compose(
  graphql(TermQuery, {
    options: ({ match }) => {
      const { params } = match;

      const variables = { first: PER_PAGE, taxonomyId: params.taxonomyId };
      if (params.page) {
        const pageOffset = parseInt(params.page, 10) - 1;
        if (pageOffset > 0) {
          variables.after = offsetToCursor(pageOffset * PER_PAGE - 1);
        }
      }

      return {
        // This ensures that the table is up to date when taxonomies are mutated.
        // The alternative is to specify refetchQueries on all Taxonomy mutations.
        variables,
        fetchPolicy: 'cache-and-network',
      };
    },
  }),
  graphql(gql`
    mutation DeleteTermMutation($ids: [ObjID]!) {
      removeTerm(ids: $ids)
    }
  `)
)
export default class Terms extends Component {
  render() {
    const { location, match, mutate, data: { variables, loading, terms } } = this.props;

    if (loading && !terms) {
      return <Loading />;
    }

    return (
      <Fragment>
        <Heading>{terms.taxonomy.plural}</Heading>
        <HeaderAdd to={`/terms/${terms.taxonomy.id}/add`}>Add {terms.taxonomy.name}</HeaderAdd>
        <ListTable
          {...{ location, match, columns, mutate, variables }}
          data={terms}
          path={`/terms/${terms.taxonomy.id}`}
        />
      </Fragment>
    );
  }
}
