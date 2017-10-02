import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'react-apollo';
import { Link } from 'found';
import { FormattedRelative } from 'react-intl';
import { ArticleWrapper, ContentSection, Error, Loading } from 'wp-styled-components';
import { iframe, Title, Meta, Tag } from 'wp-styled-components/lib/Single';
import ContentNode from 'components/ContentNode';
import Media from 'containers/Media';
import Comments from 'components/Comments';
import { COMMENTS_PER_PAGE } from 'components/Comments/constants';
import SingleQuery from 'graphql/Single_Query.graphql';
import { dateRegex } from 'utils/regex';
import { SITE_URL } from 'utils/constants';

/* eslint-disable react/no-danger */

@graphql(SingleQuery, {
  options: ({ params: { slug } }) => ({
    variables: {
      slug,
      commentCount: COMMENTS_PER_PAGE,
    },
  }),
})
export default class Single extends Component {
  static propTypes = {
    data: PropTypes.shape({
      viewer: PropTypes.shape({
        post: PropTypes.object,
      }),
    }).isRequired,
  };

  content = null;
  bindRef = node => {
    this.content = node;
  };

  onEmbedClick = data => e => {
    const maxWidth = 740;
    e.preventDefault();

    let width = data.width;
    let height = data.height;
    let html = data.html;
    if (html.indexOf('<iframe') === 0) {
      html = html.replace(/<iframe /, `<iframe class="${iframe}" `);
      if (width < maxWidth) {
        height = Math.ceil(height * maxWidth / width);
        width = maxWidth;
        html = html
          .replace(/width="[0-9]+"/, `width="${width}"`)
          .replace(/height="[0-9]+"/, `height="${height}"`);
      }
    }

    e.currentTarget.outerHTML = html;
  };

  render() {
    const { data: { error, loading } } = this.props;
    if (error) {
      return <Error />;
    } else if (loading) {
      return <Loading />;
    }

    const {
      viewer: {
        post: {
          id,
          slug,
          date,
          title: { raw: title },
          content: { data: content },
          excerpt: { raw: excerpt },
          featuredMedia,
          tags,
          comments,
        },
      },
    } = this.props.data;

    const [, year, month, day] = dateRegex.exec(date);
    const url = `${SITE_URL}/${year}/${month}/${day}/${slug}`;
    const featuredImage = (featuredMedia && featuredMedia.sourceUrl) || null;

    return (
      <ArticleWrapper>
        <Helmet>
          <title>{title}</title>
          <link rel="canonical" href={url} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content={url} />
          <meta property="og:description" content={excerpt} />
          {featuredImage && <meta property="og:image" content={featuredImage} />}
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={excerpt} />
          {featuredImage && <meta name="twitter:image" content={featuredImage} />}
        </Helmet>
        <header>
          <Title dangerouslySetInnerHTML={{ __html: title }} />
          <Meta>
            Posted:{' '}
            <Link to={`/${year}/${month}`}>
              <FormattedRelative
                value={Date.parse(date)}
                style="numeric" // eslint-disable-line react/style-prop-object
              />
            </Link>
          </Meta>
        </header>
        {featuredMedia && <Media media={featuredMedia} crop={'large'} />}
        <ContentNode
          component={ContentSection}
          content={content}
          onEmbedClick={this.onEmbedClick}
        />
        {tags && (
          <footer>
            Tags:{' '}
            {tags.map(tag => (
              <Tag key={tag.id} to={`/tag/${tag.slug}`}>
                {tag.name}
              </Tag>
            ))}
          </footer>
        )}
        <Comments post={{ id, slug }} comments={comments} />
      </ArticleWrapper>
    );
  }
}
