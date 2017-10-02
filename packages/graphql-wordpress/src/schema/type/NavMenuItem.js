import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLID } from 'graphql';
import { toGlobalId } from 'graphql-relay';

const NavMenuItemType = new GraphQLObjectType({
  name: 'NavMenuItem',
  description: 'A nav menu item.',
  fields: {
    id: {
      type: GraphQLID,
      description: 'Menu item ID.',
      resolve: item => toGlobalId('NavMenuItem', item.id),
    },
    parent: {
      type: GraphQLID,
      description: 'Menu item that this item is a child of.',
      resolve: item => (item.parent > 0 ? toGlobalId('NavMenuItem', item.parent) : null),
    },
    order: {
      type: GraphQLInt,
      description: 'The order that this item appears in the menu.',
    },
    type: {
      type: GraphQLString,
      description: 'The classification of object.',
    },
    typeName: {
      type: GraphQLString,
      description: 'The type of object within a classification.',
      resolve: item => item.type_name,
    },
    typeSlug: {
      type: GraphQLString,
      description: 'The rewrite slug for the object type.',
      resolve: item => item.type_slug,
    },
    dataSlug: {
      type: GraphQLString,
      description: 'An alphanumeric identifier for the object unique to its type.',
      resolve: item => item.object_slug,
    },
    dataID: {
      type: GraphQLID,
      description: 'Unique identifier for the object.',
      resolve: item => (item.object_id > 0 ? toGlobalId('NavMenuItem', item.object_id) : null),
    },
    url: {
      type: GraphQLString,
      description: 'The item url.',
    },
    title: {
      type: GraphQLString,
      description: 'The display name for the item.',
    },
    target: {
      type: GraphQLString,
      description: 'The target for the item.',
    },
  },
});

export default NavMenuItemType;
