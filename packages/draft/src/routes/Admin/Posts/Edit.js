import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Editor from 'components/Editor';
import Loading from 'components/Loading';
import Message from 'components/Form/Message';
import Form from '../Form';
import { Heading, titleInputClass } from '../styled';

/* eslint-disable react/prop-types */

const postFields = [
  { prop: 'title', editable: true, className: titleInputClass },
  {
    prop: 'slug',
    render: post => {
      const url = `http://localhost:3000/post/${post.slug}`;
      return (
        <Fragment>
          <strong>Permalink:</strong>{' '}
          <a href={url} target="_blank">
            {url}
          </a>
        </Fragment>
      );
    },
  },
  {
    prop: 'contentState',
    type: 'editor',
    editable: true,
  },
];

@compose(
  graphql(
    gql`
      query PostAdminQuery($id: ObjID!) {
        post(id: $id) {
          id
          title
          slug
          contentState {
            ...Editor_contentState
          }
          tags {
            name
            slug
          }
        }
      }
      ${Editor.fragments.contentState}
    `,
    {
      options: ({ match: { params } }) => ({
        variables: { id: params.id },
      }),
    }
  ),
  graphql(gql`
    mutation UpdatePostMutation($id: ObjID!, $input: UpdatePostInput!) {
      updatePost(id: $id, input: $input) {
        id
        title
        slug
        contentState {
          ...Editor_contentState
        }
        tags {
          name
          slug
        }
      }
    }
    ${Editor.fragments.contentState}
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
