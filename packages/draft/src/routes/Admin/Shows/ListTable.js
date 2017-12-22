import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import Loading from 'components/Loading';
import { RowTitle } from 'styles/utils';
import { Heading, HeaderAdd, RowActions } from 'routes/Admin/styled';
import ListTable from 'routes/Admin/ListTable';
import ShowQuery from './ShowQuery.graphql';

/* eslint-disable react/prop-types */

const columns = [
  {
    label: 'Title',
    render: (show, { mutate, variables }) => {
      const onClick = e => {
        e.preventDefault();

        mutate({
          refetchQueries: [{ query: ShowQuery, variables }],
          variables: {
            ids: [show.id],
          },
        });
      };

      return (
        <Fragment>
          <RowTitle>
            <Link to={`/show/${show.id}`}>{show.title || '(No Title)'}</Link>
          </RowTitle>
          <RowActions>
            <Link to={`/show/${show.id}`}>Edit</Link> |{' '}
            <a onClick={onClick} href={`/show/${show.id}`}>
              Delete
            </a>
          </RowActions>
        </Fragment>
      );
    },
  },
  {
    label: 'Artist',
    render: show => show.artist.name,
  },
  {
    label: 'Venue',
    render: show => show.venue.name,
  },
  {
    label: 'Date',
    render: show => {
      const d = new Date(show.date);
      const month = d.getMonth() + 1;
      const day = d.getDate();
      const min = d.getMinutes();
      const hour = d.getHours();
      return `${month < 10 ? `0${month}` : month}/${day < 10 ? `0${day}` : day}/${d.getFullYear()}
      ${' '}at${' '}
      ${hour % 12}:${min < 10 ? `0${min}` : min}${hour < 12 ? 'am' : 'pm'}`;
    },
  },
];

@compose(
  graphql(ShowQuery, {
    options: {
      // This ensures that the table is up to date when shows are mutated.
      // The alternative is to specify refetchQueries on all Show mutations.
      fetchPolicy: 'cache-and-network',
    },
  }),
  graphql(
    gql`
      mutation DeleteShowMutation($ids: [ObjID]!) {
        removeShow(ids: $ids)
      }
    `
  )
)
export default class Shows extends Component {
  render() {
    const { location, match, mutate, data: { variables, loading, shows } } = this.props;

    if (loading && !shows) {
      return <Loading />;
    }

    return (
      <Fragment>
        <Heading>Show</Heading>
        <HeaderAdd to="/show/add">Add Show</HeaderAdd>
        <ListTable {...{ location, match, columns, mutate, variables }} data={shows} path="/show" />
      </Fragment>
    );
  }
}
