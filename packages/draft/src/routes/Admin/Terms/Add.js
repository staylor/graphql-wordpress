import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import Message from 'components/Form/Message';
import Form from 'components/Form';
import { Heading, FormWrap } from 'routes/Admin/styled';

/* eslint-disable react/prop-types */

const taxonomyFields = [
  { label: 'Name', prop: 'name', editable: true },
  {
    label: 'Description',
    prop: 'description',
    type: 'textarea',
    editable: true,
  },
];

@compose(
  graphql(
    gql`
      query TermTaxonomyQuery($id: ObjID) {
        taxonomy(id: $id) {
          id
          name
          plural
        }
      }
    `,
    {
      options: ({ match: { params } }) => ({
        variables: { id: params.taxonomyId },
      }),
    }
  ),
  graphql(
    gql`
      mutation CreateTermMutation($input: CreateTermInput!) {
        createTerm(input: $input) {
          id
          taxonomy {
            id
          }
        }
      }
    `
  )
)
export default class AddTerm extends Component {
  state = {
    message: null,
  };

  onSubmit = (e, updates) => {
    e.preventDefault();

    const taxonomyId = this.props.data.taxonomy.id;

    this.props
      .mutate({
        variables: {
          input: {
            ...updates,
            taxonomy: taxonomyId,
          },
        },
      })
      .then(({ data: { createTerm } }) => {
        this.props.history.push({
          pathname: `/terms/${createTerm.taxonomy.id}/${createTerm.id}`,
        });
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
        <Heading>{`Add ${taxonomy.name}`}</Heading>
        {this.state.message === 'error' && <Message text={`Error adding ${taxonomy.name}.`} />}
        <FormWrap>
          <Form
            fields={taxonomyFields}
            buttonLabel={`Add ${taxonomy.name}`}
            onSubmit={this.onSubmit}
          />
        </FormWrap>
      </Fragment>
    );
  }
}
