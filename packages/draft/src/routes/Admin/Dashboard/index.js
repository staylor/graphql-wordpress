import React, { Fragment, Component } from 'react';
import { graphql } from 'react-apollo';
import Loading from 'components/Loading';
import DashboardSettingsQuery from '../Settings/Dashboard/DashboardSettingsQuery.graphql';
import Analytics from './Analytics';
import { Heading } from '../styled';

/* eslint-disable react/prop-types */

@graphql(DashboardSettingsQuery)
export default class Home extends Component {
  render() {
    const { data: { loading, settings } } = this.props;

    if (loading && !settings) {
      return (
        <Fragment>
          <Heading>Dashboard</Heading>
          <Loading />
        </Fragment>
      );
    }

    return (
      <Fragment>
        <Heading>Dashboard</Heading>

        {settings.googleClientId ? (
          <Analytics googleClientId={settings.googleClientId} />
        ) : (
          'You need a Google Client ID to view analytics.'
        )}
      </Fragment>
    );
  }
}
