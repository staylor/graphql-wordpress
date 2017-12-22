import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Editor from 'components/Editor';
import Message from 'components/Form/Message';
import Form from 'routes/Admin/Form';
import { Heading, titleInputClass, FormWrap } from 'routes/Admin/styled';

/* eslint-disable react/prop-types */

const postFields = [
  { prop: 'title', editable: true, className: titleInputClass },
  {
    prop: 'contentState',
    type: 'editor',
    editable: true,
    placeholder: 'Post goes here...',
  },
];

@graphql(gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      slug
      contentState {
        ...Editor_contentState
      }
    }
  }
  ${Editor.fragments.contentState}
`)
export default class AddPost extends Component {
  state = {
    message: null,
  };

  onSubmit = (e, updates) => {
    e.preventDefault();

    const input = Object.assign({}, updates);

    this.props
      .mutate({
        variables: {
          input,
        },
      })
      .then(({ data: { createPost } }) => {
        this.props.history.push({
          pathname: `/post/${createPost.id}`,
        });
      })
      .catch(err => this.setState({ message: err.message }));
  };

  render() {
    return (
      <Fragment>
        <Heading>Add Post</Heading>
        {this.state.message && <Message text={this.state.message} />}
        <FormWrap>
          <Form fields={postFields} buttonLabel="Add Post" onSubmit={this.onSubmit} />
        </FormWrap>
      </Fragment>
    );
  }
}
