import fs from 'fs';
import path from 'path';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

const schemaFile = path.resolve('./generated/schema.graphql');

export const getMockSchema = (mocks = {}, preserveResolvers = false) => {
  const graphqlSchema = fs.readFileSync(schemaFile, 'utf8');
  const schema = makeExecutableSchema({ typeDefs: graphqlSchema });
  // Add mocks, modifies schema in place
  addMockFunctionsToSchema({ schema, mocks, preserveResolvers });
  return schema;
};

export const dateRegex = /[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}/;
