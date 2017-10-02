import { GraphQLInterfaceType, GraphQLNonNull, GraphQLID, GraphQLInt, GraphQLList } from 'graphql';

import Meta from 'type/Meta';
import TaxonomyType from 'type/Taxonomy';
import { slug, name, link } from 'field/identifier';
import description from 'field/description';

const TermInterface = new GraphQLInterfaceType({
  name: 'TermInterface',
  description: 'Term fields.',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Unique identifier for the object.',
    },
    ...description,
    ...link,
    ...name,
    ...slug,
    count: { type: GraphQLInt },
    taxonomy: { type: TaxonomyType },
    meta: { type: new GraphQLList(Meta) },
  },
});

export default TermInterface;
