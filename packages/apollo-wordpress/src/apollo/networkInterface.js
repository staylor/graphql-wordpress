import { PersistedQueryNetworkInterface } from 'persistgraphql';
import queryMap from 'apollo/queries.json';

export default uri => {
  const networkInterface = new PersistedQueryNetworkInterface({
    queryMap,
    uri,
    opts: {
      headers: {
        'X-App-Name': 'apollo-wordpress',
      },
    },
  });

  return networkInterface;
};
