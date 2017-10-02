import { GraphQLSchema } from 'graphql';
import Query from 'type/Query';
import Mutation from 'type/Mutation';

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
