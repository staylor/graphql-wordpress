import url from 'url';
import request from 'request-promise';
import getClient from 'data/client';

/* eslint-disable no-console */

export const toBase64 = str => new Buffer(str).toString('base64');

const rp = (path, opts = {}) => {
  let uri = path;
  const urlObj = url.parse(path);
  if (!urlObj.host) {
    uri = `${process.env.WP_API_HOST}${path}`;
  }

  const params = Object.assign(
    {
      uri,
      jar: true,
      json: true,
      simple: true,
      strictSSL: false,
    },
    opts
  );

  return request(params);
};

export const clearEndpointCache = path => {
  const client = getClient();
  // eslint-disable-next-line no-console
  console.log(`Clearing cache for: ${path}`);
  return new Promise((resolve, reject) => {
    client.hkeys(path, (err, keys) => {
      if (err) {
        console.log(`Cache lookup failed for: ${path}`);
        return reject(err);
      }
      return resolve(keys.map(hashKey => client.hdelAsync(path, hashKey)));
    });
  });
};

const fetchData = (path, opts = {}) => {
  const key = toBase64(`${JSON.stringify(opts)}`);
  const client = getClient();

  const params = {
    ...opts,
    resolveWithFullResponse: true,
  };

  return new Promise((resolve, reject) => {
    const method = params.method || 'GET';
    const makeRequest = (mutation = false) =>
      rp(path, params)
        .catch(error => {
          console.log(`${method} Request failed for: ${path}`);
          console.log(error);
          reject(error);
        })
        .then(async response => {
          if (response) {
            console.log(`Made ${method} request for: ${path}`);
            if (mutation) {
              await clearEndpointCache(path);
            }
            client.hset(path, key, JSON.stringify(response));
            resolve({
              cache: 'miss',
              data: response,
            });
          } else {
            reject();
          }
        });

    if (params.method && params.method !== 'GET') {
      makeRequest(true);
    } else {
      client.hget(path, key, (err, cached) => {
        if (err) {
          reject(err);
        } else if (cached) {
          console.log(`Resolving from cache: ${path}`);
          resolve({
            cache: 'hit',
            data: JSON.parse(cached),
          });
        } else {
          makeRequest();
        }
      });
    }
  });
};

export default fetchData;
