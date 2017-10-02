import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const ChartItemImageType = new GraphQLObjectType({
  name: 'ChartItemImage',
  description: 'iTunes chart item image.',
  fields: {
    url: {
      type: GraphQLString,
      description: 'Image URL.',
      resolve: image => image.label,
    },
    height: {
      type: GraphQLInt,
      description: 'Image height.',
      resolve: image => image.attributes.height,
    },
  },
});

export default ChartItemImageType;
