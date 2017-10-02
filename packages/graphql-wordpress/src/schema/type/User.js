import { GraphQLObjectType, GraphQLList } from 'graphql';
import Avatar from 'type/Avatar';
import { globalIdField, slug, name, link } from 'field/identifier';
import description from 'field/description';
import { registerNodeType, NodeInterface } from 'type/relayNode';

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'An object.',
  interfaces: [NodeInterface],
  fields: {
    id: globalIdField(),
    ...name,
    ...description,
    ...link,
    ...slug,
    avatarUrls: {
      type: new GraphQLList(Avatar),
      description: 'Avatar URLs for the user.',
      resolve: user =>
        Object.keys(user.avatar_urls).map(key => ({
          size: key,
          url: user.avatar_urls[key],
        })),
    },
  },
});

registerNodeType(UserType);

export default UserType;
