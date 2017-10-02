import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLBoolean } from 'graphql';
import { globalIdField } from 'field/identifier';
import description from 'field/description';
import RewriteType from 'type/Rewrite';
import LabelsType from 'type/Labels';

const TaxonomyType = new GraphQLObjectType({
  name: 'Taxonomy',
  description: 'A taxonomy type.',
  fields: {
    id: globalIdField(),
    name: {
      type: GraphQLString,
      description: 'Identifier for the object.',
      resolve: item => item.slug,
    },
    ...description,
    types: {
      type: new GraphQLList(GraphQLString),
      description: 'Types associated with the taxonomy.',
    },
    hierarchical: {
      type: GraphQLBoolean,
      description: 'Whether or not the taxonomy should have children.',
    },
    rewrite: {
      type: RewriteType,
      description: 'Information that can be used to create pretty permalinks.',
    },
    labels: {
      type: LabelsType,
    },
  },
});

export default TaxonomyType;
