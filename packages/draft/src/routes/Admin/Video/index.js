import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import { ThumbWrapper, thumb480Class } from 'components/Videos/styled';
import { Heading, Field, FieldName, FieldValue } from '../styled';

/* eslint-disable react/prop-types */

@graphql(
  gql`
    query VideoAdminQuery($id: ObjID) {
      video(id: $id) {
        id
        title
        slug
        dataType
        thumbnails {
          url
          width
          height
        }
        dataPlaylistIds
      }
    }
  `,
  {
    options: ({ match: { params } }) => ({
      variables: { id: params.id },
    }),
  }
)
export default class VideoRoute extends Component {
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
        {[
          { label: 'Title', property: 'title' },
          { label: 'Slug', property: 'slug' },
          { label: 'Type', property: 'dataType' },
          { label: 'Playlist IDs', property: 'dataPlaylistIds' },
        ].map(field => (
          <Field key={field.property}>
            <FieldName>{field.label}</FieldName>
            {field.property && <FieldValue>{video[field.property]}</FieldValue>}
            {field.list && <FieldValue>{video[field.list]}</FieldValue>}
          </Field>
        ))}
      </Fragment>
    );
  }
}
