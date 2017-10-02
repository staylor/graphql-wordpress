import { GraphQLObjectType, GraphQLString } from 'graphql';

import { name } from 'field/identifier';
import description from 'field/description';
import { content } from 'field/content';

const WidgetType = new GraphQLObjectType({
  name: 'Widget',
  description: 'A widget.',
  fields: {
    id: {
      type: GraphQLString,
      description: 'Identifier for widget.',
    },
    ...name,
    ...description,
    classname: {
      type: GraphQLString,
      description: 'CSS class for the widget.',
    },
    ...content,
  },
});

export default WidgetType;
