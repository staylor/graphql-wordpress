import { GraphQLObjectType } from 'graphql';

import { slug } from 'field/identifier';

const RewriteType = new GraphQLObjectType({
  name: 'Rewrite',
  description: 'Information that can be used to create pretty permalinks.',
  fields: {
    ...slug,
  },
});

export default RewriteType;
