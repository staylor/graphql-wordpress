import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import Message from 'components/Form/Message';
import { FormWrap } from 'routes/Admin/styled';
import PostForm from './Form';

/* eslint-disable react/prop-types */

@compose(
  graphql(
    gql`
      query PostAdminQuery($id: ObjID!) {
        post(id: $id) {
          ...PostForm_post
        }
      }
      ${PostForm.fragments.post}
    `,
    {
      options: ({ match: { params } }) => ({
        variables: { id: params.id },
        fetchPolicy: 'cache-and-network',
      }),
    }
  ),
  graphql(gql`
    mutation UpdatePostMutation($id: ObjID!, $input: UpdatePostInput!) {
      updatePost(id: $id, input: $input) {
        ...PostForm_post
      }
    }
    ${PostForm.fragments.post}
  `)
)
export default class EditPost extends Component {
  state = {
    message: null,
  };

  onSubmit = (e, updates) => {
    e.preventDefault();

    const input = Object.assign({}, updates);

    const { post } = this.props.data;
    this.props
      .mutate({
        variables: {
          id: post.id,
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
    const { data: { loading, error, post } } = this.props;

    if (error) {
      return <Message text={error.message} />;
    }

    if (loading && !post) {
      return <Loading />;
    }

    return (
      <Fragment>
        {this.state.message === 'updated' && <Message text="Post updated." />}
        <FormWrap>
          <PostForm post={post} buttonLabel="Update Post" onSubmit={this.onSubmit} />
        </FormWrap>
      </Fragment>
    );
  }
}
