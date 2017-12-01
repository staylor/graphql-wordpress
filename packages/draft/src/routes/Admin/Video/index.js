import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading';
import { ThumbWrapper, thumb480Class } from 'components/Videos/styled';
import { Field, FieldName, FieldValue } from 'components/Field/styled';
import Input from 'components/Field/Input';
import { Heading, Button } from '../styled';

/* eslint-disable react/prop-types */

const videoFields = [
  { label: 'Title', property: 'title' },
  { label: 'Slug', property: 'slug' },
  { label: 'Type', property: 'dataType' },
  { label: 'Playlist IDs', property: 'dataPlaylistIds' },
  { label: 'Tags', property: 'tags', editable: true },
];

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
        tags
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

    console.log(updates);
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
          <Field key={field.property || field.list}>
            <FieldName>{field.label}</FieldName>
            {field.editable ? (
              <Input innerRef={this.bindRef(field.property)} value={video[field.property]} />
            ) : (
              <FieldValue>{video[field.property]}</FieldValue>
            )}
          </Field>
        ))}
        <Button onClick={this.onClick}>Update Video</Button>
      </Fragment>
    );
  }
}
