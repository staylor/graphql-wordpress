import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import gql from 'graphql-tag';
import { settingsShape, socialSettingsShape } from 'types/PropTypes';
import NotFound from 'routes/App/NotFound';
import Content from './Content';
import { Wrapper, Title } from './styled';

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
        summary
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
    socialSettings: socialSettingsShape,
  };

  render() {
    const { data: { loading, error, post } } = this.props;

    if (error) {
      return <NotFound />;
    }

    if (loading && !post) {
      return null;
    }

    const { siteUrl } = this.context.settings;
    const { twitterUsername } = this.context.socialSettings;
    const postUrl = `${siteUrl}/post/${post.slug}`;

    return (
      <Wrapper>
        <Helmet>
          <title>{post.title}</title>
          <link rel="canonical" href={postUrl} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.summary} />
          <meta property="og:url" content={postUrl} />
          <meta name="twitter:card" value="summary" />
          {twitterUsername && <meta name="twitter:site" value={`@${twitterUsername}`} />}
          {twitterUsername && <meta name="twitter:creator" value={`@${twitterUsername}`} />}
          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:description" content={post.summary} />
          <meta name="twitter:url" content={postUrl} />
        </Helmet>
        <Title>{post.title}</Title>
        <Content contentState={post.contentState} />
      </Wrapper>
    );
  }
}
