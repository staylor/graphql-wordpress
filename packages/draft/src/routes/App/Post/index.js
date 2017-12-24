import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import gql from 'graphql-tag';
import { settingsShape } from 'types/PropTypes';
import Content from './Content';
import { Title } from './styled';

/* eslint-disable react/prop-types */

@graphql(
  gql`
    query PostQuery($slug: String) {
      post(slug: $slug) {
        id
        title
        slug
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
  static contextTypes = {
    settings: settingsShape,
  };

  render() {
    const { data: { loading, post } } = this.props;

    if (loading && !post) {
      return null;
    }

    const { siteUrl } = this.context.settings;

    return (
      <article>
        <Helmet>
          <title>{post.title}</title>
          <link rel="canonical" href={`${siteUrl}/post/${post.slug}`} />
        </Helmet>
        <Title>{post.title}</Title>
        <Content contentState={post.contentState} />
      </article>
    );
  }
}
