import { graphql, commitMutation } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import md5 from 'md5';
import { newlineRegex } from 'utils/regex';

const AddCommentMutation = graphql`
  mutation AddComment_Mutation($input: AddCommentInput!) {
    addComment(input: $input) {
      comment {
        id
        authorName
        authorUrl
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
      }
      cookies
      status
    }
  }
`;

const commit = (environment, variables, onCompleted = null) => {
  const optimisticResponse = {
    addComment: {
      comment: {
        id: null,
        authorName: variables.input.authorName,
        authorEmail: variables.input.authorEmail,
        authorUrl: variables.input.authorUrl,
        date: new Date().toISOString(),
        content: {
          rendered: `<p>${variables.input.content.replace(newlineRegex, '<br />')}</p>`,
        },
        authorAvatarUrls: [
          {
            size: 48,
            url: `http://2.gravatar.com/avatar/${md5(variables.input.authorEmail)}?s=48&d=mm&r=g`,
          },
        ],
        parent: variables.input.parent || null,
      },
      status: 'new',
      cookies: '',
    },
  };

  const updater = store => {
    const payload = store.getRootField('addComment');
    const newComment = payload.getLinkedRecord('comment');
    if (!newComment) {
      return;
    }
    const post = store.get(variables.input.post);
    const connection = ConnectionHandler.getConnection(post, 'Single_post_comments', {
      post: variables.input.post,
    });
    const newEdge = ConnectionHandler.createEdge(store, connection, newComment, 'CommentEdge');
    ConnectionHandler.insertEdgeAfter(connection, newEdge);
  };

  commitMutation(environment, {
    mutation: AddCommentMutation,
    variables,
    onCompleted: response => {
      if (response.addComment && response.addComment.cookies) {
        const values = response.addComment.cookies.split(',');
        values.forEach(cookie => {
          document.cookie = cookie;
        });

        if (onCompleted) {
          onCompleted(response);
        }
      }
    },
    // eslint-disable-next-line no-console
    onError: err => console.error(err),
    updater,
    optimisticUpdater: updater,
    optimisticResponse,
  });
};

// eslint-disable-next-line import/prefer-default-export
export default { commit };
