import { GraphQLString, GraphQLBoolean } from 'graphql';

import FORMAT from 'enum/Format';

export const type = {
  type: {
    type: GraphQLString,
    description: 'Type of Post for the object.',
  },
};

export const template = {
  template: {
    type: GraphQLString,
    description: 'The theme file to use to display the object.',
  },
};

export const format = {
  format: {
    type: FORMAT,
  },
};

export const sticky = {
  sticky: {
    type: GraphQLBoolean,
    description: 'Whether or not the object should be treated as sticky.',
  },
};
