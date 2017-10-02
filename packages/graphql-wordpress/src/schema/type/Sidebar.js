import { GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';
import WidgetType from 'type/Widget';
import { globalIdField, name } from 'field/identifier';
import description from 'field/description';
import { registerNodeType, NodeInterface } from 'type/relayNode';

const SidebarType = new GraphQLObjectType({
  name: 'Sidebar',
  description: 'A widget area.',
  interfaces: [NodeInterface],
  fields: {
    id: globalIdField(),
    ...name,
    ...description,
    classname: {
      type: GraphQLString,
      description: 'Extra CSS class to assign to the sidebar in the Widgets interface.',
      resolve: sidebar => sidebar.class,
    },
    beforeWidget: {
      type: GraphQLString,
      description:
        "HTML content to prepend to each widget's HTML output when assigned to this sidebar.",
    },
    afterWidget: {
      type: GraphQLString,
      description:
        "HTML content to append to each widget's HTML output when assigned to this sidebar.",
    },
    beforeTitle: {
      type: GraphQLString,
      description: 'HTML content to prepend to the sidebar title when displayed.',
    },
    afterTitle: {
      type: GraphQLString,
      description: 'HTML content to append to the sidebar title when displayed.',
    },
    widgets: {
      type: new GraphQLList(WidgetType),
      description: 'HTML widgets associated with the sidebar.',
    },
  },
});

registerNodeType(SidebarType);

export default SidebarType;
