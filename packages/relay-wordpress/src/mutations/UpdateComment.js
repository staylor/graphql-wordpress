import { graphql, commitMutation } from 'react-relay';
import { newlineRegex } from 'utils/regex';

const UpdateCommentMutation = graphql`
  mutation UpdateComment_Mutation($input: UpdateCommentInput!) {
    updateComment(input: $input) {
      comment {
        id
        authorName
        authorUrl
        date
        content {
          rendered
        }
        authorAvatarUrls {
          size
          url
        }
        parent
      }
      cookies
      status
    }
  }
`;

const commit = (environment, variables, comment, onCompleted) => {
  const content = {
    rendered: `<p>${variables.input.content.replace(newlineRegex, '<br />')}</p>`,
    raw: variables.input.content,
  };

  const optimisticResponse = {
    updateComment: {
      comment: {
        ...comment,
        content,
      },
      status: 'update',
      cookies: '',
    },
  };

  const updater = store => {
    const payload = store.getRootField('updateComment');
    const updatedComment = payload.getLinkedRecord('comment');
    if (!updatedComment) {
      return;
    }
    const storeComment = store.get(comment.id);
    storeComment.copyFieldsFrom(updatedComment);
  };

  commitMutation(environment, {
    mutation: UpdateCommentMutation,
    variables,
    onCompleted: response => {
      if (response.updateComment && onCompleted) {
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
