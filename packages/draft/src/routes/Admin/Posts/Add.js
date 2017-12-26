import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Message from 'components/Form/Message';
import { FormWrap } from 'routes/Admin/styled';
import PostForm from './Form';

/* eslint-disable react/prop-types */

@graphql(gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      ...PostForm_post
    }
  }
  ${PostForm.fragments.post}
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
        {this.state.message && <Message text={this.state.message} />}
        <FormWrap>
          <PostForm post={{}} buttonLabel="Add Post" onSubmit={this.onSubmit} />
        </FormWrap>
      </Fragment>
    );
  }
}
