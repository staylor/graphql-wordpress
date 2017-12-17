import React from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './Form';

/* eslint-disable react/prop-types */

const settingsFields = [
  { label: 'Site Title', prop: 'siteTitle', editable: true },
  { label: 'Tagline', prop: 'tagline', editable: true },
  { label: 'Site URL', inputType: 'url', prop: 'siteUrl', editable: true },
  {
    label: 'Email Address',
    inputType: 'email',
    prop: 'emailAddress',
    editable: true,
  },
  {
    label: 'Site Language',
    prop: 'language',
    editable: true,
    type: 'select',
    choices: [{ value: 'en-US', label: 'English (United States)' }],
  },
  {
    label: 'Copyright Text',
    prop: 'copyrightText',
    editable: true,
    type: 'textarea',
  },
];

function SiteSettings({ data, mutate }) {
  return <Form id="site" title="General Settings" {...{ settingsFields, data, mutate }} />;
}

SiteSettings.fragments = {
  settings: gql`
    fragment SiteSettings_settings on SiteSettings {
      siteTitle
      tagline
      emailAddress
      language
      siteUrl
      copyrightText
    }
  `,
};

export default compose(
  graphql(
    gql`
      query SiteSettingsQuery {
        settings(id: "site") {
          id
          ... on SiteSettings {
            ...SiteSettings_settings
          }
        }
      }
      ${SiteSettings.fragments.settings}
    `
  ),
  graphql(gql`
    mutation UpdateSettingsMutation($id: String!, $input: SiteSettingsInput!) {
      updateSiteSettings(id: $id, input: $input) {
        id
        ... on SiteSettings {
          ...SiteSettings_settings
        }
      }
    }
    ${SiteSettings.fragments.settings}
  `)
)(SiteSettings);
