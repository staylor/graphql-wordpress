import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Message from 'components/Form/Message';
import Form from 'routes/Admin/Form';
import { Heading, FormWrap } from 'routes/Admin/styled';

/* eslint-disable react/prop-types */

@compose(
  graphql(gql`
    mutation CreateUserMutation($input: CreateUserInput!) {
      createUser(input: $input) {
        id
      }
    }
  `)
)
export default class AddUser extends Component {
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
      .then(({ data: { createUser } }) => {
        this.props.history.push({
          pathname: `/user/${createUser.id}`,
        });
      })
      .catch(() => this.setState({ message: 'error' }));
  };

  render() {
    const userFields = [
      { label: 'Name', prop: 'name', editable: true },
      { label: 'Email', prop: 'email', type: 'email', editable: true },
      {
        label: 'bio',
        prop: 'bio',
        type: 'textarea',
        editable: true,
      },
      {
        label: 'Roles',
        prop: 'roles',
        type: 'select',
        placeholder: 'Assign Roles',
        choices: [{ label: 'Admin', value: 'admin' }],
        multiple: true,
        editable: true,
      },
    ];

    return (
      <Fragment>
        <Heading>Add User</Heading>
        {this.state.message === 'error' && <Message text="Error adding user." />}
        <FormWrap>
          <Form fields={userFields} buttonLabel="Add User" onSubmit={this.onSubmit} />
        </FormWrap>
      </Fragment>
    );
  }
}
