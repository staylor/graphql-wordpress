import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { DeleteButton as Button } from 'wp-styled-components/lib/Comments';
import DeleteCommentMutation from 'graphql/DeleteComment_Mutation.graphql';
import { CommentType } from '../types';

@graphql(DeleteCommentMutation)
export default class DeleteButton extends Component {
  static contextTypes = {
    queryConfig: PropTypes.object,
    post: PropTypes.object,
  };

  static propTypes = {
    mutate: PropTypes.func.isRequired,
    editToken: PropTypes.string.isRequired,
    comment: CommentType.isRequired,
  };

  onDelete = () => {
    const optimisticResponse = {
      deleteComment: {
        __typename: 'DeleteCommentPayload',
        status: 'pending',
      },
    };

    const variables = {
      input: {
        id: this.props.comment.id,
        post: this.props.comment.post,
        token: this.props.editToken,
      },
    };

    const queryVars = {
      ...this.context.queryConfig,
    };

    this.props.mutate({
      variables,
      optimisticResponse,
      refetchQueries: [queryVars],
      update: (store, { data: { deleteComment } }) => {
        if (deleteComment.status === 'pending') {
          return;
        }
        const data = store.readQuery(queryVars);
        const edges = data.viewer.post.comments.edges;
        const commentIndex = edges.find(
          ({ node }, index) => node.id === this.props.comment.id && index
        );
        edges.splice(commentIndex, 1);
        store.writeQuery({ ...queryVars, data });
      },
    });
  };

  render() {
    return <Button onClick={this.onDelete}>Delete</Button>;
  }
}
