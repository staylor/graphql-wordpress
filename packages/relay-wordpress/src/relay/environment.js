// @flow
import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import createFetch from 'relay/fetcher';

function createEnviroment(url: string, requestCache: Object = {}) {
  const recordSource = new RecordSource();
  const store = new Store(recordSource);

  const environment = new Environment({
    network: Network.create(createFetch(url, requestCache)),
    store,
  });

  return environment;
}

export default createEnviroment;
