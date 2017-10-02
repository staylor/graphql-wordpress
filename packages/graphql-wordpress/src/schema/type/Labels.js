import { GraphQLObjectType, GraphQLString } from 'graphql';

const LabelsType = new GraphQLObjectType({
  name: 'Labels',
  fields: {
    singular: {
      type: GraphQLString,
    },
    plural: {
      type: GraphQLString,
    },
  },
});

export default LabelsType;
