import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Heading } from 'styles/utils';

/* eslint-disable react/prop-types */

@graphql(gql`
  query SidebarQuery {
    shows {
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
          return (
            <div key={node.id}>
              {`${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`}
              <br />
              {node.artist.name}
              <br />
              {node.venue.name}
            </div>
          );
        })}
      </aside>
    );
  }
}
