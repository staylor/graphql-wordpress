import { GraphQLID, GraphQLString } from 'graphql';
import {
  connectionArgs,
  connectionFromArraySlice,
  fromGlobalId,
  connectionDefinitions,
} from 'graphql-relay';
import Comment from 'data/Comment';
import CommentType from 'type/Comment';
import COMMENT_ORDERBY from 'enum/CommentOrderby';
import ORDER from 'enum/Order';

const { connectionType: CommentConnection } = connectionDefinitions({
  nodeType: CommentType,
});

export default {
  type: CommentConnection,
  args: {
    post: {
      type: GraphQLID,
      description: 'Limit result set to resources assigned to a specific post id.',
    },
    slug: {
      type: GraphQLString,
      description: 'Limit result set to resources assigned to a specific post slug.',
    },
    orderby: {
      type: COMMENT_ORDERBY,
      description: 'Sort collection by object attribute.',
    },
    order: {
      type: ORDER,
      description: 'Order sort attribute ascending or descending.',
    },
    ...connectionArgs,
  },
  description: 'A list of results',
  resolve: async (root, args, context, { rootValue: { loaders: { Post } } }) => {
    const connectionArguments = {};
    const params = Object.assign({}, args);
    if (params.first) {
      params.per_page = params.first;
      connectionArguments.first = params.first;
      params.order = 'asc';
    } else if (params.last) {
      params.per_page = params.last;
      connectionArguments.last = params.last;
    } else {
      params.per_page = 100;
    }

    if (params.post) {
      params.post = fromGlobalId(params.post).id;
    } else if (params.slug) {
      params.post = await Post.loadBySlug(params.slug).then(post => post.id);
      delete params.slug;
    }

    delete params.first;
    delete params.last;
    delete params.after;
    delete params.before;

    return Comment.collection(params).then(({ items, total }) =>
      connectionFromArraySlice(items, connectionArguments, {
        arrayLength: total ? parseInt(total, 10) : items.length,
        sliceStart: params.offset || 0,
      })
    );
  },
};
