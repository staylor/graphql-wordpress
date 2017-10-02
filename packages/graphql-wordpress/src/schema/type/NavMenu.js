import { GraphQLObjectType, GraphQLList } from 'graphql';
import NavMenuItemType from 'type/NavMenuItem';
import { globalIdField, name } from 'field/identifier';
import description from 'field/description';
import { registerNodeType, NodeInterface } from 'type/relayNode';

const NavMenuType = new GraphQLObjectType({
  name: 'NavMenu',
  description: 'A nav menu.',
  interfaces: [NodeInterface],
  fields: {
    id: globalIdField(),
    ...name,
    ...description,
    items: {
      type: new GraphQLList(NavMenuItemType),
      description: 'Items associated with the menu.',
    },
  },
});

registerNodeType(NavMenuType);

export default NavMenuType;
