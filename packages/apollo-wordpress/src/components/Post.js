import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { routerShape } from 'found/lib/PropTypes';
import { Article, Title, Content } from 'wp-styled-components/lib/Post';
import Media from 'containers/Media';
import ContentNode from 'components/ContentNode';
import { dateRegex } from 'utils/regex';
import PostLink from './PostLink';

/* eslint-disable react/no-danger */

export default class Post extends Component {
  static propTypes = {
    post: PropTypes.shape({
      id: PropTypes.string,
      slug: PropTypes.string,
      date: PropTypes.string,
      title: PropTypes.object,
      content: PropTypes.object,
      excerpt: PropTypes.object,
      featuredMedia: PropTypes.object,
    }).isRequired,
  };

  static contextTypes = {
    router: routerShape.isRequired,
  };

  content = null;
  bindRef = node => {
    this.content = node;
  };

  onEmbedClick = () => e => {
    e.preventDefault();

    const { id, date } = this.props.post;
    const [, year, month, day] = dateRegex.exec(date);
    const url = `/${year}/${month}/${day}/${id}`;

    this.context.router.push(url);
  };

  render() {
    const { content: { data: content }, excerpt, featuredMedia } = this.props.post;
    const isEmbed = content && content.length && content[0].__typename === 'Embed';

    return (
      <Article>
        <header>
          <Title>
            <PostLink post={this.props.post} />
          </Title>
        </header>
        {featuredMedia && (
          <PostLink post={this.props.post}>
            <Media media={featuredMedia} />
          </PostLink>
        )}
        {isEmbed ? (
          <ContentNode component={Content} content={content} onEmbedClick={this.onEmbedClick} />
        ) : (
          <Content>{excerpt.raw}</Content>
        )}
      </Article>
    );
  }
}
