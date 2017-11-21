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
  type VideoThumbnail {
    url: String
    width: Int
    height: Int
  }
`,
];

export default typeDefs;

typeDefs.push(requireGraphQL('./Video.graphql'));
