import React from 'react';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import Form from 'components/Form';

/* eslint-disable react/prop-types */

function showFields({ artists, venues }) {
  return [
    { label: 'Title', prop: 'title', editable: true },
    {
      prop: 'date',
      type: 'date',
      editable: true,
    },
    {
      label: 'Artist',
      prop: 'artist',
      editable: true,
      type: 'select',
      choices: artists.edges.map(({ node }) => ({
        label: node.name,
        value: node.id,
      })),
    },
    {
      render: () => <Link to={`/terms/${artists.taxonomy.id}/add`}>Add Artist</Link>,
    },
    {
      label: 'Venue',
      prop: 'venue',
      editable: true,
      type: 'select',
      choices: venues.edges.map(({ node }) => ({
        label: node.name,
        value: node.id,
      })),
    },
    {
      render: () => <Link to={`/terms/${venues.taxonomy.id}/add`}>Add Venue</Link>,
    },
    { label: 'URL', prop: 'url', editable: true },
    { label: 'Notes', prop: 'notes', type: 'textarea', editable: true },
  ];
}

export default function ShowForm({ show = {}, artists, venues, buttonLabel, onSubmit }) {
  const data = Object.assign({}, show);
  if (show.id) {
    data.artist = show.artist.id;
    data.venue = show.venue.id;
  }
  return <Form fields={showFields({ venues, artists })} {...{ data, buttonLabel, onSubmit }} />;
}

ShowForm.fragments = {
  show: gql`
    fragment ShowForm_show on Show {
      id
      title
      date
      url
      notes
      artist {
        id
      }
      venue {
        id
      }
    }
  `,
  terms: gql`
    fragment ShowForm_terms on TermConnection {
      taxonomy {
        id
      }
      edges {
        node {
          id
          name
        }
      }
    }
  `,
};
