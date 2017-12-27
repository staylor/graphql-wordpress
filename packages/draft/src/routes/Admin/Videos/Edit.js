import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import Message from 'components/Form/Message';
import { ThumbWrapper, thumb480Class } from 'components/Videos/styled';
import Form from 'components/Form';
import { Heading, FormWrap } from 'routes/Admin/styled';

/* eslint-disable react/prop-types */

const videoFields = [
  { label: 'Title', prop: 'title' },
  { label: 'Slug', prop: 'slug' },
  { label: 'Type', prop: 'dataType' },
  {
    label: 'Playlist',
    prop: 'dataPlaylistIds',
    render: video => (
      <a href={`https://www.youtube.com/playlist?list=${video.dataPlaylistIds[0]}`}>
        View {video.year} Playlist
      </a>
    ),
  },
];

const frag = gql`
  fragment AdminVideo_video on Video {
    id
    title
    slug
    dataType
    thumbnails {
      url
      width
      height
    }
    year
    dataPlaylistIds
  }
`;

@compose(
  graphql(
    gql`
      query VideoAdminQuery($id: ObjID) {
        video(id: $id) {
          ...AdminVideo_video
        }
      }
      ${frag}
    `,
    {
      options: ({ match: { params } }) => ({
        variables: { id: params.id },
      }),
    }
  ),
  graphql(gql`
    mutation UpdateVideoMutation($id: ObjID!, $input: UpdateVideoInput!) {
      updateVideo(id: $id, input: $input) {
        ...AdminVideo_video
      }
    }
    ${frag}
  `)
)
export default class VideoRoute extends Component {
  state = {
    message: null,
  };

  onSubmit = (e, updates) => {
    const { video } = this.props.data;
    this.props
      .mutate({
        variables: {
          id: video.id,
          input: updates,
        },
      })
      .then(() => {
        this.setState({ message: 'updated' });
        document.documentElement.scrollTop = 0;
      })
      .catch(() => this.setState({ message: 'error' }));
  };

  render() {
    const { data: { loading, video } } = this.props;

    if (loading && !video) {
      return <Loading />;
    }

    const thumb = video.thumbnails.find(t => t.width === 480);

    return (
      <Fragment>
        <Heading>Edit Video</Heading>
        {this.state.message === 'updated' && <Message text="Video updated." />}
        <ThumbWrapper>
          <img src={thumb.url} alt={video.title} className={thumb480Class} />
        </ThumbWrapper>
        <FormWrap>
          <Form
            fields={videoFields}
            data={video}
            buttonLabel="Update Video"
            onSubmit={this.onSubmit}
          />
        </FormWrap>
      </Fragment>
    );
  }
}
