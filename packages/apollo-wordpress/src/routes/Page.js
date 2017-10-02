import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'react-apollo';
import { ArticleWrapper, Heading, ContentSection, Error, Loading } from 'wp-styled-components';
import ContentNode from 'components/ContentNode';
import Media from 'containers/Media';
import PageQuery from 'graphql/Page_Query.graphql';
import { SITE_URL } from 'utils/constants';

/* eslint-disable react/no-danger */
/* eslint-disable react/prefer-stateless-function */

@graphql(PageQuery, {
  options: ({ params: { slug } }) => ({
    variables: {
      slug,
    },
  }),
})
export default class Page extends Component {
  static propTypes = {
    data: PropTypes.shape({
      viewer: PropTypes.shape({
        page: PropTypes.object,
      }),
    }).isRequired,
  };

  render() {
    const { data: { error, loading, viewer } } = this.props;
    if (error) {
      return <Error />;
    } else if (loading) {
      return <Loading />;
    } else if (!viewer.page) {
      return <Error />;
    }

    const {
      page: { slug, title: { raw: title }, content: { data: content }, featuredMedia },
    } = viewer;
    const url = `${SITE_URL}/${slug}`;
    const featuredImage = (featuredMedia && featuredMedia.sourceUrl) || null;

    return (
      <ArticleWrapper>
        <Helmet>
          <title>{title}</title>
          <link rel="canonical" href={url} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content={url} />
          {featuredImage && <meta property="og:image" content={featuredImage} />}
          <meta name="twitter:title" content={title} />
          {featuredImage && <meta name="twitter:image" content={featuredImage} />}
        </Helmet>
        <header>
          <Heading dangerouslySetInnerHTML={{ __html: title }} />
        </header>
        {featuredMedia && <Media media={featuredMedia} crop={'large'} />}
        <ContentNode component={ContentSection} content={content} />
      </ArticleWrapper>
    );
  }
}
