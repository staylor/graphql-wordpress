import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

const Avatar = new GraphQLObjectType({
  name: 'Avatar',
  description: 'Avatar info.',
  fields: {
    size: { type: GraphQLInt },
    url: { type: GraphQLString },
  },
});

export default Avatar;
