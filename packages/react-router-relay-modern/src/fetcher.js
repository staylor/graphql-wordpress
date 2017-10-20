// @flow
// import RelayQueryResponseCache from 'relay-runtime/lib/RelayQueryResponseCache';
import md5 from 'md5';
import 'isomorphic-fetch';
import type { Variables } from 'react-relay';
import type { ConcreteBatch } from 'relay-runtime';

const isClient = typeof document !== 'undefined';

const getServerCache = id => {
  // eslint-disable-next-line no-underscore-dangle
  const cache = window.__RELAY_PAYLOADS__;
  if (!cache[id]) {
    return null;
  }
  const payload = cache[id];
  delete cache[id];
  return payload;
};

export default function createFetch(url: string, requestCache: Object = {}) {
  return async function fetchQuery(batch: ConcreteBatch, variables: Variables) {
    const vars = { variables, query: null, id: null };
    if (batch.query.operation === 'mutation') {
      vars.query = batch.text;
    } else {
      const queryID = md5(batch.text);
      vars.id = queryID;
      if (isClient) {
        const cache = getServerCache(vars.id);
        if (cache) {
          return cache;
        }
      }
    }
    const fetchResponse = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-App-Name': 'relay-wordpress',
      },
      body: JSON.stringify(vars),
    }).then(response => response.json());

    if (!isClient && vars.id) {
      requestCache[vars.id] = fetchResponse;
    }

    return fetchResponse;
  };
}
