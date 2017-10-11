// @flow
import { graphql, commitMutation } from 'react-relay';
import type { Environment, Variables } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';

const DeleteCommentMutation = graphql`
  mutation DeleteComment_Mutation($input: DeleteCommentInput!) {
    deleteComment(input: $input) {
      status
    }
  }
`;

const commit = (environment: Environment, { comment, token }: Variables, onCompleted: any) => {
  const optimisticResponse = {
    deleteComment: {
      status: 'pending',
    },
  };

  const updater = store => {
    const payload = store.getRootField('deleteComment');
    if (payload.getValue('status') !== 'delete') {
      return;
    }
    const post = store.get(comment.post);
    const connection = ConnectionHandler.getConnection(post, 'Single_post_comments', {
      post: comment.post,
    });
    ConnectionHandler.deleteNode(connection, comment.id);
  };

  commitMutation(environment, {
    mutation: DeleteCommentMutation,
    variables: {
      input: {
        id: comment.id,
        post: comment.post,
        token,
      },
    },
    onCompleted: response => {
      if (response.deleteComment && onCompleted) {
        onCompleted(response);
      }
    },
    // eslint-disable-next-line no-console
    onError: err => console.error(err),
    updater,
    optimisticUpdater: updater,
    optimisticResponse,
  });
};

export default { commit };
