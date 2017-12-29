import fs from 'fs';
import typeDefs from './schema/index';

const stream = fs.createWriteStream(`${__dirname}/schema/schema.graphql`);

stream.once('open', () => {
  typeDefs.forEach(def => stream.write(def));
  stream.end();
});
