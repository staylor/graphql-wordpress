import { GraphQLObjectType, GraphQLString } from 'graphql';
import { dimensions } from 'field/media';

const MediaSizeType = new GraphQLObjectType({
  name: 'MediaSize',
  description: 'The details for the media size.',
  fields: {
    name: { type: GraphQLString },
    ...dimensions,
    file: { type: GraphQLString },
    mimeType: { type: GraphQLString },
    sourceUrl: { type: GraphQLString },
  },
});

export default MediaSizeType;
