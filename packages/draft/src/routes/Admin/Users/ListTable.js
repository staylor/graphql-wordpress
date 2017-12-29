import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import Loading from 'components/Loading';
import ListTable from 'components/ListTable';
import { RowActions, RowTitle } from 'components/ListTable/styled';
import { Heading, HeaderAdd } from 'routes/Admin/styled';
import UserQuery from './UserQuery.graphql';

/* eslint-disable react/prop-types */

const columns = [
  {
    label: 'Name',
    render: (user, { mutate, variables }) => {
      const onClick = e => {
        e.preventDefault();

        mutate({
          refetchQueries: [{ query: UserQuery, variables }],
          variables: {
            ids: [user.id],
          },
        });
      };

      return (
        <Fragment>
          <RowTitle>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </RowTitle>
          <RowActions>
            <Link to={`/user/${user.id}`}>Edit</Link> |{' '}
            <a className="delete" onClick={onClick} href={`/user/${user.id}`}>
              Delete
            </a>
          </RowActions>
        </Fragment>
      );
    },
  },
];

@compose(
  graphql(UserQuery, {
    options: {
      variables: { first: 1000 },
      // This ensures that the table is up to date when users are mutated.
      // The alternative is to specify refetchQueries on all User mutations.
      fetchPolicy: 'cache-and-network',
    },
  }),
  graphql(
    gql`
      mutation DeleteUserMutation($ids: [ObjID]!) {
        removeUser(ids: $ids)
      }
    `
  )
)
export default class Users extends Component {
  render() {
    const { location, match, mutate, data: { variables, loading, users } } = this.props;

    if (loading && !users) {
      return <Loading />;
    }

    return (
      <Fragment>
        <Heading>User</Heading>
        <HeaderAdd to="/user/add">Add User</HeaderAdd>
        <ListTable {...{ location, match, columns, mutate, variables }} data={users} path="/user" />
      </Fragment>
    );
  }
}
