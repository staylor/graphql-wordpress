import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import gql from 'graphql-tag';
import Content from './Content';
import { Title } from './styled';

/* eslint-disable react/prop-types */

@graphql(
  gql`
    query PostQuery($slug: String) {
      post(slug: $slug) {
        id
        title
        contentState {
          ...Content_contentState
        }
      }
    }
    ${Content.fragments.contentState}
  `,
  {
    options: ({ match: { params } }) => ({
      variables: { slug: params.slug },
    }),
  }
)
export default class PostRoute extends Component {
  render() {
    const { data: { loading, post } } = this.props;

    if (loading && !post) {
      return null;
    }

    return (
      <article>
        <Helmet>
          <title>{post.title}</title>
        </Helmet>
        <Title>{post.title}</Title>
        <Content contentState={post.contentState} />
      </article>
    );
  }
}
