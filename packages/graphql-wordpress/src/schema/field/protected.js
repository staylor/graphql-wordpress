import { GraphQLBoolean } from 'graphql';

export default {
  protected: {
    type: GraphQLBoolean,
    description: 'Whether the field is protected with a password.',
  },
};
