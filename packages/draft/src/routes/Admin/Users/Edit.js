import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import Message from 'components/Form/Message';
import { Heading, FormWrap } from 'routes/Admin/styled';
import UserForm from './Form';

/* eslint-disable react/prop-types */

@compose(
  graphql(
    gql`
      query UserAdminQuery($id: ObjID!) {
        user(id: $id) {
          ...UserForm_user
        }
      }
      ${UserForm.fragments.user}
    `,
    {
      options: ({ match: { params } }) => ({
        variables: { id: params.id },
      }),
    }
  ),
  graphql(gql`
    mutation UpdateUserMutation($id: ObjID!, $input: UpdateUserInput!) {
      updateUser(id: $id, input: $input) {
        ...UserForm_user
      }
    }
    ${UserForm.fragments.user}
  `)
)
export default class EditUser extends Component {
  state = {
    message: null,
  };

  onSubmit = (e, updates) => {
    e.preventDefault();

    const { user } = this.props.data;
    this.props
      .mutate({
        variables: {
          id: user.id,
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
    const { data: { loading, user } } = this.props;

    if (loading && !user) {
      return <Loading />;
    }

    return (
      <Fragment>
        <Heading>Edit User</Heading>
        {this.state.message === 'updated' && <Message text="User updated." />}
        <FormWrap>
          <UserForm user={user} buttonLabel="Update User" onSubmit={this.onSubmit} />
        </FormWrap>
      </Fragment>
    );
  }
}
