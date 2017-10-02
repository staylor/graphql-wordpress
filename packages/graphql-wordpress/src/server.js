import 'dotenv/config';
import express from 'express';
import graphQLHTTP from 'express-graphql';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import responseTime from 'response-time';
import Schema from 'schema';
import getClient, { HASH_KEY } from 'data/client';
import getLoaders from 'data/loaders';
import persistedQueries from '../generated/queries.json';
import queryLogger from './middleware/queryLogger';

/* eslint-disable no-console */

process.env.TZ = 'America/New_York';

const app = express();
app.use(cookieParser());

app.use(
  '/graphql',
  responseTime((req, res, time) => {
    console.log(`Response time: ${Math.floor(time)}ms`);
  })
);

app.use(express.static('public'));

app.use('/graphql', bodyParser.json(), async (req, res, next) => {
  // Apollo
  if (req.body.id && req.get('x-app-name') === 'wp-apollo-app') {
    const queries = Object.keys(persistedQueries).reduce(
      (memo, key) => Object.assign({}, memo, { [persistedQueries[key]]: key }),
      {}
    );
    req.body.query = queries[req.body.id];
    next();
    return;
  }

  // Relay Modern
  if (req.body.id && req.get('x-app-name') === 'wp-relay-app') {
    console.log(`Hydrating Query: ${req.body.id}`);
    const client = getClient();
    const query = await client.hgetAsync(HASH_KEY, req.body.id);
    req.body.query = query;
  }
  next();
});

// uncomment this to output incoming query and request headers
app.use(queryLogger());

app.use('/graphql', (req, res, next) =>
  graphQLHTTP(request => ({
    graphiql: true,
    schema: Schema,
    rootValue: {
      cookies: request.cookies,
      loaders: getLoaders(),
    },
  }))(req, res, next)
);

app.listen(process.env.GRAPHQL_PORT, () => {
  console.log(`GraphQL Server is now running on port ${process.env.GRAPHQL_PORT}`);
});
