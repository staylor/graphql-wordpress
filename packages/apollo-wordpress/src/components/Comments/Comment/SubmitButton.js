import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { SubmitButton as Button } from 'wp-styled-components';
import UpdateCommentMutation from 'graphql/UpdateComment_Mutation.graphql';
import { newlineRegex } from 'utils/regex';
import { CommentType } from 'components/Comments/types';

@graphql(UpdateCommentMutation)
export default class SubmitButton extends Component {
  static contextTypes = {
    queryConfig: PropTypes.object,
  };

  static propTypes = {
    content: PropTypes.string.isRequired,
    mutate: PropTypes.func.isRequired,
    comment: CommentType.isRequired,
    token: PropTypes.string.isRequired,
    onEditSubmit: PropTypes.func.isRequired,
  };

  onEdit = e => {
    e.preventDefault();

    this.props.onEditSubmit();

    const variables = {
      input: {
        id: this.props.comment.id,
        content: this.props.content,
        token: this.props.token,
      },
    };

    const content = {
      __typename: 'Content',
      rendered: `<p>${variables.input.content.replace(newlineRegex, '<br />')}</p>`,
      raw: variables.input.content,
    };

    const optimisticResponse = {
      updateComment: {
        __typename: 'UpdateCommentPayload',
        comment: {
          __typename: 'Comment',
          ...this.props.comment,
          content,
        },
        status: 'update',
        cookies: '',
      },
    };

    const queryVars = {
      ...this.context.queryConfig,
    };

    this.props.mutate({
      variables,
      optimisticResponse,
      refetchQueries: [queryVars],
      update: (store, { data: { updateComment } }) => {
        const data = store.readQuery(queryVars);
        const comment = data.viewer.post.comments.edges.find(
          ({ node }) => node.id === updateComment.comment.id
        );
        comment.content = content;
        store.writeQuery({ ...queryVars, data });
      },
    });
  };

  render() {
    return (
      <Button type="submit" onClick={this.onEdit}>
        Submit
      </Button>
    );
  }
}
