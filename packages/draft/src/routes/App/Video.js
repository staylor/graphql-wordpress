import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Helmet from 'react-helmet-async';
import Video from 'components/Videos/Video';

/* eslint-disable react/prop-types */

@graphql(
  gql`
    query VideoQuery($slug: String) {
      video(slug: $slug) {
        ...Video_video
      }
    }
    ${Video.fragments.video}
  `,
  {
    options: ({ match: { params } }) => ({
      variables: { slug: params.slug },
    }),
  }
)
export default class VideoRoute extends Component {
  render() {
    const { data: { loading, video } } = this.props;

    if (loading && !video) {
      return null;
    }

    return (
      <Fragment>
        <Helmet>
          <title>{video.title}</title>
        </Helmet>
        <Video single video={video} />
      </Fragment>
    );
  }
}
