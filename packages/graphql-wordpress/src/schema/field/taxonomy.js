import { GraphQLInt } from 'graphql';

import TaxonomyType from 'type/Taxonomy';

export default {
  taxonomy: {
    type: TaxonomyType,
    description: 'Type attribution for the term.',
    resolve: (term, args, context, { rootValue: { loaders: { Taxonomy } } }) =>
      Taxonomy.load(term.taxonomy),
  },
  count: {
    type: GraphQLInt,
    description: 'Number of published posts for the term.',
  },
};
