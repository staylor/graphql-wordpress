import React, { Component } from 'react';
import PropTypes from 'prop-types';
import md5 from 'md5';
import { withCookies, Cookies } from 'react-cookie';
import { intlShape } from 'react-intl';
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
} from 'wp-styled-components/lib/Comments';
import withIntl from 'decorators/withIntl';
import EditComment from './Edit';
import DeleteButton from './DeleteButton';
import { AUTHOR_EMAIL_COOKIE } from '../constants';
import { CommentType } from '../types';

/* eslint-disable react/no-danger */
/* eslint-disable react/forbid-prop-types */

@withIntl
@withCookies
export default class Comment extends Component {
  static propTypes = {
    cookies: PropTypes.instanceOf(Cookies).isRequired,
    active: PropTypes.bool.isRequired,
    setReplyTo: PropTypes.func.isRequired,
    comment: CommentType.isRequired,
    intl: intlShape.isRequired,
  };

  editToken = null;

  state = {
    editing: false,
  };

  onClick = id => {
    if (this.props.active) {
      this.props.setReplyTo(null);
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
      id,
      date,
      authorUrl,
      authorName,
      authorAvatarUrls,
      content: { rendered: content },
    } = this.props.comment;
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
              <DeleteButton editToken={this.editToken} comment={this.props.comment} />
            </Actions>
          )}
      </CommentWrapper>
    );
  }
}
