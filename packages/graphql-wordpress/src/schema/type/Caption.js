import { GraphQLObjectType } from 'graphql';
import rendered from 'field/rendered';

const Caption = new GraphQLObjectType({
  name: 'Caption',
  description: 'The caption for the object.',
  fields: {
    ...rendered,
  },
});

export default Caption;
