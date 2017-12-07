import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import Message from 'components/Form/Message';
import Form from '../Form';
import { Heading } from '../styled';

/* eslint-disable react/prop-types */

@compose(
  graphql(
    gql`
      query TagAdminQuery($id: String) {
        taxonomy: __type(name: "TAXONOMY") {
          enumValues {
            name
          }
        }
        tag(id: $id) {
          id
          name
          slug
          taxonomy
        }
      }
    `,
    {
      options: ({ match: { params } }) => ({
        variables: { id: params.id },
      }),
    }
  ),
  graphql(gql`
    mutation UpdateTagMutation($id: String!, $input: UpdateTagInput!) {
      updateTag(id: $id, input: $input) {
        id
        name
        slug
        taxonomy
      }
    }
  `)
)
export default class EditTag extends Component {
  state = {
    message: null,
  };

  onSubmit = (e, updates) => {
    e.preventDefault();

    const { tag } = this.props.data;
    this.props
      .mutate({
        variables: {
          id: tag.id,
          input: updates,
        },
      })
      .then(() => this.setState({ message: 'updated' }))
      .catch(() => this.setState({ message: 'error' }));
  };

  render() {
    const { data: { loading, tag, taxonomy } } = this.props;

    if (loading && !tag) {
      return <Loading />;
    }

    const tagFields = [
      { label: 'Name', prop: 'name', editable: true },
      { label: 'Slug', prop: 'slug' },
      {
        label: 'Taxonomy',
        prop: 'taxonomy',
        editable: true,
        multiple: true,
        type: 'select',
        choices: taxonomy.enumValues.map(v => v.name),
      },
    ];

    return (
      <Fragment>
        <Heading>Edit Tag</Heading>
        {this.state.message === 'updated' && <Message text="Tag updated." />}
        <Form fields={tagFields} data={tag} buttonLabel="Update Tag" onSubmit={this.onSubmit} />
      </Fragment>
    );
  }
}
