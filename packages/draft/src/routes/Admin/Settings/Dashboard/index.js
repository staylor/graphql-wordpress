import React from 'react';
import { compose, graphql } from 'react-apollo';
import { FormWrap } from 'routes/Admin/styled';
import Form from 'routes/Admin/Settings/Form';
import DashboardSettingsQuery from './DashboardSettingsQuery.graphql';
import DashboardSettingsMutation from './DashboardSettingsMutation.graphql';

/* eslint-disable react/prop-types */

const settingsFields = [
  { label: 'Google Analytics Client ID', prop: 'googleClientId', editable: true },
  { label: 'Google Analytics Tracking ID', prop: 'googleTrackingId', editable: true },
];

function DashboardSettings({ data, mutate }) {
  return (
    <FormWrap>
      <Form id="dashboard" title="Dashboard Settings" {...{ settingsFields, data, mutate }} />
    </FormWrap>
  );
}

const composed = compose(
  graphql(DashboardSettingsQuery, {
    options: {
      fetchPolicy: 'cache-and-network',
    },
  }),
  graphql(DashboardSettingsMutation)
);

export default composed(DashboardSettings);
