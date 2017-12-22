import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Editor from 'components/Editor';
import Loading from 'components/Loading';
import Message from 'components/Form/Message';
import { settingsShape } from 'types/PropTypes';
import Form from 'routes/Admin/Form';
import { Heading, titleInputClass, FormWrap } from 'routes/Admin/styled';

/* eslint-disable react/prop-types */

const postFields = settings => [
  {
    prop: 'slug',
    render: post => {
      const url = `${settings.siteUrl}/post/${post.slug}`;
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
  { prop: 'title', editable: true, className: titleInputClass },
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
      }
    }
    ${Editor.fragments.contentState}
  `)
)
export default class EditPost extends Component {
  static contextTypes = {
    settings: settingsShape,
  };

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
    const { settings } = this.context;
    const { data: { loading, post } } = this.props;

    if (loading && !post) {
      return <Loading />;
    }

    return (
      <Fragment>
        <Heading>Edit Post</Heading>
        {this.state.message === 'updated' && <Message text="Post updated." />}
        <FormWrap>
          <Form
            fields={postFields(settings)}
            data={post}
            buttonLabel="Update Post"
            onSubmit={this.onSubmit}
          />
        </FormWrap>
      </Fragment>
    );
  }
}
