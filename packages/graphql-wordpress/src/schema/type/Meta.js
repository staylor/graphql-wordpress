import { GraphQLObjectType, GraphQLString } from 'graphql';

const Meta = new GraphQLObjectType({
  name: 'Meta',
  description: 'A metadata field for an object.',
  fields: {
    name: {
      type: GraphQLString,
      description: 'Name for the metadata field.',
    },
    value: {
      type: GraphQLString,
      description: 'Value for the metadata field.',
    },
  },
});

export default Meta;
