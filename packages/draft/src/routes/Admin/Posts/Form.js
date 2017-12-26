import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { settingsShape } from 'types/PropTypes';
import Editor from 'components/Editor';
import Form from 'routes/Admin/Form';
import FeaturedMedia from './FeaturedMedia';
import { postTitleClass } from './styled';

/* eslint-disable react/prop-types */

const postFields = settings => [
  {
    prop: 'slug',
    render: post => {
      if (!post.slug) {
        return null;
      }

      const url = `${settings.siteUrl}/post/${post.slug}`;
      return (
        <Fragment>
          <strong>Permalink:</strong>{' '}
          <a href={url} target="_blank">
            {url}
          </a>
        </Fragment>
      );
    },
  },
  {
    prop: 'title',
    editable: true,
    className: postTitleClass,
    placeholder: 'Add a Title',
  },
  {
    prop: 'contentState',
    type: 'editor',
    editable: true,
    placeholder: 'Post goes here...',
  },
  {
    label: 'Summary',
    prop: 'summary',
    type: 'textarea',
    editable: true,
  },
  () => {
    let featuredMedia = [];
    const onChange = value => {
      featuredMedia = value;
    };
    return {
      prop: 'featuredMedia',
      type: 'custom',
      editable: true,
      value: () => featuredMedia,
      render: post => <FeaturedMedia onChange={onChange} media={post.featuredMedia} />,
    };
  },
  {
    prop: 'status',
    type: 'select',
    editable: true,
    choices: [{ label: 'Publish', value: 'PUBLISH' }, { label: 'Draft', value: 'DRAFT' }],
  },
];

export default function PostForm({ post = {}, buttonLabel = 'Submit', onSubmit }, { settings }) {
  return <Form fields={postFields(settings)} data={post} {...{ buttonLabel, onSubmit }} />;
}

PostForm.contextTypes = {
  settings: settingsShape,
};

PostForm.fragments = {
  post: gql`
    fragment PostForm_post on Post {
      id
      title
      slug
      contentState {
        ...Editor_contentState
      }
      summary
      status
      featuredMedia {
        ...FeaturedMedia_media
      }
    }
    ${Editor.fragments.contentState}
    ${FeaturedMedia.fragments.media}
  `,
};
