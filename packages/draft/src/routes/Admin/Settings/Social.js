import React from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './Form';

/* eslint-disable react/prop-types */

const settingsFields = [
  { label: 'Twitter Username', prop: 'twitterUsername', editable: true },
  { label: 'Instagram Username', prop: 'instagramUsername', editable: true },
  {
    label: 'Facebook Page URL',
    inputType: 'url',
    prop: 'facebookUrl',
    editable: true,
  },
];

function SocialSettings({ data, mutate }) {
  return <Form id="social" title="Social Settings" {...{ settingsFields, data, mutate }} />;
}

SocialSettings.fragments = {
  settings: gql`
    fragment SocialSettings_settings on SocialSettings {
      facebookUrl
      twitterUsername
      instagramUsername
    }
  `,
};

export default compose(
  graphql(
    gql`
      query SocialSettingsQuery {
        settings(id: "social") {
          id
          ... on SocialSettings {
            ...SocialSettings_settings
          }
        }
      }
      ${SocialSettings.fragments.settings}
    `
  ),
  graphql(gql`
    mutation UpdateSettingsMutation($id: String!, $input: SocialSettingsInput!) {
      updateSocialSettings(id: $id, input: $input) {
        id
        ... on SocialSettings {
          ...SocialSettings_settings
        }
      }
    }
    ${SocialSettings.fragments.settings}
  `)
)(SocialSettings);
