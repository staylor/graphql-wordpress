import React, { Fragment, Component } from 'react';

/* eslint-disable react/prop-types */

export default class Analytics extends Component {
  componentDidMount() {
    const gapi = window.gapi || (window.gapi = {});
    gapi.analytics = {
      q: [],
      ready(cb) {
        this.q.push(cb);
      },
    };
    const js = document.createElement('script');
    const first = document.getElementsByTagName('script')[0];
    js.src = 'https://apis.google.com/js/platform.js';
    first.parentNode.insertBefore(js, first);
    js.onload = () => {
      gapi.load('analytics');
    };

    gapi.analytics.ready(() => {
      const CLIENT_ID = this.props.googleClientId;

      gapi.analytics.auth.authorize({
        container: 'auth-button',
        clientid: CLIENT_ID,
      });

      const viewSelector = new gapi.analytics.ViewSelector({
        container: 'view-selector',
      });

      const timeline = new gapi.analytics.googleCharts.DataChart({
        reportType: 'ga',
        query: {
          dimensions: 'ga:date',
          metrics: 'ga:sessions',
          'start-date': '30daysAgo',
          'end-date': 'yesterday',
        },
        chart: {
          type: 'LINE',
          container: 'timeline',
        },
      });

      // Step 6: Hook up the components to work together.

      gapi.analytics.auth.on('success', () => {
        viewSelector.execute();
      });

      viewSelector.on('change', ids => {
        const newIds = {
          query: {
            ids,
          },
        };
        timeline.set(newIds).execute();
      });
    });
  }

  render() {
    return (
      <Fragment>
        <section id="auth-button" />
        <section id="view-selector" />
        <section id="timeline" />
      </Fragment>
    );
  }
}
