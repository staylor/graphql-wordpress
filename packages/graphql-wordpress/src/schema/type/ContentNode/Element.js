import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import ContentNode from 'type/ContentNode';
import Meta from 'type/Meta';

const ElementType = new GraphQLObjectType({
  name: 'Element',
  description: 'An element node.',
  isTypeOf(node) {
    return node.type === 'element';
  },
  fields: () => ({
    tagName: {
      type: GraphQLString,
    },
    attributes: {
      type: new GraphQLList(Meta),
    },
    children: {
      type: new GraphQLList(ContentNode),
    },
  }),
});

export default ElementType;
