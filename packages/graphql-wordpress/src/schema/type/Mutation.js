import { GraphQLObjectType } from 'graphql';
import CommentMutations from 'mutation/Comment';

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'WordPress API mutations',
  fields: () => ({
    ...CommentMutations,
  }),
});

export default Mutation;
