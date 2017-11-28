import fs from 'fs';

function requireGraphQL(name) {
  const filename = require.resolve(name);
  return fs.readFileSync(filename, 'utf8');
}

const typeDefs = [
  `
  scalar ObjID
  type Query {
    id: ObjID
  }
  type Mutation {
    id: ObjID
  }
  type PageInfo {
    startCursor: String,
    endCursor: String,
    hasPreviousPage: Boolean,
    hasNextPage: Boolean
  }
`,
];

export default typeDefs;

typeDefs.push(requireGraphQL('./Video.graphql'));
