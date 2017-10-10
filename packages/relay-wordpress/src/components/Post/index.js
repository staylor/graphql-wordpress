// @flow
import * as React from 'react';
import { graphql } from 'react-relay';
import { routerShape } from 'found/lib/PropTypes';
import { Article, Title, Content } from '@wonderboymusic/graphql-wordpress-components/lib/Post';
import FragmentContainer from 'decorators/FragmentContainer';
import Media from 'containers/Media';
import ContentNode from 'components/ContentNode';
import { dateRegex } from 'utils/regex';
import type { PostProps } from 'relay-wordpress';
import PostLink from './PostLink';

/* eslint-disable react/no-danger */

@FragmentContainer(graphql`
  fragment Post_post on Post {
    id
    date
    content {
      data {
        __typename
        ...ContentNode_content
      }
    }
    excerpt {
      raw
    }
    featuredMedia {
      ...Media_media
    }
    ...PostLink_post
  }
`)
export default class Post extends React.Component<PostProps> {
  props: PostProps;

  static contextTypes = {
    router: routerShape.isRequired,
  };

  onEmbedClick = () => (e: Event) => {
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
