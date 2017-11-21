import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';
import { MongoClient } from 'mongodb';
import cors from 'cors';

import typeDefs from '../schema';
import resolvers from '../resolvers';
import addModelsToContext from '../model';

const schema = makeExecutableSchema({ typeDefs, resolvers });

const {
  PORT = 8080,
  MONGO_PORT = parseInt(PORT, 10) + 2,
  MONGO_URL = `mongodb://localhost:${MONGO_PORT}/database`,
} = process.env;

async function startServer() {
  const db = await MongoClient.connect(MONGO_URL);

  const app = express().use('*', cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use((req, res, next) => {
    req.context = addModelsToContext({ db });
    next();
  });

  app.use('/graphql', (req, res, next) => {
    graphqlExpress(() => {
      // Get the query, the same way express-graphql does it
      // https://github.com/graphql/express-graphql/blob/3fa6e68582d6d933d37fa9e841da5d2aa39261cd/src/index.js#L257
      const query = req.query.query || req.body.query;
      if (query && query.length > 2000) {
        // None of our app's queries are this long
        // Probably indicates someone trying to send an overly expensive query
        throw new Error('Query too large.');
      }

      return {
        schema,
        context: req.context,
        debug: true,
        formatError(e) {
          console.log(e);
        },
      };
    })(req, res, next);
  });

  app.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql',
    })
  );

  app.listen(PORT, () => console.log(`API Server is now running on http://localhost:${PORT}`));
}

startServer()
  .then(() => {
    console.log('All systems go');
  })
  .catch(e => {
    console.error('Uncaught error in startup');
    console.error(e);
    console.trace(e);
  });
