import React from 'react';
import gql from 'graphql-tag';
import Form from 'components/Form';

/* eslint-disable react/prop-types */

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

export default function UserForm({ user = {}, buttonLabel = 'Submit', onSubmit }) {
  return <Form fields={userFields} data={user} {...{ buttonLabel, onSubmit }} />;
}

UserForm.fragments = {
  user: gql`
    fragment UserForm_user on User {
      id
      name
      email
      bio
      roles
    }
  `,
};
