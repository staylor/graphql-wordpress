import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { graphql } from 'graphql';
import { introspectionQuery, printSchema } from 'graphql/utilities';
import Schema from 'schema';

/* eslint-disable no-console */

const packages = [
  'apollo-wordpress',
  'react-native-relay-wordpress',
  'relay-wordpress'
];

// Save JSON of full schema introspection for Babel Relay Plugin to use
(async () => {
  const result = await graphql(Schema, introspectionQuery);
  if (result.errors) {
    console.error(
      'ERROR introspecting schema: ',
      JSON.stringify(result.errors, null, 2)
    );
  } else {
    const data = JSON.stringify(result.data, null, 2);

    fs.writeFileSync(path.join(__dirname, 'generated/schema.json'), data);
    packages.forEach(package => {
      fs.writeFileSync(
        path.join(__dirname, `../${package}/tools/schema.json`),
        printed
      );
    });
  }
})();

const printed = printSchema(Schema);

// Save user readable type system shorthand of schema
fs.writeFileSync(path.join(__dirname, 'generated/schema.graphql'), printed);

packages.forEach(package => {
  fs.writeFileSync(
    path.join(__dirname, `../${package}/tools/schema.graphql`),
    printed
  );
});
