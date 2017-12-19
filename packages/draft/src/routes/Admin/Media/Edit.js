import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import Message from 'components/Form/Message';
import Form from '../Form';
import { Heading, titleInputClass } from '../styled';

/* eslint-disable react/prop-types */

const mediaFields = [{ prop: 'title', editable: true, className: titleInputClass }];

@compose(
  graphql(
    gql`
      query MediaAdminQuery($id: ObjID!) {
        media(id: $id) {
          id
          title
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
    mutation UpdateMediaMutation($id: ObjID!, $input: UpdateMediaUploadInput!) {
      updateMediaUpload(id: $id, input: $input) {
        id
        title
      }
    }
  `)
)
export default class EditPost extends Component {
  state = {
    message: null,
  };

  onSubmit = (e, updates) => {
    e.preventDefault();

    const input = Object.assign({}, updates);

    const { media } = this.props.data;
    this.props
      .mutate({
        variables: {
          id: media.id,
          input,
        },
      })
      .then(() => {
        this.setState({ message: 'updated' });
        document.documentElement.scrollTop = 0;
      })
      .catch(() => this.setState({ message: 'error' }));
  };

  render() {
    const { data: { loading, media } } = this.props;

    if (loading && !media) {
      return <Loading />;
    }

    return (
      <Fragment>
        <Heading>Edit Media</Heading>
        {this.state.message === 'updated' && <Message text="Media updated." />}
        <Form
          fields={mediaFields}
          data={media}
          buttonLabel="Update Media"
          onSubmit={this.onSubmit}
        />
      </Fragment>
    );
  }
}
