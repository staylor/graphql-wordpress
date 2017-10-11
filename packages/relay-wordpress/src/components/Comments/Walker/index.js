// @flow
import * as React from 'react';
import { ListItem, nested } from '@wonderboymusic/graphql-wordpress-components/lib/Comments';
import Form from 'components/Comments/Form';
import Comment from 'components/Comments/Comment';
import { sortHierarchy } from 'utils/walker';
import type { CommentsProps } from 'relay-wordpress';

type CommentsState = {
  replyTo: string,
};

export default class CommentsWalker extends React.Component<CommentsProps, CommentsState> {
  static defaultProps = {
    comments: null,
  };

  state = {
    replyTo: null,
  };

  setReplyTo = id => {
    this.setState({ replyTo: id });
  };

  sorted = null;
  level = 0;

  parseComment(comment) {
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

  walk(node) {
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
    if (!this.props.comments) {
      return <Form post={this.props.post} setReplyTo={this.setReplyTo} />;
    }

    const { comments: { edges } } = this.props;
    this.sorted = sortHierarchy(edges.map(edge => edge.node));
    this.level = 0;
    return [
      this.walk(this.sorted.top),
      !this.state.replyTo && (
        <Form key="form" post={this.props.post} setReplyTo={this.setReplyTo} />
      ),
    ];
  }
}
