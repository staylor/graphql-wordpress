import React from 'react';
import gql from 'graphql-tag';
import Form from 'components/Form';

/* eslint-disable react/prop-types */

const termFields = [
  { label: 'Name', prop: 'name', editable: true },
  { label: 'Slug', prop: 'slug', condition: term => term.slug },
  {
    label: 'Description',
    prop: 'description',
    type: 'textarea',
    editable: true,
  },
];

export default function TermForm({ term = {}, buttonLabel, onSubmit }) {
  return <Form fields={termFields} data={term} {...{ buttonLabel, onSubmit }} />;
}

TermForm.fragments = {
  term: gql`
    fragment TermForm_term on Term {
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
  `,
  taxonomy: gql`
    fragment TermForm_taxonomy on Taxonomy {
      id
      name
      plural
    }
  `,
};
