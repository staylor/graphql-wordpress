import fs from 'fs';

function requireGraphQL(name) {
  const filename = require.resolve(name);
  return fs.readFileSync(filename, 'utf8');
}

const typeDefs = [
  `
  scalar ObjID
  type Query {
    # A placeholder, please ignore
    __placeholder: Int
  }
  type Mutation {
    # A placeholder, please ignore
    __placeholder: Int
  }
  type Subscription {
    # A placeholder, please ignore
    __placeholder: Int
  }
  type YouTubeThumbnails {
    default: YouTubeThumbnail
    media: YouTubeThumbnail
    high: YouTubeThumbnail
    standard: YouTubeThumbnail
    maxres: YouTubeThumbnail
  }
  type YouTubeThumbnail {
    url: String
    width: Int
    height: Int
  }
`,
];

export default typeDefs;

typeDefs.push(requireGraphQL('./YouTubeVideo.graphql'));
