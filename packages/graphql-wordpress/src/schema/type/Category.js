import { GraphQLObjectType } from 'graphql';
import TermInterface from 'interface/Term';
import description from 'field/description';
import metaField from 'field/meta';
import { globalIdField, slug, name, link } from 'field/identifier';
import taxonomy from 'field/taxonomy';
import { registerNodeType, NodeInterface } from 'type/relayNode';

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  description: 'A unique identifier for a post.',
  interfaces: [TermInterface, NodeInterface],
  isTypeOf(term) {
    return term.taxonomy === 'category';
  },
  fields: () => ({
    id: globalIdField(),
    ...description,
    ...link,
    ...name,
    ...slug,
    ...taxonomy,
    meta: metaField(),
    // extra category fields
    parent: {
      type: CategoryType,
      description: 'The parent term ID.',
      resolve: (category, args, context, { rootValue: { loaders: { Category } } }) =>
        category.parent > 0 ? Category.load(category.parent) : null,
    },
  }),
});

registerNodeType(CategoryType);

export default CategoryType;
