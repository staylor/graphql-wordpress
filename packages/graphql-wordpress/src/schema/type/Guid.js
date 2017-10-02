import { GraphQLObjectType } from 'graphql';

import rendered from 'field/rendered';

const Guid = new GraphQLObjectType({
  name: 'Guid',
  description: 'The globally unique identifier for the object.',
  fields: {
    ...rendered,
  },
});

export default Guid;
