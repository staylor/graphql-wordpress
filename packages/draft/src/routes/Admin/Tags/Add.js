import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Message from 'components/Form/Message';
import Form from '../Form';
import { Heading } from '../styled';

/* eslint-disable react/prop-types */

const tagFields = [{ label: 'Name', prop: 'name', editable: true }];

@graphql(gql`
  mutation CreateTagMutation($input: CreateTagInput!) {
    createTag(input: $input) {
      id
      name
      slug
    }
  }
`)
export default class AddTag extends Component {
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
      .then(({ data: { createTag } }) => {
        this.props.history.push({
          pathname: `/tag/${createTag.id}`,
        });
      })
      .catch(() => this.setState({ message: 'error' }));
  };

  render() {
    return (
      <Fragment>
        <Heading>Add Tag</Heading>
        {this.state.message === 'error' && <Message text="Error adding tag." />}
        <Form fields={tagFields} buttonLabel="Add Tag" onSubmit={this.onSubmit} />
      </Fragment>
    );
  }
}
