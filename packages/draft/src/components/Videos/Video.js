// @flow
import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { Heading } from 'styles/utils';
import {
  VideoLink,
  embedVideoLink,
  Placeholder,
  Title,
  EmbedTitle,
  iframeClass,
  thumb640Class,
  thumb480Class,
} from './styled';

type Thumbnail = {
  width: number,
  height: number,
  url: string,
  className?: string,
};

type Props = {
  video: {
    dataId: string,
    title: string,
    slug: string,
    thumbnails: Array<Thumbnail>,
  },
  single: boolean,
  embed: boolean,
};

const maxWidth = 640;

const findThumb = (thumbs: Array<Thumbnail>, { single, embed }) => {
  const sizes = embed || single ? [640, 480, 320] : [480, 640, 320];
  let thumb = thumbs.find(t => t.width === sizes[0]);
  if (thumb) {
    thumb = Object.assign({}, thumb);
    thumb.className = thumb480Class;
  } else {
    thumb = thumbs.find(t => t.width === sizes[1]);
    if (thumb) {
      thumb = Object.assign({}, thumb);
      thumb.className = thumb640Class;
    } else {
      thumb = thumbs.find(t => t.width === sizes[2]);
    }
  }
  return thumb;
};

export default class Video extends Component<Props> {
  onClick = (e: Event & { currentTarget: HTMLElement }) => {
    e.preventDefault();

    const iframe = document.createElement('iframe');
    // $FlowFixMe
    iframe.height = `${Math.ceil(9 / 16 * e.currentTarget.offsetWidth)}`;
    iframe.width = `${maxWidth}`;
    iframe.className = this.props.embed ? '' : iframeClass;
    iframe.frameBorder = '0';
    iframe.src = `https://www.youtube.com/embed/${this.props.video.dataId}?autoplay=1`;

    // $FlowFixMe
    e.currentTarget.innerHTML = iframe.outerHTML;
  };

  render() {
    const { video, single = false, embed = false } = this.props;
    const thumb = findThumb(video.thumbnails, { single, embed });

    const placeholder = (
      <Placeholder>
        {thumb && <img src={thumb.url} alt={video.title} className={thumb && thumb.className} />}
        <figcaption>{video.title}</figcaption>
      </Placeholder>
    );

    if (embed) {
      return (
        <Fragment>
          <VideoLink
            to={`/video/${video.slug}`}
            onClick={this.onClick}
            width={thumb ? thumb.width : maxWidth}
            className={embedVideoLink}
          >
            {placeholder}
          </VideoLink>
          <EmbedTitle>
            {single ? video.title : <Link to={`/video/${video.slug}`}>{video.title}</Link>}
          </EmbedTitle>
        </Fragment>
      );
    }

    return (
      <article>
        {single ? (
          <Heading>{video.title}</Heading>
        ) : (
          <Title>
            <Link to={`/video/${video.slug}`}>{video.title}</Link>
          </Title>
        )}

        <VideoLink to={`/video/${video.slug}`} onClick={this.onClick}>
          {placeholder}
        </VideoLink>
      </article>
    );
  }
}

// $FlowFixMe
Video.fragments = {
  video: gql`
    fragment Video_video on Video {
      dataId
      title
      slug
      thumbnails {
        width
        height
        url
      }
    }
  `,
};
