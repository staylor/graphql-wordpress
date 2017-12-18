import { requireFiles } from 'utils/fs';

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
    startCursor: String
    endCursor: String
    hasPreviousPage: Boolean
    hasNextPage: Boolean
  }
`,
];

const files = requireFiles(__dirname);
Object.keys(files).forEach(name => {
  typeDefs.push(files[name]);
});

export default typeDefs;
