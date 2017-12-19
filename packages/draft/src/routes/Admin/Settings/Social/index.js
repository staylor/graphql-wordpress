import React from 'react';
import { compose, graphql } from 'react-apollo';
import Form from 'routes/Admin/Form';
import { FormWrap } from 'routes/Admin/styled';
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
  return (
    <FormWrap>
      <Form id="social" title="Social Settings" {...{ settingsFields, data, mutate }} />
    </FormWrap>
  );
}

const composed = compose(graphql(SocialSettingsQuery), graphql(SocialSettingsMutation));

export default composed(SocialSettings);
