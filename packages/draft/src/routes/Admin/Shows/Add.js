import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import Message from 'components/Form/Message';
import DatePicker from 'components/Form/Date';
import Form from 'routes/Admin/Form';
import { Heading, FormWrap } from 'routes/Admin/styled';

/* eslint-disable react/prop-types */

@compose(
  graphql(gql`
    query CreateShowQuery {
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
  `),
  graphql(gql`
    mutation CreateShowMutation($input: CreateShowInput!) {
      createShow(input: $input) {
        id
      }
    }
  `)
)
export default class AddShow extends Component {
  state = {
    message: null,
  };

  onSubmit = (e, updates) => {
    e.preventDefault();

    this.props
      .mutate({
        variables: {
          input: updates,
        },
      })
      .then(({ data: { createShow } }) => {
        this.props.history.push({
          pathname: `/show/${createShow.id}`,
        });
      })
      .catch(() => this.setState({ message: 'error' }));
  };

  render() {
    const { data: { loading, artists, venues } } = this.props;

    if (loading && !artists) {
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
        render: () => (
          <DatePicker
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

    return (
      <Fragment>
        <Heading>Add Show</Heading>
        {this.state.message === 'error' && <Message text="Error adding show." />}
        <FormWrap>
          <Form fields={showFields} buttonLabel="Add Show" onSubmit={this.onSubmit} />
        </FormWrap>
      </Fragment>
    );
  }
}
