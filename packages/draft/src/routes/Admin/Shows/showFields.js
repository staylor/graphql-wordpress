import React from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'components/Form/Date';

export default function showFields({ artists, venues }) {
  let dateValue = null;

  return [
    { label: 'Title', prop: 'title', editable: true },
    {
      prop: 'date',
      type: 'custom',
      editable: true,
      value: () => dateValue,
      render: item => (
        <DatePicker
          date={item && item.date}
          onChange={value => {
            dateValue = value;
          }}
        />
      ),
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
