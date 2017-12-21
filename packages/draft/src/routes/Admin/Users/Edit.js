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
      query UserAdminQuery($id: ObjID!) {
        user(id: $id) {
          id
          name
          email
          bio
          roles
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
    mutation UpdateUserMutation($id: ObjID!, $input: UpdateUserInput!) {
      updateUser(id: $id, input: $input) {
        id
        name
        email
        bio
        roles
      }
    }
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

    const userFields = [
      { label: 'Name', prop: 'name', editable: true },
      { label: 'Email', prop: 'email', type: 'email', editable: true },
      {
        label: 'Bio',
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
        <Heading>Edit User</Heading>
        {this.state.message === 'updated' && <Message text="User updated." />}
        <FormWrap>
          <Form
            fields={userFields}
            data={user}
            buttonLabel="Update User"
            onSubmit={this.onSubmit}
          />
        </FormWrap>
      </Fragment>
    );
  }
}
