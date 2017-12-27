import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import Message from 'components/Form/Message';
import { Heading, FormWrap } from 'routes/Admin/styled';
import ShowForm from './Form';

/* eslint-disable react/prop-types */

@compose(
  graphql(
    gql`
      query ShowAdminQuery($id: ObjID!) {
        show(id: $id) {
          ...ShowForm_show
        }
        artists: terms(taxonomy: "artist", first: 100) {
          ...ShowForm_terms
        }
        venues: terms(taxonomy: "venue", first: 100) {
          ...ShowForm_terms
        }
      }
      ${ShowForm.fragments.show}
      ${ShowForm.fragments.terms}
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
        ...ShowForm_show
      }
    }
    ${ShowForm.fragments.show}
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
    return (
      <Fragment>
        <Heading>Edit Show</Heading>
        {this.state.message === 'updated' && <Message text="Show updated." />}
        <FormWrap>
          <ShowForm
            {...{ show, artists, venues }}
            buttonLabel="Update Show"
            onSubmit={this.onSubmit}
          />
        </FormWrap>
      </Fragment>
    );
  }
}
