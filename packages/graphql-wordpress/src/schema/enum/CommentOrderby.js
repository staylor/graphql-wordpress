import { GraphQLEnumType } from 'graphql';

const COMMENT_ORDERBY = new GraphQLEnumType({
  name: 'COMMENT_ORDERBY',
  description: 'Sort collection by object attribute.',
  values: {
    ID: { value: 'id' },
    INCLUDE: { value: 'include' },
    DATE: { value: 'date' },
    DATE_GMT: { value: 'date_gmt' },
    POST: { value: 'post' },
    PARENT: { value: 'parent' },
    TYPE: { value: 'type' },
  },
});

export default COMMENT_ORDERBY;
