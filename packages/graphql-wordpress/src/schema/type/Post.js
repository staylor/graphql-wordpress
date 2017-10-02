import { GraphQLObjectType, GraphQLList } from 'graphql';
import PostInterface from 'interface/Post';
import CategoryType from 'type/Category';
import TagType from 'type/Tag';
import commentConnection from 'connection/Comment';
import { globalIdField, slug, guid, link } from 'field/identifier';
import { title, content, excerpt } from 'field/content';
import { date, modified } from 'field/date';
import { commentStatus, pingStatus } from 'field/status';
import { type, template, format, sticky } from 'field/post';
import { featuredMedia } from 'field/media';
import metaField from 'field/meta';
import author from 'field/author';
import { registerNodeType, NodeInterface } from 'type/relayNode';

const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'A read-only post object.',
  interfaces: [PostInterface, NodeInterface],
  isTypeOf(post) {
    return post.type === 'post';
  },
  fields: () => ({
    id: globalIdField(),
    ...date,
    ...guid,
    ...modified,
    ...slug,
    ...type,
    ...link,
    ...title,
    ...content,
    ...excerpt,
    ...commentStatus,
    ...pingStatus,
    ...template,
    ...format,
    ...author,
    featuredMedia: featuredMedia(),
    meta: metaField(),
    // extra post fields
    ...sticky,
    categories: {
      type: new GraphQLList(CategoryType),
      description: 'The terms assigned to the object in the category taxonomy.',
      resolve: ({ categories }, args, context, { rootValue: { loaders: { Category } } }) => {
        if (categories.length) {
          return Category.loadMany(categories);
        }
        return null;
      },
    },
    tags: {
      type: new GraphQLList(TagType),
      description: 'The terms assigned to the object in the post_tag taxonomy.',
      resolve: ({ tags }, args, context, { rootValue: { loaders: { Tag } } }) => {
        if (tags.length) {
          return Tag.loadMany(tags);
        }
        return null;
      },
    },
    comments: commentConnection,
  }),
});

registerNodeType(PostType);

export default PostType;
