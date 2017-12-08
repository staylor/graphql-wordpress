import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import Message from 'components/Form/Message';
import Form from '../Form';
import { Heading } from '../styled';

/* eslint-disable react/prop-types */

const postFields = [
  { label: 'Title', prop: 'title', editable: true },
  { label: 'Slug', prop: 'slug' },
  {
    label: 'Content',
    prop: 'content',
    render: post => JSON.parse(post.content),
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
          content
          tags {
            name
            slug
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
    mutation UpdatePostMutation($id: ObjID!, $input: UpdatePostInput!) {
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
)
export default class EditPost extends Component {
  state = {
    message: null,
  };

  onSubmit = (e, updates) => {
    e.preventDefault();

    const input = Object.assign({}, updates);
    input.content = JSON.stringify(updates.content);

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
