import { Environment, Network, RecordSource, Store, QueryResponseCache } from 'relay-runtime';

const cache = new QueryResponseCache({ size: 25, ttl: 1000 });

function fetchQuery(operation, variables) {
  const cached = cache.get(operation.text, variables);
  if (cached) {
    return cached.payload;
  }

  return fetch('http://graphql.highforthis.com/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })
    .then(response => response.json())
    .then(data => {
      cache.set(operation.text, variables, data);
      return data;
    });
}

const source = new RecordSource();
const store = new Store(source);

const network = Network.create(fetchQuery);

const environment = new Environment({
  network,
  store,
});

export default environment;
