import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import Loading from 'components/Loading';
import Message from 'components/Form/Message';
import DatePicker from 'components/Form/Date';
import Form from 'routes/Admin/Form';
import { Heading, FormWrap } from 'routes/Admin/styled';

/* eslint-disable react/prop-types */

@compose(
  graphql(
    gql`
      query ShowAdminQuery($id: ObjID!) {
        show(id: $id) {
          id
          title
          date
          artist {
            id
          }
          venue {
            id
          }
        }
        artists: terms(taxonomy: "artist", first: 100) {
          taxonomy {
            id
          }
          edges {
            node {
              id
              name
            }
          }
        }
        venues: terms(taxonomy: "venue", first: 100) {
          taxonomy {
            id
          }
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `,
    {
      options: ({ match: { params } }) => ({
        variables: { id: params.id },
      }),
    }
  ),
  graphql(gql`
    mutation UpdateShowMutation($id: ObjID!, $input: UpdateShowInput!) {
      updateShow(id: $id, input: $input) {
        id
        title
      }
    }
  `)
)
export default class EditShow extends Component {
  state = {
    message: null,
  };

  onSubmit = (e, updates) => {
    e.preventDefault();

    const { show } = this.props.data;
    this.props
      .mutate({
        variables: {
          id: show.id,
          input: updates,
        },
      })
      .then(() => this.setState({ message: 'updated' }))
      .catch(() => this.setState({ message: 'error' }));
  };

  render() {
    const { data: { loading, show, artists, venues } } = this.props;

    if (loading && !show) {
      return <Loading />;
    }

    let dateValue = null;

    const showFields = [
      { label: 'Title', prop: 'title', editable: true },
      {
        prop: 'date',
        type: 'custom',
        editable: true,
        value: () => dateValue,
        render: item => (
          <DatePicker
            date={item.date}
            onChange={value => {
              dateValue = value;
            }}
          />
        ),
      },
      {
        label: 'Artist',
        prop: 'artist',
        editable: true,
        type: 'select',
        choices: artists.edges.map(({ node }) => ({
          label: node.name,
          value: node.id,
        })),
      },
      {
        render: () => <Link to={`/terms/${artists.taxonomy.id}/add`}>Add Artist</Link>,
      },
      {
        label: 'Venue',
        prop: 'venue',
        editable: true,
        type: 'select',
        choices: venues.edges.map(({ node }) => ({
          label: node.name,
          value: node.id,
        })),
      },
      {
        render: () => <Link to={`/terms/${venues.taxonomy.id}/add`}>Add Venue</Link>,
      },
    ];

    const normalized = Object.assign({}, show);
    normalized.artist = show.artist.id;
    normalized.venue = show.venue.id;

    return (
      <Fragment>
        <Heading>Edit Show</Heading>
        {this.state.message === 'updated' && <Message text="Show updated." />}
        <FormWrap>
          <Form
            fields={showFields}
            data={normalized}
            buttonLabel="Update Show"
            onSubmit={this.onSubmit}
          />
        </FormWrap>
      </Fragment>
    );
  }
}
