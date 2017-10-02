import { GraphQLObjectType, GraphQLList } from 'graphql';

import rendered from 'field/rendered';
import raw from 'field/raw';
// 'protected' is a reserved word in JS
import protectedField from 'field/protected';
import ContentNode from 'type/ContentNode';

const Content = new GraphQLObjectType({
  name: 'Content',
  description: 'The content for the object.',
  fields: () => ({
    ...rendered,
    ...raw,
    ...protectedField,
    data: {
      type: new GraphQLList(ContentNode),
    },
  }),
});

export default Content;
