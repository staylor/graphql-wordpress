import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Message from 'components/Form/Message';
import Form from 'routes/Admin/Form';
import { Heading, FormWrap } from 'routes/Admin/styled';

/* eslint-disable react/prop-types */

@compose(
  graphql(gql`
    mutation CreateTaxonomyMutation($input: CreateTaxonomyInput!) {
      createTaxonomy(input: $input) {
        id
        name
        plural
        description
      }
    }
  `)
)
export default class AddTaxonomy extends Component {
  state = {
    message: null,
  };

  onSubmit = (e, updates) => {
    e.preventDefault();

    this.props
      .mutate({
        variables: {
          input: updates,
        },
      })
      .then(({ data: { createTaxonomy } }) => {
        this.props.history.push({
          pathname: `/taxonomy/${createTaxonomy.id}`,
        });
      })
      .catch(() => this.setState({ message: 'error' }));
  };

  render() {
    const taxonomyFields = [
      { label: 'Name', prop: 'name', editable: true },
      { label: 'Plural Name', prop: 'plural', editable: true },
      {
        label: 'Description',
        prop: 'description',
        type: 'textarea',
        editable: true,
      },
    ];

    return (
      <Fragment>
        <Heading>Add Taxonomy</Heading>
        {this.state.message === 'error' && <Message text="Error adding taxonomy." />}
        <FormWrap>
          <Form fields={taxonomyFields} buttonLabel="Add Taxonomy" onSubmit={this.onSubmit} />
        </FormWrap>
      </Fragment>
    );
  }
}
