import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import Message from 'components/Form/Message';
import Form from '../Form';
import { Heading } from '../styled';

/* eslint-disable react/prop-types */

const settingsFields = [
  { label: 'Site Title', prop: 'siteTitle', editable: true },
  { label: 'Tagline', prop: 'tagline', editable: true },
  { label: 'Site URL', prop: 'siteUrl', editable: true },
  {
    label: 'Copyright Text',
    prop: 'copyrightText',
    editable: true,
    type: 'textarea',
  },
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
            siteUrl
            copyrightText
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
          siteUrl
          copyrightText
        }
      }
    }
  `)
)
export default class SettingsRoute extends Component {
  state = {
    message: null,
  };

  onSubmit = (e, updates) => {
    e.preventDefault();

    const { settings } = this.props.data;
    this.props
      .mutate({
        variables: {
          id: settings.id,
          input: updates,
        },
      })
      .then(() => this.setState({ message: 'updated' }))
      .catch(() => this.setState({ message: 'error' }));
  };

  render() {
    const { data: { loading, settings } } = this.props;

    return (
      <Fragment>
        <Heading>Edit Settings</Heading>
        {this.state.message === 'updated' && <Message text="Settings Updated." />}
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
