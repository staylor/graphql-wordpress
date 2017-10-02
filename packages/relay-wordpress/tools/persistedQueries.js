import fs from 'fs';
import path from 'path';
import redis from 'redis';
import md5 from 'md5';
import bluebird from 'bluebird';

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

// These values needs to be the same on the GraphQL server
const REDIS_PREFIX = 'wpgql:';
const HASH_KEY = 'queries';

const client = redis.createClient({ prefix: REDIS_PREFIX });
// use this to debug Redis operations
// client.monitor();
client.on('error', err => {
  // eslint-disable-next-line no-console
  console.log(`Error ${err}`);
});

client.on('connect', () => {
  // eslint-disable-next-line no-console
  console.log('Redis client connected');
});

client.on('monitor', (time, args) => {
  // eslint-disable-next-line no-console
  console.log('\n', args);
});

(async () => {
  const queriesDir = path.resolve('./src/queries/__generated__');
  const files = fs.readdirSync(queriesDir);
  return Promise.all(
    files.map(file => {
      const generatedFile = path.join(queriesDir, file);
      // eslint-disable-next-line import/no-dynamic-require, global-require
      const operation = require(generatedFile);
      const queryID = md5(operation.text);
      return client.hsetAsync(HASH_KEY, queryID, operation.text);
    })
  ).then(() => client.quit());
})();
