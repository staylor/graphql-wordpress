import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import Message from 'components/Form/Message';
import Form from 'routes/Admin/Form';
import { Heading, FormWrap } from 'routes/Admin/styled';

/* eslint-disable react/prop-types */

@compose(
  graphql(
    gql`
      query TermAdminQuery($id: ObjID) {
        term(id: $id) {
          id
          name
          slug
          description
          taxonomy {
            id
            name
            plural
          }
        }
      }
    `,
    {
      options: ({ match: { params } }) => ({
        variables: { id: params.id },
      }),
    }
  ),
  graphql(
    gql`
      mutation UpdateTermMutation($id: ObjID!, $input: UpdateTermInput!) {
        updateTerm(id: $id, input: $input) {
          id
          name
          slug
          description
          taxonomy {
            id
            name
            plural
          }
        }
      }
    `
  )
)
export default class EditTerm extends Component {
  state = {
    message: null,
  };

  onSubmit = (e, updates) => {
    e.preventDefault();

    const { term } = this.props.data;
    this.props
      .mutate({
        variables: {
          id: term.id,
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
    const { data: { loading, term } } = this.props;

    if (loading && !term) {
      return <Loading />;
    }

    const termFields = [
      { label: 'Name', prop: 'name', editable: true },
      { label: 'Slug', prop: 'slug' },
      {
        label: 'Description',
        prop: 'description',
        type: 'textarea',
        editable: true,
      },
    ];

    return (
      <Fragment>
        <Heading>{`Edit ${term.taxonomy.name}`}</Heading>
        {this.state.message === 'updated' && <Message text={`${term.taxonomy.name} updated.`} />}
        <FormWrap>
          <Form
            fields={termFields}
            data={term}
            buttonLabel={`Update ${term.taxonomy.name}`}
            onSubmit={this.onSubmit}
          />
        </FormWrap>
      </Fragment>
    );
  }
}
