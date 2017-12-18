import React from 'react';
import { compose, graphql } from 'react-apollo';
import Form from '../Form';
import SocialSettingsQuery from './SocialSettingsQuery.graphql';
import SocialSettingsMutation from './SocialSettingsMutation.graphql';

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

const composed = compose(graphql(SocialSettingsQuery), graphql(SocialSettingsMutation));

export default composed(SocialSettings);
