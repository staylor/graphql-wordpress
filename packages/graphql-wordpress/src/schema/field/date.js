import { GraphQLString } from 'graphql';

export const date = {
  date: {
    type: GraphQLString,
    description: 'The date the object was published, in the timezone of the site.',
  },
  dateGMT: {
    type: GraphQLString,
    description: 'The date the object was published, as GMT.',
  },
};

export const modified = {
  modified: {
    type: GraphQLString,
    description: 'The date the object was modified, in the timezone of the site.',
  },
  modifiedGMT: {
    type: GraphQLString,
    description: 'The date the object was modified, as GMT.',
  },
};
