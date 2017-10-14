import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { graphql } from 'graphql';
import { introspectionQuery, printSchema } from 'graphql/utilities';
import Schema from 'schema';

/* eslint-disable no-console */

const packages = [
  'apollo-wordpress',
  'react-native-apollo-wordpress',
  'react-native-relay-wordpress',
  'relay-wordpress',
];

const fragmentMatcherQuery = `
{
  __schema {
    types {
      kind
      name
      possibleTypes {
        name
      }
    }
  }
}
`;

const queries = {
  schema: introspectionQuery,
  fragmentMatcher: fragmentMatcherQuery,
};

(() => {
  console.log('Generating files:');
  Object.keys(queries).map(async name => {
    const result = await graphql(Schema, queries[name]);
    if (result.errors) {
      console.error('ERROR introspecting schema: ', JSON.stringify(result.errors, null, 2));
    } else {
      const data = JSON.stringify(result.data, null, 2);

      console.log(`generated/${name}.json`);
      fs.writeFileSync(path.join(__dirname, `generated/${name}.json`), data);
      packages.forEach(pkg => {
        const file = `../${pkg}/tools/${name}.json`;
        console.log(file);
        fs.writeFileSync(path.join(__dirname, file), data);
      });
    }
  });
})();

const printed = printSchema(Schema);

console.log('generated/schema.graphql');
fs.writeFileSync(path.join(__dirname, 'generated/schema.graphql'), printed);

packages.forEach(pkg => {
  const file = `../${pkg}/tools/schema.graphql`;
  console.log(file);
  fs.writeFileSync(path.join(__dirname, file), printed);
});
