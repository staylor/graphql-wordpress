import { GraphQLObjectType } from 'graphql';
import TermInterface from 'interface/Term';
import { globalIdField, slug, name, link } from 'field/identifier';
import taxonomy from 'field/taxonomy';
import description from 'field/description';
import metaField from 'field/meta';
import { registerNodeType, NodeInterface } from 'type/relayNode';

const TagType = new GraphQLObjectType({
  name: 'Tag',
  description: 'A unique identifier for a post.',
  interfaces: [TermInterface, NodeInterface],
  isTypeOf(term) {
    return term.taxonomy === 'post_tag';
  },
  fields: {
    id: globalIdField(),
    ...description,
    ...link,
    ...name,
    ...slug,
    ...taxonomy,
    meta: metaField(),
  },
});

registerNodeType(TagType);

export default TagType;
