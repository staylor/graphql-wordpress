import React from 'react';
import gql from 'graphql-tag';
import Form from 'components/Form';

/* eslint-disable react/prop-types */

const taxonomyFields = [
  { label: 'Name', prop: 'name', editable: true },
  { label: 'Slug', prop: 'slug', condition: term => term.slug },
  { label: 'Plural Name', prop: 'plural', editable: true },
  {
    label: 'Description',
    prop: 'description',
    type: 'textarea',
    editable: true,
  },
];

export default function TaxonomyForm({ taxonomy = {}, buttonLabel, onSubmit }) {
  return <Form fields={taxonomyFields} data={taxonomy} {...{ buttonLabel, onSubmit }} />;
}

TaxonomyForm.fragments = {
  taxonomy: gql`
    fragment TaxonomyForm_taxonomy on Taxonomy {
      id
      name
      plural
      slug
      description
    }
  `,
};
