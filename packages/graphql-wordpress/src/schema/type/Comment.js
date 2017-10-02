import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLID } from 'graphql';
import { toGlobalId } from 'graphql-relay';
import Avatar from 'type/Avatar';
import { globalIdField, link } from 'field/identifier';
import { content } from 'field/content';
import { date } from 'field/date';
import metaField from 'field/meta';
import author from 'field/author';

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  description: 'An object.',
  fields: () => ({
    id: globalIdField(),
    ...author,
    ...date,
    ...content,
    ...link,
    post: {
      type: GraphQLID,
      description: 'The ID of the associated post object.',
      resolve: comment => toGlobalId('Post', comment.post),
    },
    parent: {
      type: GraphQLID,
      description: 'The ID for the parent of the object.',
      resolve: comment => (comment.parent > 0 ? toGlobalId('Comment', comment.parent) : null),
    },
    authorName: {
      type: GraphQLString,
      description: 'Display name for the object author.',
    },
    authorUrl: {
      type: GraphQLString,
      description: 'URL for the object author.',
    },
    authorHash: {
      type: GraphQLString,
      description: 'Hashed representation of the comment author.',
    },
    status: {
      type: GraphQLString,
      description: 'State of the object.',
    },
    type: {
      type: GraphQLString,
      description: 'Type of Comment for the object.',
    },
    authorAvatarUrls: {
      type: new GraphQLList(Avatar),
      description: 'Avatar URLs for the object author.',
      resolve: comment =>
        Object.keys(comment.author_avatar_urls).map(key => ({
          size: key,
          url: comment.author_avatar_urls[key],
        })),
    },
    meta: metaField(),
  }),
});

export default CommentType;
