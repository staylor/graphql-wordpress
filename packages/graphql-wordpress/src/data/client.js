import redis from 'redis';
import bluebird from 'bluebird';

/* eslint-disable no-console */

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

// This value needs to be the same on the Relay server
const REDIS_PREFIX = 'wpgql:';
export const HASH_KEY = 'queries';

let client;

export default function getClient() {
  if (client) {
    return client;
  }

  client = redis.createClient({ prefix: REDIS_PREFIX });
  // use this to debug Redis operations
  // client.monitor();
  client.on('error', err => {
    console.log(`Error ${err}`);
  });

  client.on('connect', () => {
    console.log('Redis client connected');
  });

  client.on('monitor', (time, args) => {
    console.log('\n', args);
  });

  return client;
}
