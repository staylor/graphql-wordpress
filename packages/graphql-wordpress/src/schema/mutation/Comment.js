import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId, fromGlobalId } from 'graphql-relay';
import Comment from 'data/Comment';
import CommentType from 'type/Comment';

const requiredFields = {
  authorEmail: {
    type: new GraphQLNonNull(GraphQLString),
  },
  authorName: {
    type: new GraphQLNonNull(GraphQLString),
  },
  content: {
    type: new GraphQLNonNull(GraphQLString),
  },
  post: {
    type: new GraphQLNonNull(GraphQLID),
  },
};

const createCommentMutation = (opts = {}) =>
  mutationWithClientMutationId(
    Object.assign(
      {},
      {
        name: '<FixMe>',
        inputFields: {
          ...requiredFields,
        },
        outputFields: {
          status: {
            type: GraphQLString,
          },
          comment: {
            type: CommentType,
          },
          cookies: {
            type: GraphQLString,
          },
        },
        mutateAndGetPayload: payload => ({
          comment: payload,
          status: '<FixMe>',
          cookies: '<FixMe>',
        }),
      },
      opts
    )
  );

export default {
  addComment: createCommentMutation({
    name: 'AddComment',
    inputFields: {
      ...requiredFields,
      authorUrl: {
        type: GraphQLString,
      },
      parent: {
        type: GraphQLID,
      },
    },
    mutateAndGetPayload: input => {
      if (!input.author && !(input.authorEmail && input.authorName)) {
        return Promise.reject('You must provide author data to create a comment.');
      }

      if (!input.post) {
        return Promise.reject('You must provide a post to assign the comment to.');
      }

      const form = Object.assign({}, input);
      form.post = fromGlobalId(input.post).id;
      if (input.parent) {
        form.parent = fromGlobalId(input.parent).id;
      }
      return Comment.create(form);
    },
  }),
  updateComment: createCommentMutation({
    name: 'UpdateComment',
    inputFields: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      content: {
        type: new GraphQLNonNull(GraphQLString),
      },
      token: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    mutateAndGetPayload: input => {
      if (!input.id) {
        return Promise.reject('You must specify a comment ID to update.');
      }

      const form = Object.assign({}, input);
      form.id = fromGlobalId(form.id).id;
      return Comment.update(form);
    },
  }),
  deleteComment: createCommentMutation({
    name: 'DeleteComment',
    inputFields: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      token: {
        type: new GraphQLNonNull(GraphQLString),
      },
      post: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    outputFields: {
      status: {
        type: GraphQLString,
      },
    },
    mutateAndGetPayload: input => {
      if (!input.id) {
        return Promise.reject('You must specify a comment ID to update.');
      }

      const form = Object.assign({}, input);
      form.id = fromGlobalId(form.id).id;
      form.post = fromGlobalId(form.post).id;
      return Comment.delete(form);
    },
  }),
};
