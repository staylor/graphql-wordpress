import { GraphQLObjectType, GraphQLString } from 'graphql';

const TextType = new GraphQLObjectType({
  name: 'Text',
  description: 'A text node.',
  isTypeOf(node) {
    return node.type === 'text';
  },
  fields: () => ({
    text: {
      type: GraphQLString,
    },
  }),
});

export default TextType;
