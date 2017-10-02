import { GraphQLObjectType } from 'graphql';

import rendered from 'field/rendered';

const Description = new GraphQLObjectType({
  name: 'Description',
  description: 'The description for the object.',
  fields: {
    ...rendered,
  },
});

export default Description;
