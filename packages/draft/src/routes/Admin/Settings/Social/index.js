import React from 'react';
import { compose, graphql } from 'react-apollo';
import { FormWrap } from 'routes/Admin/styled';
import Form from 'routes/Admin/Settings/Form';
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
  {
    label: 'Facebook App ID',
    prop: 'facebookAppId',
    editable: true,
  },
];

function SocialSettings({ data, mutate }) {
  return (
    <FormWrap>
      <Form id="social" title="Social Settings" {...{ settingsFields, data, mutate }} />
    </FormWrap>
  );
}

const composed = compose(
  graphql(SocialSettingsQuery, {
    options: {
      fetchPolicy: 'cache-and-network',
    },
  }),
  graphql(SocialSettingsMutation)
);

export default composed(SocialSettings);
