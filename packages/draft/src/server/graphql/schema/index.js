import { requireFiles } from 'server/graphql/utils';

const typeDefs = [
  `
scalar ObjID
type Query

type Mutation

type PageInfo {
  startCursor: String
  endCursor: String
  hasPreviousPage: Boolean
  hasNextPage: Boolean
}`,
];

const files = requireFiles(__dirname);
Object.keys(files).forEach(name => {
  typeDefs.push(files[name]);
});

export default typeDefs;
