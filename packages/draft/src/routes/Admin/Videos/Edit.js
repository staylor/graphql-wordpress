import React, { Component, Fragment } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import { ThumbWrapper, thumb480Class } from 'components/Videos/styled';
import { Field, FieldName, FieldValue } from 'components/Field/styled';
import Textarea from 'components/Field/Textarea';
import { Heading, Button } from '../styled';

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
  {
    label: 'Tags',
    prop: 'tags',
    editable: true,
    render: video => video.tags.map(tag => tag.name).join(', '),
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
    tags {
      name
    }
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
  boundRefs = {};

  bindRef = prop => ref => {
    this.boundRefs[prop] = ref;
  };

  onClick = e => {
    e.preventDefault();

    const updates = videoFields.reduce((memo, field) => {
      if (field.editable) {
        memo[field.property] = this.boundRefs[field.property].value;
      }
      return memo;
    }, {});
    if (updates.tags) {
      updates.tags = updates.tags.split(',').map(str => str.trim());
    }

    const { video } = this.props.data;
    this.props.mutate({
      variables: {
        id: video.id,
        input: updates,
      },
    });
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
        <ThumbWrapper>
          <img src={thumb.url} alt={video.title} className={thumb480Class} />
        </ThumbWrapper>
        {videoFields.map(field => (
          <Field key={field.prop}>
            <FieldName>{field.label}</FieldName>
            {field.editable ? (
              <Textarea
                rows="3"
                innerRef={this.bindRef(field.prop)}
                value={field.render ? field.render(video) : video[field.prop]}
              />
            ) : (
              (field.render && field.render(video)) || <FieldValue>{video[field.prop]}</FieldValue>
            )}
          </Field>
        ))}
        <Button onClick={this.onClick}>Update Video</Button>
      </Fragment>
    );
  }
}
