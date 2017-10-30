import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading } from '@wonderboymusic/graphql-wordpress-components';
import { CommentsWrapper } from '@wonderboymusic/graphql-wordpress-components/lib/Comments';
import SingleQuery from 'graphql/query/Single.graphql';
import Walker from './Walker';
import { CommentConnectionType } from './types';
import { COMMENTS_PER_PAGE } from './constants';

export default class Comments extends Component {
  static propTypes = {
    post: PropTypes.shape({
      id: PropTypes.string,
      slug: PropTypes.string,
    }).isRequired,
    comments: CommentConnectionType,
  };

  static defaultProps = {
    comments: null,
  };

  static childContextTypes = {
    queryConfig: PropTypes.object,
    postId: PropTypes.string,
  };

  getChildContext() {
    const { id, slug } = this.props.post;
    // emoji and unicode get encoded
    const decoded = decodeURIComponent(slug);
    return {
      queryConfig: {
        query: SingleQuery,
        variables: {
          commentCount: COMMENTS_PER_PAGE,
          slug: decoded,
        },
      },
      postId: id,
    };
  }

  render() {
    const { comments } = this.props;
    return (
      <CommentsWrapper>
        <Heading>Comments</Heading>
        <Walker comments={comments} />
      </CommentsWrapper>
    );
  }
}
