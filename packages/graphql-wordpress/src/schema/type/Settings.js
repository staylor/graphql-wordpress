import { GraphQLObjectType, GraphQLString } from 'graphql';

const SettingsType = new GraphQLObjectType({
  name: 'Settings',
  description: '.',
  fields: {
    title: {
      type: GraphQLString,
      description: 'Site title.',
    },
    description: {
      type: GraphQLString,
      description: 'Site tagline.',
    },
    timezone: {
      type: GraphQLString,
      description: 'A city in the same timezone as you.',
    },
    language: {
      type: GraphQLString,
      description: 'Site locale code.',
    },
  },
});

export default SettingsType;
