import { GraphQLObjectType, GraphQLList } from 'graphql';

import rendered from 'field/rendered';
import raw from 'field/raw';
// 'protected' is a reserved word in JS
import protectedField from 'field/protected';
import ContentNode from 'type/ContentNode';

const Excerpt = new GraphQLObjectType({
  name: 'Excerpt',
  description: 'The excerpt for the object.',
  fields: {
    ...rendered,
    ...raw,
    ...protectedField,
    data: {
      type: new GraphQLList(ContentNode),
    },
  },
});

export default Excerpt;
