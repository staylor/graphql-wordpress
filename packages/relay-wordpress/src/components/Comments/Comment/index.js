// @flow
import * as React from 'react';
import md5 from 'md5';
import { graphql, createFragmentContainer } from 'react-relay';
import { withCookies } from 'react-cookie';
import {
  CommentWrapper,
  Meta,
  Image,
  Author,
  Time,
  Content,
  Reply,
  activeReply,
  Actions,
  EditButton,
  DeleteButton,
} from '@wonderboymusic/graphql-wordpress-components/lib/Comments';
import { injectIntl } from 'react-intl';
import type { intlShape } from 'react-intl';
import { AUTHOR_EMAIL_COOKIE } from 'components/Comments/constants';
import DeleteCommentMutation from 'mutations/DeleteComment';
import type { Comment as CommentType } from 'relay-wordpress';
import EditComment from './Edit';

type CommentProps = {
  cookies: any,
  active: boolean,
  setReplyTo: (id: string) => void,
  comment: CommentType,
  intl: intlShape,
  relay: Object,
};

type CommentState = {
  editing: boolean,
};

/* eslint-disable react/no-danger */
/* eslint-disable react/forbid-prop-types */

@withCookies
class Comment extends React.Component<CommentProps, CommentState> {
  editToken = null;

  state = {
    editing: false,
  };

  onClick = (id: string) => {
    if (this.props.active) {
      this.props.setReplyTo('');
    } else {
      this.props.setReplyTo(id);
    }
  };

  onEditClick = () => {
    this.setState({
      editing: true,
    });
  };

  onEditSubmit = () => {
    this.setState({
      editing: false,
    });
  };

  onDelete = () => {
    DeleteCommentMutation.commit(this.props.relay.environment, {
      comment: this.props.comment,
      token: this.editToken,
    });
  };

  viewerOwns() {
    const { comment, cookies } = this.props;
    const authorEmail = cookies.get(AUTHOR_EMAIL_COOKIE);
    if (!authorEmail) {
      return false;
    }
    const tokenKey = encodeURIComponent(`token_${comment.id}`);
    this.editToken = cookies.get(tokenKey);
    if (!this.editToken) {
      return false;
    }
    const values = md5(`${comment.id}${authorEmail}`);
    return values === this.props.comment.authorHash;
  }

  render() {
    const {
      comment: {
        id,
        date,
        authorUrl,
        authorName,
        authorAvatarUrls,
        content: { rendered: content },
      },
    } = this.props;
    const avatar = authorAvatarUrls && authorAvatarUrls.find(data => data.size === 48);
    let authorDisplay = authorName;
    if (authorUrl) {
      authorDisplay = <a href={authorUrl}>{authorName}</a>;
    }

    let commentContent = null;
    if (this.state.editing) {
      commentContent = (
        <EditComment
          token={this.editToken}
          comment={this.props.comment}
          onEditSubmit={this.onEditSubmit}
        />
      );
    } else {
      commentContent = <Content dangerouslySetInnerHTML={{ __html: content }} />;
    }

    return (
      <CommentWrapper>
        <Meta>
          {avatar ? <Image alt="" src={avatar.url} /> : null}
          <Author>{authorDisplay}</Author>
          <Time>{this.props.intl.formatRelative(date)}</Time>
        </Meta>
        {commentContent}
        <Reply className={this.props.active ? activeReply : null} onClick={() => this.onClick(id)}>
          ↵
        </Reply>
        {this.viewerOwns() &&
          !this.state.editing && (
            <Actions>
              <EditButton onClick={this.onEditClick}>Edit</EditButton>
              <DeleteButton onClick={this.onDelete}>Delete</DeleteButton>
            </Actions>
          )}
      </CommentWrapper>
    );
  }
}

export default createFragmentContainer(
  injectIntl(Comment),
  graphql`
    fragment Comment_comment on Comment {
      id
      authorName
      authorUrl
      authorHash
      date
      content {
        rendered
        raw
      }
      authorAvatarUrls {
        size
        url
      }
      parent
      post
    }
  `
);
