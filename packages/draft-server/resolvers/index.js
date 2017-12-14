import { ObjectId } from 'mongodb';
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import { merge } from 'lodash';
import contentResolvers from './ContentState';
import postResolvers from './Post';
import tagResolvers from './Tag';
import videoResolvers from './Video';
import settingsResolvers from './Settings';

const resolvers = {};

resolvers.ObjID = new GraphQLScalarType({
  name: 'ObjID',
  description: 'Id representation, based on Mongo Object Ids',
  parseValue(value) {
    return ObjectId(value);
  },
  serialize(value) {
    return value.toString();
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return ObjectId(ast.value);
    }
    return null;
  },
});

export default resolvers;

merge(resolvers, contentResolvers, postResolvers, tagResolvers, videoResolvers, settingsResolvers);
// resolvers.Viewer = Object.assign({}, resolvers.Query);
// resolvers.Viewer.id = () => 'me';
