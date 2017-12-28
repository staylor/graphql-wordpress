import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Heading, Show, Time } from './styled';

/* eslint-disable react/prop-types */

@graphql(gql`
  query SidebarQuery {
    shows(latest: true) @connection(key: "shows", filter: ["latest"]) {
      edges {
        node {
          id
          artist {
            name
          }
          venue {
            name
          }
          date
        }
      }
    }
  }
`)
export default class Sidebar extends Component {
  state = {};

  render() {
    const { data: { loading, shows } } = this.props;

    if (loading && !shows) {
      return null;
    }

    return (
      <aside>
        <Heading>Upcoming Shows</Heading>
        {shows.edges.map(({ node }) => {
          const d = new Date(node.date);
          const m = d.getMonth() + 1;
          const day = d.getDate();
          return (
            <Show key={node.id}>
              <Time>{`${m < 10 ? `0${m}` : m}/${
                day < 10 ? `0${day}` : day
              }/${d.getFullYear()}`}</Time>
              {node.artist.name}
              <br />
              {node.venue.name}
            </Show>
          );
        })}
      </aside>
    );
  }
}
