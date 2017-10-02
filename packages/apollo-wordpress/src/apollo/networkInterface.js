import { PersistedQueryNetworkInterface } from 'persistgraphql';
import queryMap from 'apollo/queries.json';

const uri = 'http://localhost:3000/graphql';

const networkInterface = new PersistedQueryNetworkInterface({
  queryMap,
  uri,
  opts: {
    headers: {
      'X-App-Name': 'apollo-wordpress',
    },
  },
});

export default networkInterface;
