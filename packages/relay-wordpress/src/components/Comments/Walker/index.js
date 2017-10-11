// @flow
import * as React from 'react';
import { ListItem, nested } from '@wonderboymusic/graphql-wordpress-components/lib/Comments';
import Form from 'components/Comments/Form';
import Comment from 'components/Comments/Comment';
import { sortHierarchy } from 'utils/walker';
import type { Connection, Comment as CommentType } from 'relay-wordpress';

type CommentsWalkerProps = {
  post: string,
  comments: Connection<CommentType>,
};

type CommentsState = {
  replyTo: string,
};

// $FlowFixMe
export default class CommentsWalker extends React.Component<CommentsWalkerProps, CommentsState> {
  static defaultProps = {
    comments: null,
  };

  state = {
    replyTo: '',
  };

  setReplyTo = (id: string = ''): ListItem => {
    this.setState({ replyTo: id });
  };

  sorted = {};
  level = 0;

  parseComment(comment: CommentType) {
    const { id } = comment;
    if (this.sorted[id]) {
      this.level += 1;
    }

    const active = this.state.replyTo === id;

    return (
      <ListItem key={id}>
        <Comment comment={comment} active={active} setReplyTo={this.setReplyTo} />
        {this.sorted[id] ? this.walk(this.sorted[id]) : null}
        {active ? <Form post={this.props.post} replyTo={id} setReplyTo={this.setReplyTo} /> : null}
      </ListItem>
    );
  }

  walk(node: any): any {
    return (
      <ul key={`level-${this.level}`} className={this.level ? nested : null}>
        {node.map(child => {
          if (!child.parent) {
            this.level = 0;
          }
          return this.parseComment(child);
        })}
      </ul>
    );
  }

  render() {
    const { post, comments } = this.props;
    if (!comments) {
      return <Form post={post} setReplyTo={this.setReplyTo} />;
    }

    const nodes = comments.edges.map(({ node }): Comment => node);
    this.sorted = sortHierarchy(nodes);
    this.level = 0;
    return [
      this.walk(this.sorted.top),
      !this.state.replyTo && <Form key="form" post={post} setReplyTo={this.setReplyTo} />,
    ];
  }
}
