import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Video from './Video';

/* eslint-disable react/prop-types */

@graphql(
  gql`
    query VideoQuery($id: String) {
      video(id: $id) {
        id
        ...Video_video
      }
    }
    ${Video.fragments.video}
  `,
  {
    options: () => ({
      variables: { first: 10 },
    }),
  }
)
export default class Video extends Component {
  render() {
    const { data: { loading, video } } = this.props;

    if (loading && !video) {
      return null;
    }

    return <Video key={video.id} video={video} />;
  }
}
