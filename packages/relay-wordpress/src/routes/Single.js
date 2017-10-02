// @flow
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'react-relay';
import { Link } from 'found';
import { FormattedRelative } from 'react-intl';
import { ArticleWrapper, ContentSection, Error } from 'wp-styled-components';
import { iframe, Title, Meta, Tag } from 'wp-styled-components/lib/Single';
import FragmentContainer from 'decorators/FragmentContainer';
import Media from 'containers/Media';
import ContentNode from 'components/ContentNode';
import Comments from 'components/Comments';
import { dateRegex } from 'utils/regex';
import { SITE_URL } from 'utils/constants';
import type { SingleProps, Embed } from 'relay-wordpress';

@FragmentContainer(graphql`
  fragment Single_viewer on Viewer {
    post(id: $id) {
      id
      date
      title {
        raw
      }
      content {
        data {
          ...ContentNode_content
        }
      }
      excerpt {
        raw
      }
      featuredMedia {
        ...Media_media
        ... on Image {
          sourceUrl
        }
      }
      tags {
        id
        name
        slug
      }
      comments(post: $id, first: 100) @connection(key: "Single_post_comments") {
        edges {
          node {
            id
            parent
            ...Comment_comment
          }
        }
      }
    }
  }
`)
export default class Single extends Component {
  props: SingleProps;

  onEmbedClick = (data: Embed) => (e: Event & { currentTarget: HTMLElement }) => {
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
    if (!this.props.viewer.post) {
      return <Error />;
    }

    const {
      post: { id, date, title, content: { data: content }, excerpt, featuredMedia, tags, comments },
    } = this.props.viewer;

    const [, year, month, day] = dateRegex.exec(date);
    const url = `${SITE_URL}/${year}/${month}/${day}/${id}`;
    const featuredImage = (featuredMedia && featuredMedia.sourceUrl) || null;

    return (
      <ArticleWrapper>
        <Helmet>
          <title>{title.raw}</title>
          <link rel="canonical" href={url} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={title.raw} />
          <meta property="og:url" content={url} />
          <meta property="og:description" content={excerpt.raw} />
          {featuredImage && <meta property="og:image" content={featuredImage} />}
          <meta name="twitter:title" content={title.raw} />
          <meta name="twitter:description" content={excerpt.raw} />
          {featuredImage && <meta name="twitter:image" content={featuredImage} />}
        </Helmet>
        <header>
          <Title>{title.raw}</Title>
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
        <Comments post={id} comments={comments} />
      </ArticleWrapper>
    );
  }
}
