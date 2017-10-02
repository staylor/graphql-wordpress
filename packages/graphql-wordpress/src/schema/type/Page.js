import { GraphQLObjectType, GraphQLInt } from 'graphql';
import PostInterface from 'interface/Post';
import { globalIdField, slug, guid, link } from 'field/identifier';
import { title, content, excerpt } from 'field/content';
import { date, modified } from 'field/date';
import metaField from 'field/meta';
import { type, template } from 'field/post';
import { commentStatus, pingStatus } from 'field/status';
import { featuredMedia } from 'field/media';
import author from 'field/author';
import { registerNodeType, NodeInterface } from 'type/relayNode';

const PageType = new GraphQLObjectType({
  name: 'Page',
  description: 'An object.',
  interfaces: [PostInterface, NodeInterface],
  isTypeOf(page) {
    return page.type === 'page';
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
    ...author,
    featuredMedia: featuredMedia(),
    meta: metaField(),
    // extra page fields
    parent: {
      type: PageType,
      description: 'The ID for the parent of the object.',
      resolve: (page, args, context, { rootValue: { loaders: { Page } } }) =>
        page.parent > 0 ? Page.load(page.parent) : null,
    },
    menuOrder: {
      type: GraphQLInt,
      description: 'The order of the object in relation to other object of its type.',
    },
  }),
});

registerNodeType(PageType);

export default PageType;
