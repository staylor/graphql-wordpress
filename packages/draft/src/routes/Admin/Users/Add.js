import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Message from 'components/Form/Message';
import { Heading, FormWrap } from 'routes/Admin/styled';
import UserForm from './Form';

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
    return (
      <Fragment>
        <Heading>Add User</Heading>
        {this.state.message === 'error' && <Message text="Error adding user." />}
        <FormWrap>
          <UserForm buttonLabel="Add User" onSubmit={this.onSubmit} />
        </FormWrap>
      </Fragment>
    );
  }
}
