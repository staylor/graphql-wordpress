import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const EmbedType = new GraphQLObjectType({
  name: 'Embed',
  description: 'An embed node.',
  isTypeOf(node) {
    return node.type === 'embed';
  },
  fields: () => ({
    version: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    html: {
      type: GraphQLString,
    },
    providerUrl: {
      type: GraphQLString,
      resolve: node => node.provider_url,
    },
    providerName: {
      type: GraphQLString,
      resolve: node => node.provider_name,
    },
    authorName: {
      type: GraphQLString,
      resolve: node => node.author_name,
    },
    authorUrl: {
      type: GraphQLString,
      resolve: node => node.author_url,
    },
    thumbnailUrl: {
      type: GraphQLString,
      resolve: node => node.thumbnail_url,
    },
    thumbnailWidth: {
      type: GraphQLInt,
      resolve: node => node.thumbnail_width,
    },
    thumbnailHeight: {
      type: GraphQLInt,
      resolve: node => node.thumbnail_height,
    },
    width: {
      type: GraphQLInt,
    },
    height: {
      type: GraphQLInt,
    },
  }),
});

export default EmbedType;
