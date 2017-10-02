import { GraphQLEnumType } from 'graphql';

const TAXONOMY_ORDERBY = new GraphQLEnumType({
  name: 'TAXONOMY_ORDERBY',
  description: 'Sort collection by term attribute.',
  values: {
    ID: { value: 'id' },
    INCLUDE: { value: 'include' },
    NAME: { value: 'name' },
    SLUG: { value: 'slug' },
    TERM_GROUP: { value: 'term_group' },
    DESCRIPTION: { value: 'description' },
    COUNT: { value: 'count' },
  },
});

export default TAXONOMY_ORDERBY;
