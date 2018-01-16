import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Helmet from 'react-helmet-async';
import { settingsShape, socialSettingsShape } from 'types/PropTypes';
import NotFound from 'components/NotFound';
import { uploadUrl } from 'utils/media';
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
        featuredMedia {
          destination
          ... on ImageUpload {
            crops {
              fileName
              width
            }
          }
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

    let featuredImage = null;
    if (post.featuredMedia && post.featuredMedia.length > 0) {
      const media = post.featuredMedia[0];
      const crop = media.crops.find(c => c.width === 640);
      featuredImage = uploadUrl(media.destination, crop.fileName);
    }

    return (
      <Wrapper>
        <Helmet>
          <title>{post.title}</title>
          <link rel="canonical" href={postUrl} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.summary} />
          <meta property="og:url" content={postUrl} />
          {featuredImage && <meta property="og:image" content={featuredImage} />}
          <meta name="twitter:card" value="summary_large_image" />
          {twitterUsername && <meta name="twitter:site" value={`@${twitterUsername}`} />}
          {twitterUsername && <meta name="twitter:creator" value={`@${twitterUsername}`} />}
          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:description" content={post.summary} />
          <meta name="twitter:url" content={postUrl} />
          {featuredImage && <meta name="twitter:image" content={featuredImage} />}
        </Helmet>
        <Title>{post.title}</Title>
        <Content contentState={post.contentState} />
      </Wrapper>
    );
  }
}
