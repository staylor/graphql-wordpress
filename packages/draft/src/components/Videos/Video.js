import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { VideoLink, Placeholder, Title, iframeClass, thumb640Class, thumb480Class } from './styled';

/* eslint-disable react/prop-types */

const maxWidth = 640;

const findThumb = thumbs => {
  let thumb = thumbs.find(t => t.width === 480);
  if (thumb) {
    thumb = Object.assign({}, thumb);
    thumb.className = thumb480Class;
  } else {
    thumb = thumbs.find(t => t.width === 640);
    if (thumb) {
      thumb = Object.assign({}, thumb);
      thumb.className = thumb640Class;
    } else {
      thumb = thumbs.find(t => t.width === 320);
    }
  }
  return thumb;
};

export default class Video extends Component {
  onClick = thumb => e => {
    e.preventDefault();

    const iframe = document.createElement('iframe');
    if (e.currentTarget.offsetWidth <= maxWidth) {
      iframe.height = Math.ceil(thumb.height * e.currentTarget.offsetWidth / thumb.width);
      iframe.width = maxWidth;
    } else {
      iframe.width = thumb.width;
      iframe.height = thumb.height;
    }
    iframe.className = iframeClass;
    iframe.frameBorder = 0;
    iframe.src = `https://www.youtube.com/embed/${this.props.video.dataId}?autoplay=1`;

    e.currentTarget.innerHTML = iframe.outerHTML;
  };

  render() {
    const { video, link = true } = this.props;
    const thumb = findThumb(video.thumbnails);

    return (
      <article>
        <Title>{link ? <Link to={`/video/${video.slug}`}>{video.title}</Link> : video.title}</Title>
        <VideoLink
          to={`/video/${video.slug}`}
          onClick={this.onClick(thumb)}
          width={thumb ? thumb.width : maxWidth}
        >
          <Placeholder>
            {thumb && (
              <img src={thumb.url} alt={video.title} className={thumb && thumb.className} />
            )}
            <figcaption>{video.title}</figcaption>
          </Placeholder>
        </VideoLink>
      </article>
    );
  }
}

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
