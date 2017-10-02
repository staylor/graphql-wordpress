import { GraphQLObjectType } from 'graphql';
import { nodeField } from 'type/relayNode';
import ViewerType from 'type/Viewer';

const VIEWER_ID = 'me';

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'WordPress Relay App queries',
  fields: () => ({
    node: nodeField,
    viewer: {
      type: ViewerType,
      resolve: () => ({ id: VIEWER_ID }),
    },
  }),
});

export default Query;
