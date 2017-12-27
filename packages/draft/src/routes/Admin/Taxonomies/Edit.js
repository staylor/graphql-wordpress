import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import Message from 'components/Form/Message';
import { Heading, FormWrap } from 'routes/Admin/styled';
import TaxonomyQuery from './TaxonomyQuery.graphql';
import TaxonomyForm from './Form';

/* eslint-disable react/prop-types */

@compose(
  graphql(
    gql`
      query TaxonomyAdminQuery($id: ObjID) {
        taxonomy(id: $id) {
          ...TaxonomyForm_taxonomy
        }
      }
      ${TaxonomyForm.fragments.taxonomy}
    `,
    {
      options: ({ match: { params } }) => ({
        variables: { id: params.id },
      }),
    }
  ),
  graphql(
    gql`
      mutation UpdateTaxonomyMutation($id: ObjID!, $input: UpdateTaxonomyInput!) {
        updateTaxonomy(id: $id, input: $input) {
          ...TaxonomyForm_taxonomy
        }
      }
      ${TaxonomyForm.fragments.taxonomy}
    `,
    {
      options: {
        refetchQueries: [{ query: TaxonomyQuery }],
      },
    }
  )
)
export default class EditTaxonomy extends Component {
  state = {
    message: null,
  };

  onSubmit = (e, updates) => {
    e.preventDefault();

    const { taxonomy } = this.props.data;
    this.props
      .mutate({
        variables: {
          id: taxonomy.id,
          input: updates,
        },
      })
      .then(() => {
        this.setState({ message: 'updated' });
        document.documentElement.scrollTop = 0;
      })
      .catch(() => this.setState({ message: 'error' }));
  };

  render() {
    const { data: { loading, taxonomy } } = this.props;

    if (loading && !taxonomy) {
      return <Loading />;
    }

    return (
      <Fragment>
        <Heading>Edit Taxonomy</Heading>
        {this.state.message === 'updated' && <Message text="Taxonomy updated." />}
        <FormWrap>
          <TaxonomyForm
            taxonomy={taxonomy}
            buttonLabel="Update Taxonomy"
            onSubmit={this.onSubmit}
          />
        </FormWrap>
      </Fragment>
    );
  }
}
