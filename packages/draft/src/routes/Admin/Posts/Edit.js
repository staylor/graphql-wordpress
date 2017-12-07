import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import Message from 'components/Form/Message';
import Form from '../Form';
import { Heading } from '../styled';

/* eslint-disable react/prop-types */

const postFields = [
  { label: 'Name', prop: 'name', editable: true },
  { label: 'Slug', prop: 'slug' },
];

@graphql(gql`
  mutation UpdatePostMutation($id: String!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      title
      slug
      content
      tags {
        name
        slug
      }
    }
  }
`)
export default class EditPost extends Component {
  state = {
    message: null,
  };

  onSubmit = (e, updates) => {
    e.preventDefault();

    const { post } = this.props.data;
    this.props
      .mutate({
        variables: {
          id: post.id,
          input: updates,
        },
      })
      .then(() => this.setState({ message: 'updated' }))
      .catch(() => this.setState({ message: 'error' }));
  };

  render() {
    const { data: { loading, post } } = this.props;

    if (loading && !post) {
      return <Loading />;
    }

    return (
      <Fragment>
        <Heading>Edit Post</Heading>
        {this.state.message === 'updated' && <Message text="Post updated." />}
        <Form fields={postFields} data={post} buttonLabel="Update Post" onSubmit={this.onSubmit} />
      </Fragment>
    );
  }
}
