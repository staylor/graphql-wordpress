import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import Form from '../Form';
import { Heading } from '../styled';

/* eslint-disable react/prop-types */

const settingsFields = [
  { label: 'Site Title', prop: 'siteTitle', editable: true },
  { label: 'Tagline', prop: 'tagline', editable: true },
];

@compose(
  graphql(
    gql`
      query SettingsAdminQuery($id: String) {
        settings(id: $id) {
          id
          ... on SiteSettings {
            siteTitle
            tagline
          }
        }
      }
    `,
    {
      options: {
        variables: { id: 'site' },
      },
    }
  ),
  graphql(gql`
    mutation UpdateSettingsMutation($id: String!, $input: UpdateSettingsInput!) {
      updateSettings(id: $id, input: $input) {
        id
        ... on SiteSettings {
          siteTitle
          tagline
        }
      }
    }
  `)
)
export default class SettingsRoute extends Component {
  onSubmit = (e, updates) => {
    e.preventDefault();

    const { settings } = this.props.data;
    this.props.mutate({
      variables: {
        id: settings.id,
        input: updates,
      },
    });
  };

  render() {
    const { data: { loading, settings } } = this.props;

    return (
      <Fragment>
        <Heading>Edit Settings</Heading>
        {loading && !settings ? (
          <Loading />
        ) : (
          <Form
            fields={settingsFields}
            data={settings}
            buttonLabel="Update Settings"
            onSubmit={this.onSubmit}
          />
        )}
      </Fragment>
    );
  }
}
