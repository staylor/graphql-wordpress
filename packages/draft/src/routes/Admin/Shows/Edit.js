import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import Message from 'components/Form/Message';
import Form from 'routes/Admin/Form';
import { Heading, FormWrap } from 'routes/Admin/styled';
import showFields from './showFields';

/* eslint-disable react/prop-types */

@compose(
  graphql(
    gql`
      query ShowAdminQuery($id: ObjID!) {
        show(id: $id) {
          id
          title
          date
          url
          notes
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
        fetchPolicy: 'cache-and-network',
      }),
    }
  ),
  graphql(gql`
    mutation UpdateShowMutation($id: ObjID!, $input: UpdateShowInput!) {
      updateShow(id: $id, input: $input) {
        id
        title
        date
        url
        notes
        artist {
          id
        }
        venue {
          id
        }
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
      .then(() => {
        this.setState({ message: 'updated' });
        document.documentElement.scrollTop = 0;
      })
      .catch(() => this.setState({ message: 'error' }));
  };

  render() {
    const { data: { loading, show, artists, venues } } = this.props;

    if (loading && !show) {
      return <Loading />;
    }

    const normalized = Object.assign({}, show);
    normalized.artist = show.artist.id;
    normalized.venue = show.venue.id;

    return (
      <Fragment>
        <Heading>Edit Show</Heading>
        {this.state.message === 'updated' && <Message text="Show updated." />}
        <FormWrap>
          <Form
            fields={showFields({ venues, artists })}
            data={normalized}
            buttonLabel="Update Show"
            onSubmit={this.onSubmit}
          />
        </FormWrap>
      </Fragment>
    );
  }
}
